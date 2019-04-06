import React from "react";
import { FlatList, View } from "react-native";
import { Note } from "./Note";

export class NoteList extends React.Component {

  state = {
    list: Array.from({ length: 100 }, (_, i) => ({
      key: i.toString(),
      text: `This is single note #${i}`
    }))
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.list}
          renderItem={({ item }) => <Note text={item.text}/>}
        />
      </View>
    );
  }
}