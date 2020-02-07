import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ListSaham = props => {
  const {item, index} = props;
  return (
    <>
      <View style={styles.container}>
        <View style={index % 2 === 0 ? styles.body : styles.body1}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.title1}>Return +12.45%</Text>
        </View>
        <Text style={styles.title2}>199 orang berinvestasi disini</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'column'},
  body: {
    marginTop: hp('2%'),
    marginLeft: hp('2.5%'),
    width: wp('42%'),
    height: hp('13%'),
    backgroundColor: '#53A1F1',
    borderRadius: wp('1.5%'),
  },
  body1: {
    marginTop: hp('2%'),
    marginLeft: hp('2.5%'),
    width: wp('42%'),
    height: hp('13%'),
    backgroundColor: '#0E539D',
    borderRadius: wp('1.5%'),
  },
  title: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: wp('2%'),
    marginRight: wp('2%'),
    marginTop: hp('0.5%'),
  },
  title1: {
    fontSize: wp('4.2%'),
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    bottom: 0,
    marginBottom: hp('1%'),
    marginLeft: wp('2%'),
    marginRight: wp('2%'),
  },
  title2: {
    fontWeight: 'bold',
    color: '#d3d3d3',
    marginTop: hp('1%'),
    marginLeft: wp('5%'),
  },
});

export default ListSaham;
