/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Alert,
  Keyboard,
  View,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

const App: () => React$Node = () => {
  const [todos, setTodos] = useState([
    {text: 'Clean Master Bedroom', id: 1},
    {text: 'Clean Bathroom', id: 2},
    {text: 'Clean Bathroom', id: 4},
    {text: 'Clean Bathroom', id: 5},
    {text: 'Clean Bathroom', id: 6},
    {text: 'Clean Bathroom', id: 7},
    {text: 'Clean Bathroom', id: 8},
    {text: 'Clean Bathroom', id: 9},
    {text: 'Clean Bathroom', id: 10},
    {text: 'Clean Bathroom', id: 11},
  ]);

  const deleteTodo = (id) => {
    return setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const addTodo = (todo) => {
    if (todo.length > 3) {
      setTodos([...todos, {text: todo, id: Math.random().toString()}]);
    } else {
      Alert.alert(
        'Validation Error',
        'Todo text should be greater than 3 characters!',
        [{text: 'Got It', onPress: () => console.log('Alert Closed!')}],
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.body}>
        <Header appName={'Todo App'} />
        <View>
          <Text style={styles.highlight}>
            You have {todos.length} todos remaining to complete!!
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <AddTodo addTodo={addTodo} />
        </View>
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <TodoItem todoItem={item} deleteTodo={deleteTodo} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
    alignSelf: 'center',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
