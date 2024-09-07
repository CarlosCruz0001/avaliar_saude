import React from 'react';
import { View, StyleSheet } from 'react-native';

const Star = () => {
  return <View style={styles.star} />;
};

const styles = StyleSheet.create({
  star: {
    width: 7, 
    height: 7, 
    backgroundColor: '#fff',
    position: 'absolute',
    transform: [
      { rotate: '45deg' }, 
    ],
  },
});

export default Star;
