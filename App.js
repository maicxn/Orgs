import { View, StatusBar, SafeAreaView } from "react-native";
import Basket from "./src/screens/basket/index";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import mock from './src/mocks/basket'
import AppLoading from "expo-app-loading";

export default function App() {
  const [LoadFont] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold
});

if(!LoadFont) {
  return <AppLoading/>
}
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Basket {...mock}/>
    </SafeAreaView>
  );
}
