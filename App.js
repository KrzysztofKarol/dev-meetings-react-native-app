import React from "react";
import { SafeAreaView } from "react-native";
import { NoteList } from "./src/components/NoteList";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <NoteList/>
      </SafeAreaView>
    );
  }
}
