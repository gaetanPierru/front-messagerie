import axios from "axios";
import { useState } from "react";
import { TextInput, View, Text, Pressable } from "react-native";
import {styles} from "./styleInputMessage";
const currentUser = 1;
const otherUser = 2;

export default function InputMessage({socket}) {
    const [message, setMessage] = useState("");

    function handleChange(e) {
        setMessage(e)
      }

    async function sendMessage() {
        const rep = await axios.post(
            "http://192.168.10.114:5000/api/messages", {"to": otherUser, "from": currentUser, "message":message}
          );

          if(rep.status == 200) {
            if (socket.connected) {
              socket.emit("send message", {"to": otherUser, "from":currentUser})
            }else {
              socket.volatile.emit("send message", {"to": otherUser, "from":currentUser})
            }
            setMessage("")
          }else {
            alert("message non envoyé ")
          }
    }

  return (
    <View style={styles.inputs}>
        <TextInput style={[styles.input, ]} multiline={true} onChangeText={(text) => handleChange(text)} contextMenuHidden={true} value={message}></TextInput>
        <Pressable onPress={() => sendMessage()}>
            <Text style={styles.send}>✉️</Text>
        </Pressable>
    </View>
  )
}
