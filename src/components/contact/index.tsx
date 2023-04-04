import React, { useEffect, useState } from "react";
import { View, Text, PermissionsAndroid, FlatList, Image, ScrollView } from "react-native";
import Contacts from 'react-native-contacts';
import fonts from "../../assets/fonts";
import { styles } from "./style";


const ContactList = () => {

    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0');
        return `#${randomColor}`;
    };
    

    const [contacts, setContacts] = useState([]);


    // .then(response => {
    //   if(response == 'granted') {
    //     Contacts.getAll()
    //     .then((contacts) => {
    //       // work with contacts
    //       setContacts(contacts)
    //       console.log(contacts)
    //     })
    //     .catch((e) => {
    //       console.log(e)
    //     })
    //   }
    // }
    // )

    const getContacts = async () => {

        try {
            const permission = await
                PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_CONTACTS,

                );

            if (permission === 'granted') {
                const contacts = await Contacts.getAll();
                console.log(contacts);
                setContacts(contacts);

            }
        }
        catch (error) {
            console.log(error);
        }
    }



    // Contacts.getAll().then((contacts) => {
    //     console.log(contacts);
    //     setContacts([contacts]);
    // })



    useEffect(() => {
        getContacts();

    }, []);

    const renderItem = ({ item }) => {
        console.log(item.hasThumbnail)
        return (
            
            <View style={styles.mainview}>
                <View style={[styles.icons,{backgroundColor: generateColor()}]}>
                    {!item.hasThumbnail && (<Text style={styles.icontext}>{item.displayName[0] + item.familyName[0]}</Text>)}
                    {item.hasThumbnail && (<Image source={{ uri: item.thumbnailPath }} style={styles.thumbnailImg} />)}

                </View>

                <View style={styles.details}>
                    <Text style={styles.name} > {item.displayName} </Text>
                    <Text>{item.phoneNumbers[0].number}</Text>
                </View>

            </View>
        )
    };
    
    return (
        <View>

            <View style={styles.header}>
                <Image source={require('../../assets/images/dashboard.png')} />
                <Text style={styles.headerText}> Contacts </Text>
                <Image source={require('../../assets/images/search.png')} />
            </View>
            <View style={styles.line}></View>

            {/* <View style={{position:"absolute"}}>
        <Image source={require('../../assets/images/dashboard.png')} />
    </View> */}

            <View style={styles.list}>
                <FlatList data={contacts} renderItem={renderItem} />
            </View>

        </View>
    );
};

export default ContactList;