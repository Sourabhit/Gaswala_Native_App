import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const ReuseButton = ({
  title,
  height,
  width,
  onPress,
  backgroundColor,
  color,
  margin,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: height || 40,
        width: width || '40%',
        elevation: 8,
        backgroundColor: backgroundColor || '#fff',
        borderRadius: 8,
        alignSelf: 'center',
        justifyContent: 'center',
        margin: margin,
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: color || 'green',
          fontWeight: '800',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ReuseButton;
//
