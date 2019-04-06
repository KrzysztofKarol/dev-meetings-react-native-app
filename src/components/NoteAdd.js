import React from "react";
import { Text, TextInput, View } from "react-native";

export class NoteAdd extends React.Component {
  state = {
    text: ""
  };

  onSubmitEditing = () => {
    this.props.onNoteAdd(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <View>
        <Text>NEW NOTE: </Text>
        <View style={{ borderWidth: 1 }}>
          <TextInput
            value={this.state.text}
            onChangeText={(text => this.setState({ text }))}
            onSubmitEditing={this.onSubmitEditing}
          />
        </View>
      </View>
    );
  }
}
