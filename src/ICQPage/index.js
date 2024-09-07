import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import StarField from "../components/starShining";

export default function ICQPage() {
  const [cintura, setCintura] = useState("");
  const [quadril, setQuadril] = useState("");
  const [calcular, setCalcular] = useState("")


  const calcularICQ = () => {

    const cinturaNum = parseFloat(cintura);
    const quadrilNum = parseFloat(quadril);

    if (!isNaN(cinturaNum) && !isNaN(quadrilNum) && quadrilNum !== 0) {
      const resultado = cinturaNum / quadrilNum;
      setCalcular(resultado.toFixed(2)); 
    } else {
      setCalcular("Entrada inválida"); 
    }
  };

  return (
    <View style={styles.container}>
      <StarField />
      <TextInput
        placeholder="Iforme o tamanho da sua cintura"
        onChangeText={setCintura}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Informe o tamanho do seu quadril "
        onChangeText={setQuadril}
        keyboardType="numeric"
        style={styles.input}
      />
      <TouchableOpacity style={styles.botao} onPress={calcularICQ}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <View style={styles.resultado}>
        <Text style={styles.resultadoText}> Valor do seu ICQ: {calcular}</Text>
      </View>
    </View>
  );
}
