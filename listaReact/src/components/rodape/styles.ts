import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  clearButton: {
    marginTop: 10, // Ajuste o valor de acordo com a necessidade
    paddingVertical: 10, // Aumenta a altura do botão
    paddingHorizontal: 20, // Ajuste a largura do botão
    borderRadius: 5, // Cantos arredondados
  },
});
