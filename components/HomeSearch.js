import { View, Text, TextInput } from "react-native";
import React from "react";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { FontAwesome } from "@expo/vector-icons";
const HomeSearch = () => {
  return (
    <View
      style={{
        backgroundColor: "#DDDDDD",
        height: responsiveHeight(6.5),
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 10,
      }}
    >
      <FontAwesome name="search" size={24} color="black" />
      <TextInput style={{ flex: 1 }} placeholder="Search Store" />
    </View>
  );
};

export default HomeSearch;
