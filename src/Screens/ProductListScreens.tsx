import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { products } from '../utility/data/product-data.ts';
import { Product } from '../utility/type/product';

const ProductListScreens = () => {
  const renderProducts = ({item}: {item: Product}) => (
    <View style={styles.card}>
      <Image source = {{uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  )

  return (
    <View style = {styles.container}>
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
  }

})

export default ProductListScreens;
