import React, { forwardRef, LegacyRef } from "react";
import { Text, TextProps, View } from "react-native";
import { styles } from "./styles";

type Props = TextProps & {
    text: string; 
};

export const Titulo = forwardRef<Text, Props>((props, ref) => {
    const { text, ...rest } = props; 

    return (
        <View style={styles.container}>
            <Text style={[styles.text]} ref={ref}>
                {text}
            </Text>

        </View>
    );
});
