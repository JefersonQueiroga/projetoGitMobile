
import React from 'react';
import {Text,TouchableOpacity} from 'react-native'
import {
   Container,
   InputText,
   Icon
 } from './styles'
 import { Ionicons } from '@expo/vector-icons'; 

export default function InputRepository(props) {

   return (
      <Container>
         <InputText placeholder={props.placeholder} 
            onChangeText={props.onChangeText} value={props.value} />
         <TouchableOpacity onPress={props.onPress}>
            <Ionicons name="chevron-forward-outline" size={24} color="black" />
         </TouchableOpacity>
      </Container>
   )
}   