import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import commonStyles from './styles'; // Import the common stylesheet

const GetScreen = () => {
  const [endpoint, setEndpoint] = useState('');
  const [responseText, setResponseText] = useState('');

  const fetchData = () => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
        setButtonPressed(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={commonStyles.container}>
      <TextInput
        style={commonStyles.input}
        placeholder="Enter endpoint"
        placeholderTextColor="#000"
        onChangeText={(text) => setEndpoint(text)}
        value={endpoint}
      />
      <TouchableOpacity style={commonStyles.button} onPress={fetchData}>
        <Text style={commonStyles.buttonText}>GET</Text>
      </TouchableOpacity>
      <Text style={commonStyles.responseText}>{responseText}</Text>
    </View>
  );
};

export default GetScreen;

