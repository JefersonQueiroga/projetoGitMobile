
import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
   background-color:#E9E9E9;
   flex-direction: row;
   align-items: center ;
   justify-content: space-between;
   padding: 0 30px ;
   margin: 5px;
`;

export const TextItem = styled.Text`
   flex: 1;
   font-size: 16px ;
   color: #525252;
`;

export const Separator =styled.View`
   height: 50px;
   width: 1px ;
   margin: 0 30px;
   background-color: #525252;
`;

export const ButtonItem = styled(TouchableOpacity)`
   align-items: center;
`;