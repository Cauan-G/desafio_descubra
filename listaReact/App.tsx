import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ListaDinamica } from "./src/components/lista";
import { Rodape } from "./src/components/rodape";
import { Select } from "./src/components/select";
import { Titulo } from "./src/components/titulo";

// Define um tipo explícito para as categorias
type Categoria = "Frutas" | "Roupas" | "Produtos de Limpeza";

const CATEGORIAS: Record<Categoria, string[]> = {
  "Frutas": ["Maçã", "Banana", "Laranja"],
  "Roupas": ["Camiseta", "Calça", "Casaco"],
  "Produtos de Limpeza": ["Sabão em pó", "Detergente", "Água sanitária"],
};

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Categoria>("Frutas");
  const [itemsState, setItemsState] = useState<{ [key: string]: boolean }>({});
  const [totalSelected, setTotalSelected] = useState(0);

  // Carrega o estado salvo do AsyncStorage
  useEffect(() => {
    const loadState = async () => {
      const savedState = await AsyncStorage.getItem("itemsState");
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        setItemsState(parsedState);
        updateTotalSelected(parsedState);
      }
    };
    loadState();
  }, []);

  // Atualiza o total de itens selecionados
  const updateTotalSelected = (state: { [key: string]: boolean }) => {
    const total = Object.values(state).filter((value) => value).length;
    setTotalSelected(total);
  };

  // Atualiza o estado dos itens e salva no AsyncStorage
  const handleItemChange = (item: string, value: boolean) => {
    const updatedState = { ...itemsState, [item]: value };
    setItemsState(updatedState);
    AsyncStorage.setItem("itemsState", JSON.stringify(updatedState));
    updateTotalSelected(updatedState);
  };

  // Limpa todas as seleções
  const clearSelections = () => {
    const clearedState = Object.keys(itemsState).reduce(
      (acc, key) => ({ ...acc, [key]: false }),
      {}
    );
    setItemsState(clearedState);
    AsyncStorage.setItem("itemsState", JSON.stringify(clearedState));
    updateTotalSelected(clearedState);
  };

  // Função para alterar a categoria selecionada
  const handleCategoryChange = (category: Categoria) => {
    setSelectedCategory(category);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Titulo 
        text="Lista Com React"
      />
      <Select
        selectedCategory={selectedCategory}
        onChangeCategory={handleCategoryChange}
      />
      <ListaDinamica
        items={CATEGORIAS[selectedCategory]}
        itemsState={itemsState}
        onItemChange={handleItemChange}
      />
      <Rodape 
        clearSelections={clearSelections}
        nItens={totalSelected}
        text="Seleções"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  }
});
