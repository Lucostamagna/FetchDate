
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NewScrenn from "./src/Screen/NewScrenn";
import RequestScreen from "./src/Screen/RequestScreen";
import ProfileScreen from "./src/Screen/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator   screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#5F9EA0',
          borderTopColor: 'white', 
          borderTopWidth: 2, 
          paddingTop: 8, // Espaciado superior de la TabBar
          borderTopLeftRadius: 20, // Radio de esquina superior izquierda
          borderTopRightRadius: 20,
        },
        tabBarIconStyle: {
          
          marginBottom: -3, 
        },
        tabBarLabelStyle: {
          color:'black',
          fontSize: 12, // Tamaño de la etiqueta de la TabBar
          marginBottom: 3, // Espaciado inferior de la etiqueta de la TabBar
        },
        tabBarInactiveTintColor: 'black', // Color del icono y la etiqueta cuando está inactivo
        tabBarActiveTintColor: '#fff', // Color del icono y la etiqueta cuando está activo
      }}>
        <Tab.Screen name="Home" component={NewScrenn} />
        {/* <Tab.Screen name="RequestScreen" component={RequestScreen} /> */}
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
