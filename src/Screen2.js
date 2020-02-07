import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Screen2 extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Screen1')}>
          <Text> Screen 2 </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
