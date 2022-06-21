
import React from 'react';
import {
   Container,
   TextItem,
   ButtonItem,
   Separator
 } from './styles'
 import { Ionicons } from '@expo/vector-icons'; 

export default function ItemList(props) {
   return (
      <Container>
         <TextItem>{ props.name }</TextItem>
         <Separator/>
         <ButtonItem onPress={ props.onPress }>
               <Ionicons name="md-eye-outline" size={25} color="black" />  
         </ButtonItem>
      </Container>
   )
}   