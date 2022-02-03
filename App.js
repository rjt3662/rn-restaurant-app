import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import RestaurantDetailScreen from "./src/screens/RestaurantDetailScreen";
import RestaurantsScreen from "./src/screens/RestaurantsScreen";

const navigator = createStackNavigator(
  {
    Restaurants: RestaurantsScreen,
    RestaurantDetail: RestaurantDetailScreen,
  },
  {
    initialRouteName: "Restaurants",
    defaultNavigationOptions: {
      title: "Restaurants",
    },
  }
);

export default createAppContainer(navigator);
