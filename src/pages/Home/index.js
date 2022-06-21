import React,{useState} from 'react'
import {Keyboard,FlatList} from 'react-native'
import { Container, Logotipo,TitleLogotipo} from './styles'
import { AntDesign } from '@expo/vector-icons'; 
import InputRepository from '../../components/InputRepository';
import ItemList from '../../components/ItemList';
import api from  '../../services/api';

export function Home({navigation}){
   const [nickname, setNickname] = useState(''); 
   const [ users,setUsers ] = useState([]);
 

   function navigationDetails(){
      navigation.navigate('details');
   }


   async function handleSearchUser () {
      try{
        //reponse vai receber o user  pesquisado 
        console.log("----------------");
        console.log(nickname);
        let response = await api.get('/users/' + nickname); 
        //atribuinto ao data o response 
        const {data} = response; 

        //objeto com os atributos id, nome e login
        const obj = {
          id: data.id, 
          nome: data.name, 
          login: data.login,
        }

        setUsers( [...users, obj ] );
        setNickname(' ');

        console.log("Finalllllll");

      }catch(error){
      console.error(error);
      }
    }

   return(
      <Container>
         <Logotipo>
            <AntDesign name="github" size={100} color="#8257E5" />
            <TitleLogotipo>GIT.Networking</TitleLogotipo>
         </Logotipo>
         <InputRepository placeholder={"Digitar o nickname"} 
            value={nickname}
            onPress={ handleSearchUser } 
            onChangeText={setNickname} />
        
         <FlatList  data={users}  
          keyExtractor={item => item.id.toString()} 
          renderItem={ ({item}) =>  (
              <ItemList name={item.login} onPress={ () => navigationDetails()}/>
          ) }
         /> 

      </Container>
   );
}
