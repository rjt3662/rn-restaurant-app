import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchRestaurants = async (term) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term,
          limit: 50,
          location: "san jose",
        },
      });
      setRestaurants(response.data.businesses);
    } catch (e) {
      console.log(e);
      setErrorMessage("Something went wrong. Please try again later");
    }
  };

  useEffect(() => {
    searchRestaurants("burger");
  }, []);

  return [searchRestaurants, restaurants, errorMessage];
};
