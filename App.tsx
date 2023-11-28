import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddUserPage from "./src/pages/add-user";
import UsersPage from "./src/pages/users";
import UserProfilePage from "./src/pages/user-profile";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Usuarios" component={UsersPage} />
      <Tab.Screen name="Adicionar" component={AddUserPage} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen
          name="Perfil do Usuario"
          component={UserProfilePage}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
