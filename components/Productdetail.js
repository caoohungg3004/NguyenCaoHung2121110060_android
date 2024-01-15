import React from 'react';
import { View, Text, Image ,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Productdetail = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();
  const goBack=()=>{
    navigation.goBack();
  }
  return (
    <>
    
    <View>
      <Image style={{ width: 200, height: 250 }} source={{ uri: item.image }} />
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
      <Text style={{ fontSize: 20, color: '#007BFF' }}>Giá :{item.price} USD</Text>
      <Text style={{fontSize:22,fontWeight:'bold'}}>Mô tả sản phẩm:</Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.description}</Text>

    </View>
    <View>
      <Button title="go back" onPress={goBack}/>
    </View>
    </>
  );
};

export default Productdetail;