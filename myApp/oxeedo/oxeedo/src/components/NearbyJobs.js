import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React from "react";
import { useState } from "react";
import NearbyJobsCard from "./NearbyJobsCard";
import useFetch from "../hook/Fetch";
import { useNavigation } from "@react-navigation/native";

const Nearbyjobs = () => {
  const navigation = useNavigation();
  const { data, isLoading, error } = useFetch("search", {
    query: "React Developer",
    num_pages: "1",
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearbyjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
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
                  navigation.navigate("JobDetails", {
                    itemId: item?.job_id,
                  })
                }
              />
            )}
            keyExtractor={(job) => job?.job_id}
            contentContainerStyle={{ columnGap: 16 }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginLeft: 20,
    paddingRight: 20,
    marginBottom: 500,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    color: "#ffff",
  },
  headerBtn: {
    fontSize: 16,
    color: "#83829A",
  },
  cardsContainer: {
    marginTop: 16,
  },
});
