import React from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
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
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <Pressable style={styles.addButton} onPress={() => handleAddToCart(item)}>
        <Text style={styles.addButtonText}>
          Add To Cart
        </Text>

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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 16,
    paddingBottom: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 1,
  },
  info: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginTop: 3,
  },
  addButton: {
    backgroundColor: 'black',
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 8,
  },
  addButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,

  }
});

export default ProductListScreens;
