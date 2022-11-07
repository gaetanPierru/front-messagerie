import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./stylesMessageArea";
const currentUser = 1;
const otherUser = 2;

export default function MessageArea({socket}) {
  const [messages, setMessages] = useState([]);
  const [load, setLoad] = useState(true);

  async function receveMessage() {
    const messages = await axios.get(
      `http://192.168.10.114:5000/api/messages/${currentUser}/${otherUser}`
    );
    setMessages(messages.data);
    setLoad(false);
  }

  useEffect(() => {
     receveMessage();
  }, []);

  socket.on("private message", (current, other) => {
    if( current == currentUser || other == currentUser )
    receveMessage();
  })

  if (load || messages === [])
    return (
      <View>
        <Text>Chargement</Text>
      </View>
    );

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {messages.map((message, index) => {
        return (
          <View>
            {message.from == otherUser ? (
              <View key={index}>

                <Text  style={[styles.right, styles.date]} >
                  {new Date(message.createdAt).toLocaleDateString()}
                  {new Date(message.createdAt).toLocaleTimeString()}
                </Text>
                <Text style={[styles.right, styles.text, styles.myMessage]} >{message.message}</Text>
              </View>
            ) : (
              <View key={-index}>
  
                <Text  style={[styles.left, styles.date]} >
                  {new Date(message.createdAt).toLocaleDateString()}
                  {new Date(message.createdAt).toLocaleTimeString()}
                </Text>
                <Text style={[styles.left, styles.text, styles.otherMessage]} >{message.message}</Text>
              </View>
            )}
          </View>
        );
      })}
    </ScrollView>
  );
}
