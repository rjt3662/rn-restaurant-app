import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import RestaurantList from "../components/RestaurantList";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";

const RestaurantsScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchRestaurants, restaurants, errorMessage] = useRestaurants();

  const filterRestaurantsByPrice = (price) => {
    return restaurants.filter((restaurant) => {
      return restaurant.price === price;
    });
  };
  const costEffectiveRestaurants = filterRestaurantsByPrice("$");
  const bitPricierRestaurants = filterRestaurantsByPrice("$$");
  const bigSpenderRestaurants = filterRestaurantsByPrice("$$$");

  return (
    <>
      <SearchBar
        term={searchTerm}
        onTermChange={setSearchTerm}
        onSearch={() => searchRestaurants(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <RestaurantList
          title="Cost Effective"
          restaurants={costEffectiveRestaurants}
        />
        <RestaurantList
          title="Bit Pricier"
          restaurants={bitPricierRestaurants}
        />
        <RestaurantList
          title="Big Spender"
          restaurants={bigSpenderRestaurants}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
});

export default RestaurantsScreen;
