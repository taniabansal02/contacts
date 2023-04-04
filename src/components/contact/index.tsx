import React, { useEffect, useState } from "react";
import { View, Text, PermissionsAndroid, FlatList, Image, ScrollView } from "react-native";
import Contacts from 'react-native-contacts';
import fonts from "../../assets/fonts";


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

        try{
            const permission = await
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                
              );

              if(permission === 'granted'){
                const contacts = await Contacts.getAll();
                console.log(contacts);
                setContacts(contacts);
                
            }
        }
        catch(error){
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

    const renderItem = ({item}) => {
        console.log(item.hasThumbnail)
        return(
            
            
            
            <View style={{flexDirection: 'row',  marginHorizontal:30, marginTop: 15}}>
                <View style={{backgroundColor: generateColor(), borderRadius: 25, height:50, width:50, alignItems:'center', justifyContent:'center'}}>
                    {!item.hasThumbnail && ( <Text style={{color:'white'}}>{item.displayName[0] + item.familyName[0]}</Text> )}
                    {item.hasThumbnail && (<Image source={{uri: item.thumbnailPath}} style={{height: 50, width: 50 , borderRadius: 25}}/> )} 
                 
                </View>

                <View style={{marginLeft:23, marginTop:6}}>
                <Text style={{color: 'black', fontFamily:fonts.MEDIUM, fontSize:16}} > {item.displayName} </Text>

                
                <Text>{item.phoneNumbers[0].number}</Text>

                </View>
                
                </View>
           
           
            
        )
    };




    return (
        <View>
            <View style={{position:'relative'}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:25, marginTop: 10, marginBottom:4}}>
                <Image source={require('../../assets/images/dashboard.png')} />
                <Text style={{color:'#3D535D', fontSize:20, fontWeight:'600', fontFamily: fonts.SEMIBOLD}}> Contacts </Text>
                <Image source={require('../../assets/images/search.png')} />
            </View>
            <View style={{backgroundColor:'#ECEFF1', height:1, marginTop: 5}}></View>
            </View>
   
    {/* <View style={{position:"absolute"}}>
        <Image source={require('../../assets/images/dashboard.png')} />
    </View> */}
            
            <View style={{marginTop:20}}> 
                
            <FlatList  data={contacts} renderItem={ renderItem} />

            </View>
            
            

        </View>
    );
};

export default ContactList;