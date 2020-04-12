import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';

function AddTodo({addTodo}) {
  const [text, setText] = useState({});
  const onTextChange = (val) => {
    return setText(val);
  };
  return (
    <View style={styles.todo}>
      <TextInput
        placeholder={'Add Todo ...'}
        onChangeText={(val) => onTextChange(val)}
      />
      <TouchableOpacity>
        <Button
          title={'Add Todo'}
          onPress={() => {
            addTodo(text);
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    marginTop: 16,
    padding: 16,
    alignItems: 'center',
    borderColor: 'skyblue',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 20,
  },
});

export default AddTodo;
