import React from "react";
import { AsyncStorage, Button, FlatList, View } from "react-native";
import { Note } from "./Note";
import { NoteAdd } from "./NoteAdd";

const storageKey = "DevMeetings.ReactNative.App.Notes";

const createNextNote = (() => {
  let index = 0;

  return text => {
    const key = `${Date.now()}-${index}`;
    index++;

    if (text === undefined) {
      text = `This is default note #${key}`;
    }

    return {
      key,
      text
    };
  }
})();

export class NoteList extends React.Component {
  state = {
    notes: []
  };

  // noinspection JSCheckFunctionSignatures - async is ok
  async componentDidMount() {
    const rawNotes = await AsyncStorage.getItem(storageKey);
    console.log({ rawNotes });
    const notes = rawNotes === null
      ? getDefaultNotes()
      : deserializeNotes(rawNotes);

    this.setState({ notes });
  }

  // noinspection JSCheckFunctionSignatures - async is ok
  async componentDidUpdate(prevProps, prevState, snapshot) {
    const { notes } = this.state;

    if (notes !== prevState.notes) {
      await handleSavingNotesToStorage(notes);
    }
  }

  addNote = (text) => {
    this.setState((state) => ({
      notes: [
        ...state.notes,
        createNextNote(text)
      ]
    }));
  };

  removeNotes = () => {
    this.setState({ notes: [] });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {console.log(this.state.notes)}
        <FlatList
          data={this.state.notes}
          renderItem={({ item }) => <Note text={item.text}/>}
        />
        <NoteAdd onNoteAdd={(text) => this.addNote(text)}/>
        <View style={{ marginTop: 20 }}>
          <Button
            color="red" title="REMOVE ALL NOTES"
            onPress={this.removeNotes}
          />
        </View>
      </View>
    );
  }
}

function getDefaultNotes() {
  return Array.from({ length: 30 }, createNextNote);
}

function deserializeNotes(notes) {
  return JSON.parse(notes);
}

function serializeNotes(notes) {
  console.log(notes);
  if (Array.isArray(notes) && notes.length === 0) {
    return null;
  }

  return JSON.stringify(notes);
}

async function handleSavingNotesToStorage(notes) {
  if (notes.length === 0) {
    await AsyncStorage.removeItem(storageKey);
    return;
  }

  await AsyncStorage.setItem(storageKey, serializeNotes(notes));
}
