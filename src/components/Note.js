import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export class Note extends React.Component {
  render() {
    return (
      <View style={styles.item}>
        <Ionicons name="md-checkmark-circle" size={32} color="green"/>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row"
  }
});
