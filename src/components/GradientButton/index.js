import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientButton = ({ title, colors, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={colors}
        start={{ x: 0.1, y: 0.2 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.gradientContainer}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = {
  gradientContainer: {
    borderRadius: 15,
    padding: 10,
    width: 330,
    height: 50,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: '50%',
  },
};

export default GradientButton;
