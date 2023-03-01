import 'react-native-gesture-handler';
import Home from './Home';
// import Settings from './Settings';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export function AppStack() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Conversion" component={Home} />
      {/* <Drawer.Screen name="Settings" component={Settings} /> */}
    </Drawer.Navigator>
  );
}