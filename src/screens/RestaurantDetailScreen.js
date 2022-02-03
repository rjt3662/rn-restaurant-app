import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import yelp from "../api/yelp";

const RestaurantDetailScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);
  const id = navigation.getParam("id");
  console.log(restaurant);
  const getRestaurant = async (id) => {
    const response = await yelp.get(`/${id}`);
    setRestaurant(response.data);
  };

  useEffect(() => {
    getRestaurant(id);
  }, []);

  if (!restaurant) {
    return null;
  }

  return (
    <View>
      <FlatList
        horizontal
        data={restaurant.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      />
      <View style={styles.nameRatingContainerStyle}>
        <Text style={styles.titleStyle}>{restaurant.name}</Text>
        <Text style={styles.ratingStyle}>{restaurant.rating} stars</Text>
      </View>
      <Text style={styles.phoneStyle}>{restaurant.display_phone}</Text>
      <Text style={styles.titleStyle}>Categories</Text>
      <FlatList
        horizontal
        data={restaurant.categories}
        keyExtractor={(category) => category.title}
        renderItem={({ item }) => {
          return <Text style={styles.categoryStyle}>{item.title}</Text>;
        }}
      />
      <Text style={styles.titleStyle}>Address</Text>
      <Text style={styles.phoneStyle}>
        {restaurant.location.address1}, {restaurant.location.city},{" "}
        {restaurant.location.country}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 340,
    height: 200,
    marginHorizontal: 10,
    marginTop: 10,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 20,
  },
  phoneStyle: {
    fontSize: 16,
    marginLeft: 10,
  },
  ratingStyle: {
    fontSize: 16,
    marginRight: 20,
    marginTop: 20,
  },
  categoryStyle: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 10,
  },
  nameRatingContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default RestaurantDetailScreen;
