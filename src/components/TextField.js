import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import axios from 'axios'

export default function TextField () {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const sendTodo = () => {
    const data = JSON.stringify({
      name: value,
      isDone: false})

      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
    axios.post('https://api.kontenbase.com/query/api/v1/1c55b5c1-2ad0-458c-9f34-b4c5e5fcc640/todo', data, config)
    window.location.reload()
  }

  return (
    <View style={{marginTop:10, justifyContent:'center'}}>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setValue(text)}
          value={value}
          placeholder="Add Todo Here"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={sendTodo}
        >
          <Text style={{color:'white'}}>Add</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 50,
    margin: 12,
    borderColor: "3498db",
    borderWidth: 1,
    borderRadius: 2,
  },
  button: {
    marginRight: 40,
    marginLeft: 40,
    padding: 3,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
});
