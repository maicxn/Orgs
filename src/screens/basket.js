import { Image, StyleSheet, Dimensions, View, Text } from "react-native";
import TextCustom from "../components/text/text";
import top from "../../assets/topo.png";
import logo from "../../assets/logo.png";

const width = Dimensions.get("screen").width;

export default function Basket() {
  return (
    <>
      <Image source={top} style={styles.top} />
      <TextCustom style={styles.title} Children="Detalhe da Cesta"></TextCustom>
      <View style={styles.basket}>
        <TextCustom style={styles.name} Children="Cesta de Verduras"></TextCustom>
        <View style={styles.farm}>
          <Image style={styles.imageFarm} source={logo} />
          <TextCustom style={styles.farmName} Children="Jenny Jack Form"></TextCustom>
        </View>
        <TextCustom style={styles.description} Children='Uma cesta com produtos selecionados cuidadosamente da fazenda direto
          para sua cozinha'>
        </TextCustom>

        <TextCustom style={styles.budget} Children="R$ 40,00"></TextCustom>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  top: {
    width: "100%",
    height: (578 / 768) * width,
  },
  title: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 16,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  name: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontFamily: "MontserratBold",
    fontWeight: 'bold'
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
    color: '#a3a3a3'
  },
  budget: {
    color: "#2a9f85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
