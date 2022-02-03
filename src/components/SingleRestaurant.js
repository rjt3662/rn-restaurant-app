import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const SingleRestaurant = ({ restaurant }) => {
  console.log(restaurant);
  return (
    <View style={styles.viewStyle}>
      <Image style={styles.imageStyle} source={{ uri: restaurant.image_url }} />
      <Text style={styles.nameStyle}>{restaurant.name}</Text>
      <Text>
        {restaurant.rating} stars, {restaurant.review_count} reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginLeft: 10,
    marginBottom: 10,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 10,
    marginVertical: 10,
    marginRight: 10,
  },
  nameStyle: {
    fontWeight: "bold",
  },
});

export default SingleRestaurant;
