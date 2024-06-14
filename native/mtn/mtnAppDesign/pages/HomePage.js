import { StyleSheet, Text, View, ImageBackground } from "react-native";

import { StatusBar } from "expo-status-bar";
import React from "react";
import notify from "../assets/icons/notifn.png";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import IconMat from "react-native-vector-icons/MaterialIcons";
import Slider from "../component/Slider";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#fff" />
      <View style={styles.upperBg}>
        <View style={styles.header}>
          <View style={styles.iconBg}>
            <MaterialIcons name="person" size={30} color="black" />
          </View>
          <View style={styles.yello}>
            <Text style={styles.textColor}>
              <Text style={{ fontWeight: "bold" }}>yellow,</Text> ameh
            </Text>
            <Text style={styles.textColor}>07025736899</Text>
            <View style={styles.prestige}>
              <Icon
                style={styles.prestigeIcon}
                name="thumbs-up"
                size={15}
                color="black"
              />
              <Text style={styles.prestigeTxt}>Explore prestige</Text>
              <Icon
                style={styles.prestigeIcon}
                name="thumbs-up"
                size={15}
                color="black"
              />
            </View>
          </View>
          <View style={styles.notifnBell}>
            <ImageBackground style={styles.notBg} source={notify}>
              <Text style={styles.notifnText}>35</Text>
            </ImageBackground>
          </View>
        </View>
      </View>
      <View style={styles.lowerBg}>
        <View style={styles.innerBg}>
          <View style={styles.pulseTxt}>
            <Text style={styles.textColor}>
              <Text style={{ fontWeight: "bold" }}>07025736899</Text> | ameh
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
                paddingRight: 10,
                marginRight: 10,
              }}
            >
              <Text style={{ color: "yellow" }}>Pulse</Text>
              <IconMat
                style={{
                  transform: [{ rotate: "280deg" }],
                  position: "absolute",
                  marginLeft: 28,
                  bottom: -5,
                }}
                name="keyboard-arrow-down"
                size={25}
                color="yellow"
              />
            </View>
          </View>
          <View style={styles.slider}>
            <Slider />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  upperBg: {
    height: "35%",
    backgroundColor: "#2F2D1F",
  },
  lowerBg: {
    height: "65%",
    backgroundColor: "#000",
  },
  innerBg: {
    backgroundColor: "#000",
    height: 500,
    width: "100%",
    alignSelf: "center",
    marginTop: -40,
    borderRadius: 10,
    padding: 5,
    paddingTop: 20,
  },
  notBg: {
    height: 50,
    width: 50,
  },
  iconBg: {
    height: 50,
    width: 50,
    backgroundColor: "white",
    borderRadius: 35,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginTop: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    marginLeft: 10,
  },
  yello: {
    justifyContent: "space-between",
    marginRight: 90,
  },
  textColor: { color: "white", marginBottom: 10 },
  prestige: {
    height: 30,
    width: 150,
    backgroundColor: "#C5C5C6",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  prestigeTxt: {
    fontSize: 12,
    marginRight: 5,
  },

  prestigeIcon: {
    marginRight: 5,
  },

  pulseTxt: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 10,

    alignItems: "center",
  },
  notifnBell: {
    flexDirection: "row",
  },
  notifnText: {
    backgroundColor: "yellow", // semi-transparent background
    height: 15,
    width: 15,
    textAlign: "center", // center the text
    position: "absolute", // absolute positioning
    left: 20,
    top: 8,
    bottom: 10,
    borderRadius: 7.5,
    fontSize: 10,
    fontWeight: "bold",
  },
  carousel: {
    width: "100%",
    height: 300,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  slider: {
    flex: 1,
    width: "100%",
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 10,
  },
});
