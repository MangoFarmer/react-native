import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, Alert } from 'react-native';
import React, { useState } from 'react'

export default function App() {
  const [name, setName] = useState(null)
  const [age, setAge] = useState()
  const [likesCoffee, setLikesCoffee] = useState("Yes")

  return (
    <View style={styles.container}>
     <Text style={styles.label}>Your Name:</Text>
     <TextInput
      style={styles.input}
      value={name}
      onChangeText={setName}
    />
    
    <Text style={styles.label}>Your Age:</Text>
    <TextInput
      style={styles.input}
      value={age}
      onChangeText={setAge}
    />
    
    <Text style={styles.label}>Likes Coffee?</Text>
    <TextInput
    type="radio" value="Yes" />
        
    <TextInput
    type="radio" value="No" />

    <View style={styles.button}>
    <Button title="Submit" onPress={() => Alert.alert(
      "My Name is Sudhakar. I am 28 years old. I like coffee.",
    )}
    />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: 'black',
    margin: 20,
    marginLeft: 0,
  },
  button :{
    marginTop: 40,
    color: 'black',
    backgroundColor: 'silver',
    height: 40,
    width: 400,
    borderRadius: 4,
  },
  input: {
    height: 40,
    width: 400,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'left',
    justifyContent: 'left',
  },
});
