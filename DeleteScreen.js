import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import commonStyles from './styles'; // Import the common stylesheet

const DeleteScreen = () => {
  const [endpoint, setEndpoint] = useState('');
  const [id, setId] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleDeleteRequest = () => {
    axios
      .delete(`https://dummy.restapiexample.com/api/v1/delete/${id}`)
      .then((response) => setResponseData(response.data))
      .catch((error) => console.error(error));
  };


  return (
    <View style={commonStyles.container}>
      <TextInput
        style={commonStyles.input}
        placeholder="ID"
        placeholderTextColor="#000"
        onChangeText={(text) => setId(text)}
        value={id}
      />
      <TouchableOpacity style={commonStyles.button} onPress={handleDeleteRequest}>
        <Text style={commonStyles.buttonText}>DELETE</Text>
      </TouchableOpacity>
      <Text style={commonStyles.responseText}>{responseText}</Text>
    </View>
  );
};

export default DeleteScreen;
