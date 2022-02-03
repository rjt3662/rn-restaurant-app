import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import SingleRestaurant from "./SingleRestaurant";

const RestaurantList = ({ title, restaurants, navigation }) => {
  if (!restaurants.length) {
    return null;
  }
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      {restaurants.length > 0 ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={restaurants}
          keyExtractor={(restaurant) => restaurant.id}
          renderItem={({ item: res }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("RestaurantDetail", { id: res.id });
                }}
              >
                <SingleRestaurant restaurant={res} />
              </TouchableOpacity>
            );
          }}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default withNavigation(RestaurantList);
