
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NewScrenn from "./src/Screen/NewScrenn";
import RequestScreen from "./src/Screen/RequestScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="NewScrenn" component={NewScrenn} />
        <Tab.Screen name="RequestScreen" component={RequestScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
