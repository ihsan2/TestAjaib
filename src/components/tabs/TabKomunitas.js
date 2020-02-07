import React, {Component} from 'react';
import {StyleSheet, Image, SafeAreaView} from 'react-native';

export default class TabKomunitas extends Component {
  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <Image
            style={styles.image1}
            source={{
              uri:
                'https://rec-data.kalibrr.com/www.kalibrr.com/logos/5DTWPESV8HR76VJBZARER7R5PPF4TYEXWSTY5H9T-5d3161a9.jpg',
            }}
          />

          <Image
            style={styles.image}
            source={{
              uri:
                'https://ajaib.co.id/wp-content/uploads/2019/10/Icon-Ajaib-Rounded-1024x1024.png',
            }}
          />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
  image1: {
    width: 150,
    height: 150,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
