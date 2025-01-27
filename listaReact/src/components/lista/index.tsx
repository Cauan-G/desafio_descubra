import React from "react";
import { View, Text} from "react-native";
import { Checkbox } from "react-native-paper";
import { styles } from "./styles";

type Props = {
  items: string[];
  itemsState: { [key: string]: boolean };
  onItemChange: (item: string, value: boolean) => void;
};

export const ListaDinamica: React.FC<Props> = ({ items, itemsState, onItemChange }) => {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <View key={item} style={styles.itemContainer}>
          <Text style={styles.itemText}>{item}</Text>
          <Checkbox
            status={itemsState[item] ? "checked" : "unchecked"}
            onPress={() => onItemChange(item, !itemsState[item])}
          />
        </View>
      ))}
    </View>
  );
}