import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

function TodoItem({todoItem, deleteTodo}) {
  return (
    <TouchableOpacity onPress={() => deleteTodo(todoItem.id)}>
      <View style={styles.todoItem}>
        <Text>{todoItem.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    marginTop: 16,
    padding: 16,
    alignItems: 'center',
    borderColor: 'skyblue',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 20,
    marginHorizontal: 10,
  },
});

export default TodoItem;
