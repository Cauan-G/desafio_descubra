import React, { forwardRef } from "react";
import { Text, View, TextProps } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "./styles";

// Componente para mostrar o texto total
const TextoTotal = ({ text, nItens }: { text: string; nItens: number }) => (
  <Text style={styles.text}>
    {text}: {nItens}
  </Text>
);

// Componente para o botão limpar
const ClearButton = ({ clearSelections }: { clearSelections: () => void }) => (
  <Button mode="contained" onPress={clearSelections} style={styles.clearButton}>
    Limpar Seleções
  </Button>
);

// Componente Rodape
type Props = TextProps & {
  text: string;
  nItens: number;
  clearSelections: () => void;
};

export const Rodape = forwardRef<Text, Props>((props, ref) => {
  const { text, nItens, clearSelections, ...rest } = props;

  return (
    <View style={styles.container}>
      <TextoTotal text={text} nItens={nItens} />
      <ClearButton clearSelections={clearSelections} />
    </View>
  );
});
