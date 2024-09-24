import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function DetailHome() {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: 'purple', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>AnotherDatailsHome</Text>
     
    </View>
  );
}
