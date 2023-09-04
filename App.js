import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lower, setLower] = useState(0);
  const [upper, setUpper] = useState(0);

  const calculateLimit = () => {
    const tempLow = Math.round((220 - age) * 0.65);
    setLower(tempLow);
    const tempUpper = Math.round((220 - age) * 0.85);
    setUpper(tempUpper);
  }

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput placeholder='Enter age here'
      keyboardType='decimal-pad'
      style={styles.field}
      value={age}
      onChangeText={text => setAge(text)}
      onEndEditing={text => calculateLimit()}
      />
      <Text style={styles.field}>Heart rate Limits</Text>
      <Text style={styles.field}>{lower.toString() + " - " + upper.toString()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  field: {
    marginBottom: 10,

  }
});
