import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import commonStyles from './styles'; // Import the common stylesheet

const PostScreen = () => {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [age, setAge] = useState('');
    const [responseText, setResponseText] = useState('');

  const handlePostRequest = () => {
    axios
      .post('https://dummy.restapiexample.com/api/v1/create', {
        name: name,
        salary: salary,
        age: age,
      })
      .then((response) => setResponseData(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <View style={commonStyles.container}>
      <TextInput
        style={commonStyles.input}
        placeholder="Name"
        placeholderTextColor="#000"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={commonStyles.input}
        placeholder="Salary"
        placeholderTextColor="#000"
        onChangeText={(text) => setSalary(text)}
        value={salary}
      />
      <TextInput
        style={commonStyles.input}
        placeholder="Age"
        placeholderTextColor="#000"
        onChangeText={(text) => setAge(text)}
        value={age}
      />
      <TouchableOpacity style={commonStyles.button} onPress={handlePostRequest}>
        <Text style={commonStyles.buttonText}>POST</Text>
      </TouchableOpacity>
      <Text style={commonStyles.responseText}>{responseText}</Text>
    </View>
  );
};

export default PostScreen;
