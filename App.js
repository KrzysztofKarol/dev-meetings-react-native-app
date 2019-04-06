import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NoteList } from "./src/components/NoteList";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NoteList/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // Fix for Expo App
    marginTop: 20,
    flex: 1
  }
});
