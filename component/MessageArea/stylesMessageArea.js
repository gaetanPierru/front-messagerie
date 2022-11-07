import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: width,
    height: height * .9,
    paddingHorizontal: 10,
    backgroundColor: "black"
    // backgroundColor: "blue"
  },
  right : {
    textAlign: "right",
    alignSelf: "flex-end"
  },
  left : {
    textAlign: "left",
    alignSelf: "flex-start"
  },
  date : {
    color: "white",
    opacity: 0.3,
    fontSize: width * 0.035
  },
  text : {
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 20,
    width: "auto",
    maxWidth: width * 0.9,
    textAlign: "center"
  },
  myMessage : {
    backgroundColor: "#F4E285"
  },
  otherMessage : {
    backgroundColor: "#8CB369"
  }
});
