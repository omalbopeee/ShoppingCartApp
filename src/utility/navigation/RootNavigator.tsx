import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductListScreens from '../../Screens/ProductListScreens.tsx';
import CartScreen from '../../Screens/CartScreen.tsx';
import { StyleSheet, Text ,View} from 'react-native';


const RootNavigator = () => {
  const Tab = createBottomTabNavigator();

  const ProductTabIcon = ({ focused }: { focused: boolean }) => (
    <View
      style={[styles.tabIconWrapper, focused && styles.tabIconWrapperActive]}
    >
      <Text style={styles.tabIconEmoji}>🛍️</Text>
    </View>
  );

  const CartTabIcon = ({ focused }: { focused: boolean }) => (
    <View
      style={[styles.tabIconWrapper, focused && styles.tabIconWrapperActive]}
    >
      <Text style={styles.tabIconEmoji}>🛒</Text>
    </View>
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Products"
        screenOptions={{
          headerStyle: { backgroundColor: '#1C1C1E' },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 18,
            letterSpacing: 0.3,
          },
          headerTitleAlign: 'center',
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: '#1C1C1E',
          tabBarInactiveTintColor: '#9A9AA0',
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      >
        <Tab.Screen
          name="Products"
          component={ProductListScreens}
          options={{
            title: 'Products',
            tabBarIcon: ({ focused }) => <ProductTabIcon focused={focused} />,
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            title: 'cart',
            tabBarIcon: ({ focused }) => <CartTabIcon focused={focused} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 78,
    paddingTop: 10,
    paddingBottom: 14,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 12,
  },
  tabBarLabel: {
    fontSize: 15,
    fontWeight: '600',
  },
  tabIconWrapper: {
    width: 44,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIconWrapperActive: {
    backgroundColor: '#F0F0F3',
  },
  tabIconEmoji: {
    fontSize: 20,
  },
});

export default RootNavigator;
