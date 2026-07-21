import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductListScreens from '../../Screens/ProductListScreens.tsx';
import CartScreen from '../../Screens/CartScreen.tsx';

const RootNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#fff'},
        headerTitleStyle: {fontWeight: '700'},
        headerTitleAlign: 'center',
      }}>
        <Tab.Screen name="Products" component={ProductListScreens} />
        <Tab.Screen name="Cart" component={CartScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
