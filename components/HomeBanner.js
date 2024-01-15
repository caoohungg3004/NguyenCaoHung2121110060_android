// import React from 'react';
// import { View, Image, StyleSheet } from 'react-native';
// import Carousel from 'react-native-snap-carousel';
// import { responsiveHeight } from 'react-native-responsive-dimensions';

// const HomeBanner = () => {
//   const images = [
//     require('../assets/banner1.png'),
//     require('../assets/banner2.png'),
//     require('../assets/banner3.png'),
//   ];

//   const _renderItem = ({ item, index }) => {
//     return (
//       <View style={styles.slide}>
//         <Image
//           style={styles.image}
//           source={item}
//         />
//       </View>
//     );
//   };

//   return (
//     <Carousel
//       data={images}
//       renderItem={_renderItem}
//       sliderWidth={345}
//       itemWidth={345}
//       loop={true}
//       autoplay={true}
//       autoplayInterval={3000}
//       containerCustomStyle={{ marginTop: 15 }}
//       contentContainerCustomStyle={styles.sliderContentContainer}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   slide: {
//     paddingLeft:40,
//     width: 345,
//     height: responsiveHeight(15),
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 15,
//   },
//   sliderContentContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
    
//   },
// });

// export default HomeBanner;