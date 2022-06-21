
import React from 'react';
import {
   Container,
   TextItem,
   ButtonItem,
   Separator
 } from './styles'
 import { Ionicons } from '@expo/vector-icons'; 

export default function ItemList() {
   return (
      <Container>
         <TextItem>Texto</TextItem>
         <Separator/>
         <ButtonItem>
               <Ionicons name="md-eye-outline" size={25} color="black" />  
         </ButtonItem>
      </Container>
   )
}   