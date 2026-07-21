import React from 'react';
import { Text, View } from 'react-native';
import { useAppSelector } from '../store/hooks.ts';

const CartScreen = () => {

  const cartItems = useAppSelector(state => state.cart.items);

  return (
    <View>
      <Text>Cart</Text>
    </View>
  );
};

export default CartScreen;
