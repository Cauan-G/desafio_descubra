import React from "react";
import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./styles";

// Atualize a tipagem para aceitar apenas categorias válidas
type SelectProps = {
  selectedCategory: string; 
  onChangeCategory: (category: "Frutas" | "Roupas" | "Produtos de Limpeza") => void;
};

export const Select: React.FC<SelectProps> = ({ selectedCategory, onChangeCategory }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecione uma categoria:</Text>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => onChangeCategory(itemValue as "Frutas" | "Roupas" | "Produtos de Limpeza")}
        style={styles.picker}
      >
        <Picker.Item label="Frutas" value="Frutas" />
        <Picker.Item label="Roupas" value="Roupas" />
        <Picker.Item label="Produtos de Limpeza" value="Produtos de Limpeza" />
      </Picker>
    </View>
  );
};
