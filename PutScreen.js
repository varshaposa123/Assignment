import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import commonStyles from './styles'; // Import the common stylesheet

const PutScreen = () => {
    const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [age, setAge] = useState('');
  const [responseText, setResponseText] = useState('');

  const handlePutRequest = () => {
    axios
      .put(`https://dummy.restapiexample.com/api/v1/update/${id}`, {
        name: name,
        salary: salary,
        age: age,
        id:id,
      })
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
      <TouchableOpacity style={commonStyles.button} onPress={handlePutRequest}>
        <Text style={commonStyles.buttonText}>PUT</Text>
      </TouchableOpacity>
      <Text style={commonStyles.responseText}>{responseText}</Text>
    </View>
  );
};

export default PutScreen;
