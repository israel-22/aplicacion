import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

const RegistroScreen: React.FC = () => {
  const [id, setId] = useState('');
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleRegister = () => {
    Alert.alert('Producto registrado', 'El producto ha sido registrado exitosamente.');
    setId('');
    setMonto('');
    setCategoria('');
    setDescripcion('');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/tecnologia.png')} style={styles.image} />
      <Text style={styles.label}>Ingresar ID:</Text>
      <TextInput
        style={styles.input}
        value={id}
        onChangeText={setId}
        placeholder="ID del producto"
      />
      <Text style={styles.label}>Ingresar Monto:</Text>
      <TextInput
        style={styles.input}
        value={monto}
        onChangeText={setMonto}
        placeholder="Monto del producto"
        keyboardType="numeric"
      />
      <Text style={styles.label}>Categoría:</Text>
      <TextInput
        style={styles.input}
        value={categoria}
        onChangeText={setCategoria}
        placeholder="Categoría del producto"
      />
      <Text style={styles.label}>Descripción:</Text>
      <TextInput
        style={styles.input}
        value={descripcion}
        onChangeText={setDescripcion}
        placeholder="Descripción del producto"
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default RegistroScreen;
