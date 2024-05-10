import {
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import NearbyJobsCard from "./NearbyJobsCard";
import useFetch from "../hook/Fetch";
import { useNavigation } from "@react-navigation/native";

const Employment = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();
  const { data, isLoading, error } = useFetch("search", {
    query: "React Developer",
    num_pages: "1",
  });

  useEffect(() => {
    return () => {
      console.log("Component will unmount");
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#312651" />
      ) : error ? (
        <Text>Something is wrong</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <NearbyJobsCard
              item={item}
              handleNavigate={() =>
                navigation.navigate("JobDetails", { itemId: item?.job_id })
              }
            />
          )}
          keyExtractor={(item) => item?.job_id}
          contentContainerStyle={{ columnGap: 16 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default Employment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1C",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 30,
  },
});
