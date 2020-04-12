// @flow
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Header({appName}) {
  return (
    <View>
      <Text style={styles.header}>{appName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    padding: 10,
    color: 'white',
    backgroundColor: 'skyblue',
    textAlign: 'center',
  },
});

export default Header;
