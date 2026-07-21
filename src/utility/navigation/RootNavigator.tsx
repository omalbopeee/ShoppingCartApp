import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductListScreens from '../../Screens/ProductListScreens.tsx';
import CartScreen from '../../Screens/CartScreen.tsx';
import { StyleSheet, Text } from 'react-native';
import cartScreen from '../../Screens/CartScreen.tsx';

const RootNavigator = () => {
  const Tab = createBottomTabNavigator();

  const ProductTabIcon = ({ focused }: { focused: boolean }) => {
    return <Text>🛍️</Text>;
  };
  const CartTabIcon = ({ focused }: { focused: boolean }) => {
    return <Text>🛒</Text>;
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Products"
        screenOptions={{
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#FFF',
          headerTitleStyle: { fontWeight: 700 },
          headerTitleAlign: 'center',
          tabBarStyle: styles.tabBarStyle,
        }}
      >
        <Tab.Screen
          name="Products"
          component={ProductListScreens}
          options={{
            title: 'Products',
            tabBarIcon: focused => <ProductTabIcon focused />,
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            title: 'Products',
            tabBarIcon: focused => <CartTabIcon focused />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 70,
    paddingTop: 6,
    paddingBottom: 6,
    borderTopWidth: 1,
  },
});

export default RootNavigator;
