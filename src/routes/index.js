import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Connect from '../pages/Connect';
import Register from '../pages/Register';
import Forgot from '../pages/Forgot';
import Verification from '../pages/Verification';
import Password from '../pages/Password';
import Home from '../pages/Home';
import ItemModal from '../components/Modal';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Connect"
        component={Connect}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Forgot"
        component={Forgot}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Verification"
        component={Verification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ItemModal"
        component={ItemModal}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Password"
        component={Password}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
