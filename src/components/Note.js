import React from "react";
import { StyleSheet, Text, View } from "react-native";

export class Note extends React.Component {
  render() {
    return (
      <View style={styles.item}>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: "center"
  }
});
