import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  inputs: {
    display: "flex",
    flexDirection: "row",
    width: width,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    height: height * 0.1,
    backgroundColor: "gray"
  },
  input: {
    borderColor: "black",
    borderRadius: 50,
    borderStyle: "solid",
    borderWidth: 2,
    width: width * 0.8,
    flexWrap: "wrap",
    maxHeight: 200,
    paddingHorizontal: 10
  },
  send : {
    width: width * 0.1,
    fontSize: 25
  }
});
