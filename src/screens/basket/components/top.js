import { Image, StyleSheet, Dimensions } from "react-native";
import TextCustom from "../../../components/text/text";
import top from "../../../../assets/topo.png"

const width = Dimensions.get("screen").width;


export default function Topo({title}) {
  return (
    <>
      <Image source={top} style={styles.top} />
      <TextCustom style={styles.title} Children={title}></TextCustom>
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
})