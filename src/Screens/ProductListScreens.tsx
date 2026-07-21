import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { products } from '../utility/data/product-data.ts';
import { Product } from '../utility/type/product';
import { useAppDispatch } from '../store/hooks.ts';
import { addToCart } from '../store/cartSlice.ts';

const ProductListScreens = () => {
  const dispatch = useAppDispatch();
  const handleAddToCart = (item: Product) => {
    dispatch(addToCart(item));
  };

  const renderProducts = ({ item }: { item: Product }) => (
    <View style={styles.card}>
      <View style={styles.imageFrame}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.addButton,
          pressed && styles.addButtonPressed,
        ]}
        onPress={() => handleAddToCart(item)}
      >
        <Text style={styles.addButtonText}>Add To Cart</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProducts}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDF2',
  },
  list: {
    padding: 16,
    paddingBottom: 24,
  },
  separator: {
    height: 14,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 12,
    shadowColor: '#1a1a2e',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 14,
    elevation: 6,
  },
  imageFrame: {
    padding: 3,
    borderRadius: 16,
    backgroundColor: '#E4E4EA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 13,
  },
  info: {
    flex: 1,
    marginLeft: 14,
    marginRight: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1C1C1E',
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
  addButton: {
    backgroundColor: '#2C2C2E',
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 22,
    borderBottomWidth: 3,
    borderBottomColor: '#000000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  addButtonPressed: {
    borderBottomWidth: 0,
    transform: [{ translateY: 3 }],
    shadowOpacity: 0,
    elevation: 0,
  },
  addButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
});
export default ProductListScreens;
