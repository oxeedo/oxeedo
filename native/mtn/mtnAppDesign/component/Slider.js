import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Pinar from "pinar";
import { LinearGradient } from "expo-linear-gradient";
import TabNavigation from "../pages/TabNavigation";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

const Slider = () => {
  return (
    <GestureHandlerRootView>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.carouselContainer}>
          <Pinar
            style={styles.carousel}
            showsControls={false}
            showsDots
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
          >
            <LinearGradient
              colors={["#BABABA", "#DBDBDB", "#979797"]}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 1 }}
              style={styles.slide}
            >
              <View style={styles.viewContainer}>
                <View style={{ paddingBottom: 10 }}>
                  <Text style={styles.text}>Airtime Balance</Text>
                  <Text style={styles.text}>#60.8</Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTxt}>Recharge</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.text}>Airtime Balance</Text>
                  <Text style={styles.text}>#60.8</Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTxt}>Recharge</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.viewText}>
                <Text style={{ fontWeight: "bold" }}>View Details</Text>
              </View>
            </LinearGradient>

            <View style={styles.slide2}>
              <Text style={styles.text}>Slide 2</Text>
            </View>
          </Pinar>
        </View>

        <TabNavigation />
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    height: 500,
  },
  carouselContainer: {
    flex: 1,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 230,
  },
  carousel: {
    width: "100%",
  },
  slide: {
    height: 180,
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 20,
    paddingLeft: 10,
    marginRight: 5,
  },
  slide2: {
    height: 180,
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 20,
  },
  text: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  viewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewText: {
    justifyContent: "center", // centers the content vertically
    alignItems: "center",
  },
  button: {
    height: 40,
    backgroundColor: "black",
    marginTop: 30,
    width: 120,
    borderRadius: 50,
    justifyContent: "center", // centers the content vertically
    alignItems: "center",
  },
  buttonTxt: {
    color: "yellow",
    textAlign: "center",
  },
  dotStyle: {
    backgroundColor: "#333738",
    width: 20,
    height: 2,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDotStyle: {
    backgroundColor: "#FFCB06",
    width: 20,
    height: 2,
    borderRadius: 4,
    marginHorizontal: 3,
  },
});
