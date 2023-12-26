// Content.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Product = ({ item }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Productdetail', { item });
  };

  return (
    <View style={styles.product}>
      <TouchableOpacity onPress={handlePress}>
        <Image style={styles.image} source={{ uri: item.image }} />
      </TouchableOpacity>
      <Text style={styles.title}>{item.title.length > 10 ? item.title.substring(0, 10) + '...' : item.title}</Text>
      <Text style={styles.price}>{item.price} USD</Text>
      <Button title="Thêm vào giỏ hàng" onPress={() => alert('Đã thêm vào giỏ hàng!')} />
    </View>
  );
};

const Content = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const renderProducts = currentProducts.map((item) => (
    <Product key={item.id} item={item} />
  ));

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Danh Mục</Text>
      <ScrollView horizontal>
        <Image source={require('../assets/product/c1.png')} style={styles.image2} />
        <Image source={require('../assets/product/c2.png')} style={styles.image2} />
        <Image source={require('../assets/product/c3.png')} style={styles.image2} />
      </ScrollView>
      <Text style={styles.sectionTitle}>Sản Phẩm</Text>
      <ScrollView horizontal>
        {renderProducts}
      </ScrollView>
      {/* Nút chuyển trang */}
      <View style={styles.pagination}>
        <Button
          title="Prev"
          onPress={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={currentPage === 1} // Disable nút Prev khi ở trang đầu
        />
        <Text>{currentPage}</Text>
        <Button
          title="Next"
          onPress={() => setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage))}
          disabled={currentPage === totalPages} // Disable nút Next khi ở trang cuối
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 140,
  },
sectionTitle: {
    fontSize: 60,
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 250,
  },
  image2: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginRight: 50,
  },
  product: {
    alignItems: 'center',
    backgroundColor: '#808080',
    padding: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: '#007BFF',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});

export default Content;