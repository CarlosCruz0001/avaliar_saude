import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import StarField from "../components/starShining";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StarField />
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('ICQ')}>
        <Text style={styles.buttonText}>Calcular ICQ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('IMC')}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>
    </View>
  );
}
