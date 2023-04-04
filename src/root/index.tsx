import React from "react";
import { View} from "react-native";
// import Contacts from 'react-native-contacts';
import ContactList from "../components/contact";

// Contacts.getAll().then(contacts => {
//     // contacts returned
//     console.log(contacts)
//   })

// const App = () => {
//     return(
//         <View>
//             <Text> Hii </Text>
            
//         </View>
//     )
// };
// const App = () => {
//     const [contacts, setContacts] = useState([]);
//     useEffect(() => {
//       Contacts.getAll().then(contacts => {
//         console.log(contacts);
//         setContacts([contacts]);
//       });
//     }, []);

//     const renderItem = ({item}) => {
//         return <View >
//             <Text> {item} </Text>
//         </View>;
// }

// return (
//     <View>
//         <Text> Huii</Text>
//         <FlatList
//       data={contacts}
//       renderItem={renderItem}
      
     
//     />
//     </View>
   
//     )
// }

const App = () => {
  return(
    <View>
      <ContactList />
    </View>
  )
}


export default App;