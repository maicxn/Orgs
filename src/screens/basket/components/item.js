import { Image, StyleSheet, View, FlatList } from "react-native";
import TextCustom from "../../../components/text/text";

export default function Item({ item: { name, image } }) {
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={image}></Image>
      <TextCustom style={styles.name} Children={name}></TextCustom>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  image: {
    width: 46,
    height: 46,
  },
  name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",
  },
});
