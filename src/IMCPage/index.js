import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import StarField from "../components/starShining";

export default function ICQPage() {
  const [Peso, setPeso] = useState("");
  const [Altura, setAltura] = useState("");
  const [calcular, setCalcular] = useState("")


  const calcularIMC = () => {

    const PesoNum = parseFloat(Peso);
    const AlturaNum = parseFloat(Altura);

    if (!isNaN(PesoNum) && !isNaN(AlturaNum) && AlturaNum !== 0) {
      const resultado = PesoNum / Math.pow(AlturaNum, 2);
      setCalcular(resultado.toFixed(2)); 
    } else {
      setCalcular("Entrada inválida"); 
    }
  };

  return (
    <View style={styles.container}>
      <StarField/>
      <TextInput
        placeholder="Iforme o seu peso em quilogramas"
        onChangeText={setPeso}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Informe seu Peso"
        onChangeText={setAltura}
        keyboardType="numeric"
        style={styles.input}
      />
      <TouchableOpacity style={styles.botao} onPress={calcularIMC}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <View style={styles.resultado}>
        <Text style={styles.resultadoText}> Valor do seu IMC: {calcular}</Text>
      </View>
    </View>
  );
}
