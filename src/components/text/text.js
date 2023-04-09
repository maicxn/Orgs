import { Text, StyleSheet } from "react-native";

export default function TextCustom({ Children, style }) {
  let styleCustom = styles.text

  if (style?.fontWeight === "bold") {
    styleCustom = styles.textBold;
  }

  return <Text style={[style, styleCustom]}>{Children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal"
  },
  textBold: {
    fontFamily: "MontserratBold",
    fontWeight: "normal"
  },
});
