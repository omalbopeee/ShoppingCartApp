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
          style={styles.quantityButton}
          onPress={() => dispatch(decrementQuantity(item.product.id))}
        >
          <Text style={styles.quantityButtonText}>-</Text>
        </Pressable>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <Pressable
          style={styles.quantityButton}
          onPress={() => dispatch(incrementQuantity(item.product.id))}
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.removeButton}
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
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    elevation: 1,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
  },
  info: {
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 14,
    marginTop: 2,
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityButton: {
    backgroundColor: '#e0e0e0',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity: {
    fontSize: 14,
    fontWeight: '600',
    marginHorizontal: 16,
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
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: 'red',
    paddingHorizontal: 7,
    paddingVertical: 5,
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
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  totalAmount: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default CartScreen;
