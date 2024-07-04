import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
type RootStackParamList = {
  Inicio: undefined;
  Registro: undefined;
};

type InicioScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Inicio'>;

type Props = {
  navigation: InicioScreenNavigationProp;
  route: RouteProp<RootStackParamList, 'Inicio'>;
};

const InicioScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.welcomeText}>Santos Israel</Text>
        <Text style={styles.welcomeText}>¡Bienvenido a Evaluacion Parcial-1!</Text>
      <Image source={require('../assets/welcome-image.png')} style={styles.image} />
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Registro')}
      >
        <Text style={styles.buttonText}>Acceder</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8EC5FC', // Fondo colorido
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: '#200f75', // Color del texto
  },
  button: {
    backgroundColor: '#FF6347', // Color del botón
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff', // Color del texto del botón
    textAlign: 'center',
  },
});

export default InicioScreen;
