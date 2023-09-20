import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Change the background color to white
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: '90%',
    borderColor: '#000000', // Change the border color to black
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#000000', // Change the text color to black
    borderRadius: 5,
  },
  button: {
    justifyContent: 'center',
    width: '90%',
    backgroundColor: '#333', // Change the button background color to dark gray
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 50,
  },
  buttonText: {
    justifyContent: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  responseText: {
    justifyContent: 'center',
    height: 40,
    width: '90%',
    color: '#0000', // Change the text color to black
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
  aboutText: {
    justifyContent: 'center',
    height: 40,
    width: '90%',
    color: '#000000', // Change the text color to black
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default commonStyles;
