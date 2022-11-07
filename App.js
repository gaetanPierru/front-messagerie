import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import InputMessage from "./component/InputMessage/InputMessage";
import MessageArea from "./component/MessageArea/MessageArea";
const { io } = require("socket.io-client");

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const socket = io("http://localhost:5001", {autoConnect: true});


export default function App() {
  useEffect(() => {

    socket.on("connect", () => {
      //  alert(socket.id); 
    });

    // socket.disconnect()
  }, []);
  
  return (
    <View style={styles.container}>
      <MessageArea socket={socket}/>
      <InputMessage socket={socket}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: width,
    height: height,
  },
});
