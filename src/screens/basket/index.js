import Topo from "./components/top";
import Details from "./components/details";
import { View, StyleSheet, FlatList } from "react-native";
import Item from "./components/item";
import TextCustom from "../../components/text/text";

export default function Basket({ top, details, itens }) {
  return (
    <>
      <FlatList
        data={itens.list}
        renderItem={Item}
        keyExtractor={({ name}) => name}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...top} />
              <View style={styles.basket}>
                <Details {...details} />
                <TextCustom style={styles.title}Children={itens.title} />
              </View>
            </>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  basket: {
   padding:16
  },
  title: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
});
