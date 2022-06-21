import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from './pages/Home';
import { Details } from './pages/Details';

const Stack = createNativeStackNavigator();

export default function Routes(){
   return ( 
      <Stack.Navigator>
         <Stack.Screen name='home' component={Home}/>
         <Stack.Screen name='details'component={Details}/>
      </Stack.Navigator>
   );
}

