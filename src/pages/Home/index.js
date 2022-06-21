import React,{useState} from 'react'
import {Keyboard} from 'react-native'
import { Container, Logotipo,TitleLogotipo} from './styles'
import { AntDesign } from '@expo/vector-icons'; 
import InputRepository from '../../components/InputRepository';
import ItemList from '../../components/ItemList';
import api from  '../../services/api';

export function Home({navigation}){
   const [nickname, setNickname] = useState(''); 

   async function handleSearchUser () {
      try{
        //reponse vai receber o user  pesquisado 
        response = await api.get('/users/' + 'jefersonqueiroga'); 
        console.log(response)    
        //atribuinto ao data o response 
        const {data} = response; 

        //objeto com os atributos id, nome e login
        const obj = {
          id: data.id, 
          nome: data.name, 
          login: data.login,
        }
        

        Keyboard.dismiss();
        setNickname('');  
       
        console.log(obj);

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
         <InputRepository  onPress={()=> handleSearchUser() }/>
         <ItemList/>
         <ItemList/>
         <ItemList/>


      </Container>
   );
}
