import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import BlogScreen from './src/screens/BlogScreen';
import ContactScreen from './src/screens/ContactScreen';
import ProjectsScreen from './src/screens/ProjectsScreen';
import SkillsScreen from './src/screens/SkillsScreen';

export default function App() {
  const Drawer = createDrawerNavigator();
  const MyTheme = {
    dark: false,
    colors: {
      primary: '#ffffff',
      background: '#ffffff',
      card: '#20232A',
      text: '#ffffff',
      border: '#ffffff',
      notification: '#ffffff',
    },
  };
  return (
    <NavigationContainer  theme={MyTheme}>
    <Drawer.Navigator useLegacyImplementation initialRouteName="Home" screenOptions={{
    headerTintColor: "#ffffff",
    
}}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Blog" component={BlogScreen} />
        <Drawer.Screen name="Contacts" component={ContactScreen} />
        <Drawer.Screen name="Projects" component={ProjectsScreen} />
        <Drawer.Screen name="Skills" component={SkillsScreen} />
      </Drawer.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C34',
    alignItems: 'center',
    justifyContent: 'center',
  },
});