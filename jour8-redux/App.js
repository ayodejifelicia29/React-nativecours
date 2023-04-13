import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import A from './composant/A';
import B from './composant/B';
import Exo1 from './composant/Exo1';
import { ExoContextProvider } from './contexts/exoContext';
import Exo from './composant/Exo';
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import C from './composant/C';



export default function App() {
  return (
 <Provider store={store}>
 <ExoContextProvider>
    <View style={styles.container}>
    <C/>
      {false && <>
        <Exo/>
        <Exo1 />
        <A />
        <B />
      </>}
      <StatusBar style="auto" />
    </View>
    </ExoContextProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
