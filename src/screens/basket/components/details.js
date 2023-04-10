import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import TextCustom from "../../../components/text/text";

export default function Details({
  name,
  farm,
  description,
  logoFarm,
  budget,
  button,
}) {
  return (
    <>
      <TextCustom style={styles.name} Children={name}></TextCustom>
      <View style={styles.farm}>
        <Image style={styles.imageFarm} source={logoFarm} />
        <TextCustom style={styles.farmName} Children={farm}></TextCustom>
      </View>
      <TextCustom
        style={styles.description}
        Children={description}
      ></TextCustom>

      <TextCustom style={styles.budget} Children={budget}></TextCustom>
      <TouchableOpacity style={styles.button}>
        <TextCustom style={styles.textButton} Children={ button }></TextCustom>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontFamily: "MontserratBold",
    fontWeight: "bold",
  },
  farm: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imageFarm: {
    width: 32,
    height: 32,
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontFamily: "MontserratRegular",
  },
  description: {
    fontSize: 16,
    lineHeight: 26,
    color: "#a3a3a3",
  },
  budget: {
    color: "#2a9f85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#2a9f85',
    paddingVertical: 16,
    borderRadius: 6
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold'
  }
});
