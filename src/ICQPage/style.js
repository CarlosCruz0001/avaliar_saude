import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0d0f36",
  },
  input: {
    width: "80%",
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  botao: {
    backgroundColor: "#b9f1d6",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 300,
    shadowColor: "#f1f6ce",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginTop: 15,
  },
  buttonText: {
    color: "#0d0f36",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  resultado:{
    marginTop: 40,
  },
  resultadoText:{
    color: '#f1f6ce',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
