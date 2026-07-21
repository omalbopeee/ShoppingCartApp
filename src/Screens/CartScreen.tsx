import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../store/hooks.ts';
import { CartItem } from '../utility/type/product';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../store/cartSlice.ts';

const CartScreen = () => {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector(state => state.cart.items);

  const cartItemTotal = cartItems.reduce(
    (sum, item) =>sum + item.product.price * item.quantity,
    0,
  );

  const renderCartItems = ({ item }: { item: CartItem }) => (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.name}>{item.product.name}</Text>
        <Text style={styles.price}>${item.product.price.toFixed(2)}</Text>
      </View>
      <View style={styles.quantityRow}>
        <Pressable
          style={({ pressed }) => [
            styles.quantityButton,
            pressed && styles.quantityButtonPressed,
          ]}
          onPress={() => dispatch(decrementQuantity(item.product.id))}
        >
          <Text style={styles.quantityButtonText}>-</Text>
        </Pressable>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <Pressable
          style={({ pressed }) => [
            styles.quantityButton,
            pressed && styles.quantityButtonPressed,
          ]}
          onPress={() => dispatch(incrementQuantity(item.product.id))}
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </Pressable>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.removeButton,
          pressed && styles.removeButtonPressed,
        ]}
        onPress={() => dispatch(removeFromCart(item.product.id))}
      >
        <Text style={styles.removeButtonText}>Remove</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItems}
        keyExtractor={item => item.product.id}
      />
      <View style={styles.total}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalAmount}>${cartItemTotal.toFixed(2)} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 10,
    paddingBottom: 10,
  },

  card: {
    marginTop: 12,
    marginHorizontal: 4,
    borderRadius: 20,
    padding: 16,
    backgroundColor: '#FFFFFF',
    shadowColor: '#1a1a2e',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 14,
    elevation: 6,
  },
  info: {
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 13,
    fontWeight: '700',
    color: '#3A3A3C',
    marginTop: 6,
    backgroundColor: '#F0F0F3',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    overflow: 'hidden',
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityButton: {
    backgroundColor: '#EAEAEC',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#C7C7CC',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
  quantity: {
    fontSize: 14,
    fontWeight: '600',
    marginHorizontal: 16,
  },
  quantityButtonPressed: {
    borderBottomWidth: 0,
    transform: [{ translateY: 2 }],
    shadowOpacity: 0,
    elevation: 0,
  },
  quantityButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  removeButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },
  removeButton: {
    alignSelf: 'flex-end',
    borderRadius: 10,
    backgroundColor: '#E63946',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderBottomWidth: 3,
    borderBottomColor: '#A72730',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  removeButtonPressed: {
    borderBottomWidth: 0,
    transform: [{ translateY: 3 }],
    shadowOpacity: 0,
    elevation: 0,
  },
  total: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 8,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1C1C1E',
  },
});

export default CartScreen;
