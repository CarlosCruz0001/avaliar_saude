import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import Star from './star'; 

const numStars = 20; 

const StarField = () => {
  const animations = useRef(Array.from({ length: numStars }).map(() => new Animated.Value(1)));

  useEffect(() => {
    const animationsLoop = animations.current.map((animation) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(animation, {
            toValue: 0.5,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(animation, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
        ]),
      )
    );

    Animated.stagger(100, animationsLoop).start();
  }, []);

  return (
    <View style={styles.container}>
      {Array.from({ length: numStars }).map((_, index) => {
        const top = Math.random() * 100 + '%';
        const left = Math.random() * 100 + '%';
        const animStyle = {
          transform: [{ scale: animations.current[index] }],
          position: 'absolute',
          top,
          left,
        };

        return (
          <Animated.View
            key={index}
            style={[styles.star, animStyle]}
          >
            <Star />
          </Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', 
  },
  star: {
    width: 8,
    height: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
    position: 'absolute',
  },
});

export default StarField;
