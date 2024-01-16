import React, { useState, useEffect } from 'react';
import { StyleSheet,View, Text, FlatList, TouchableOpacity,Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const CartScreen = () => {
  

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getCartData = async () => {
      try {
        const existingCart = await AsyncStorage.getItem('cart');
        const cartData = existingCart ? JSON.parse(existingCart) : [];
        setCart(cartData);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu giỏ hàng:', error);
      }
    };

    getCartData();
  }, []);


const updateQuantity = async (productId, newQuantity) => {
  try {
    const existingCart = await AsyncStorage.getItem('cart');
    const cartData = existingCart ? JSON.parse(existingCart) : [];

    const updatedCart = cartData.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart); // Đảm bảo rằng state được cập nhật sau khi thay đổi giỏ hàng
  } catch (error) {
    console.error('Lỗi khi cập nhật số lượng sản phẩm trong giỏ hàng:', error);
  }
};


  const removeItemFromCart = async (productId) => {
    try {
      const existingCart = await AsyncStorage.getItem('cart');
      const cartData = existingCart ? JSON.parse(existingCart) : [];

      // Kiểm tra xem giỏ hàng có rỗng không
      if (cartData.length === 0) {
        console.warn('Giỏ hàng đã rỗng.');
        return;
      }

      const updatedCart = cartData.filter((item) => item.id !== productId);

      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
      setCart(updatedCart);
    } catch (error) {
      console.error('Lỗi khi xóa sản phẩm khỏi giỏ hàng:', error);
    }
  };

  return (
    <View>
      <Text>Giỏ hàng của bạn:</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.image}>
            <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
            </View >
            <View style={styles.shortInfor}>
            <Text style={{justifyContent:'flex-start'}}>{item.title}</Text>
            <Text style={{justifyContent:'flex-start'}}>{item.price}</Text>
            </View>
            <View>
                
            <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
              <Text style={{justifyContent:'flex-start'}}>Tăng</Text>
            </TouchableOpacity>
            <Text >Số lượng: {item.quantity}</Text>
            <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity - 1)}>
<Text style={{justifyContent:'flex-end'}}>Giảm</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.delete}>
                <TouchableOpacity onPress={() => removeItemFromCart(item.id)}>
              <Text>Xóa khỏi giỏ hàng</Text>
                </TouchableOpacity>
            </View>

            
            
            
          </View>
        )}
      />
    </View>
  );
}

const styles =StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:15,
        marginTop:20
    },
    image:{
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    shortInfor:{
        flexDirection:'column',
    },
    quantity:{
        flexDirection:'row',
        
        marginBottom:15
    },
    delete:{
        flexDirection:'row',
        justifyContent:'flex-start'
    }
})
export default CartScreen;