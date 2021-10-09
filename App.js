import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Switch, Image, ScrollView } from 'react-native';

export default function App() {

  const [nome, setNome] = useState()
  const [idade, setIdade] = useState()
  const [sexo, setSexo] = useState()
  const [limite, setLimite] = useState(250)
  const [estudante, setEstudante] = useState(false)

  function exibeDados() {

    alert(`
      Nome: ${nome}
      Idade: ${idade}
      Sexo: ${sexo}
      Limite: ${limite}
      Estudante: ${estudante}
    `)
  }


  return (
    <View style={styles.container}>

        <Image
          style={styles.img}
          source={require('./src/banco.png')}
        />

        <ScrollView style={styles.card}>

          <Text style={styles.title}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            onChangeText={(text) => setNome(text)}
          />

          <Text style={styles.title}>Idade</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua idade"
            onChangeText={(text) => setIdade(text)}
            keyboardType="numeric"
          />
          <Text style={styles.title}>Sexo</Text>
          <Picker
            style={{ height: 60, width: "100%", borderWidth: 0.5 }}
            selectedValue={sexo}
            onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
          >
            <Picker.Item value={"Masculino"} label="Masculino" />
            <Picker.Item value={"Feminino"} label="Feminino" />
          </Picker>

          <Text style={styles.title}>Limite</Text>
          <Slider
            style={{ width: "100%", height: 20 }}
            minimumValue={250}
            maximumValue={2000}
            minimumTrackTintColor="green"
            maximumTrackTintColor="#000000"
            onValueChange={(value) => setLimite(value.toFixed(2))}
          />

          <Text style={{ textAlign: "center", fontSize: 25 }}>R$ {limite}</Text>

          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10, marginTop: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 10 }}>Estudante? </Text>
            <Switch
              value={estudante}
              onValueChange={(value) => setEstudante(value)}
            />
          </View>

          <TouchableOpacity style={styles.btn} onPress={exibeDados}>
            <View>
              <Text style={styles.btnText}>
                ABRIR CONTA
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99ccee',
    alignItems: 'center',
  },
  img: {
    height: "30%",
    width: "100%",
  },
  card: {
    backgroundColor: "#f7f7f7",
    width: "100%",
    height: "100%",
    marginTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowOpacity: 0.12,
    shadowRadius: 60,

    elevation: 24,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 0.5,
    fontSize: 20,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: "#FFF"
  },
  btn: {
    backgroundColor: "#007de2",
    padding: 20,
    borderRadius: 15,
    marginBottom: 40
  },
  btnText: {
    fontSize: 20,
    color: "white",
    textAlign: "center"
  }
});
