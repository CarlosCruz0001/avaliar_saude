import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0d0f36",
    position: 'relative', 
  },

  botao: {
    backgroundColor: '#b9f1d6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 300, 
    shadowColor: '#f1f6ce',
    shadowOffset: { width: 0, height: 3 }, 
    shadowOpacity: 0.4, 
    shadowRadius: 6, 
    marginTop: 25,
  },

  buttonText: {
    color: '#0d0f36',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
