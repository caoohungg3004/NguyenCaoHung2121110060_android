// // import React from 'react';
// // import { View, Image, StyleSheet } from 'react-native';
// // import Carousel from 'react-native-snap-carousel';
// // import { responsiveHeight } from 'react-native-responsive-dimensions';

// // const HomeBanner = () => {
// //   const images = [
// //     require('../assets/banner1.png'),
// //     require('../assets/banner2.png'),
// //     require('../assets/banner3.png'),
// //   ];

// //   const _renderItem = ({ item, index }) => {
// //     return (
// //       <View style={styles.slide}>
// //         <Image
// //           style={styles.image}
// //           source={item}
// //         />
// //       </View>
// //     );
// //   };



// // const styles = StyleSheet.create({
// //   slide: {
// //     paddingLeft:40,
// //     width: 345,
// //     height: responsiveHeight(15),
// //     borderRadius: 15,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   image: {
// //     width: '100%',
// //     height: '100%',
// //     borderRadius: 15,
// //   },
// //   sliderContentContainer: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
    
// //   },
// // });

// // export default HomeBanner;
// import React from 'react';
// import Carousel from 'react-native-snap-carousel';
// import { View, Image, StyleSheet } from 'react-native';

// const BannerCarousel = () => {
//   const data = [
//     { image: require('../assets/banner1.png') },
//     { image: require('../assets/banner2.png') },
    
//     { image: require('../assets/banner3.png') },

//     // Thêm các dữ liệu ảnh khác nếu cần
//   ];

//   const renderItem = ({ item }) => (
//     <View style={styles.carouselItem}>
//       <Image source={item.image} style={styles.bannerImage} />
//     </View>
//   );

//   return (
//     <Carousel
//       data={data}
//       renderItem={renderItem}
//       sliderWidth={300}
//       itemWidth={300}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   carouselItem: {
//     width: 300,
//     height: 200,
//   },
//   bannerImage: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
// });

// export default BannerCarousel;
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Banner = () => {
  return (
    <View style={styles.bannerContainer}>
      <Image
        source={require('../assets/banner4.png')}
        
        style={styles.bannerImage}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    width: '100%',
    height: 150, // Điều chỉnh chiều cao của banner theo nhu cầu
  },
  bannerImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default Banner;
