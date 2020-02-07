import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ListNews = props => {
  const {item} = props;
  return (
    <>
      <View style={styles.body}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.viewBBC}>
          <Text style={styles.txBBC}>BBC</Text>
          <View style={styles.dot} />
          <Text style={styles.txBBC}>6h</Text>
        </View>
        <View style={styles.viewBBCA}>
          <Text style={styles.txBBCA}>BBCA +0.11%</Text>
          <Text style={styles.txBBCA}>BBCA +0.11%</Text>
        </View>
      </View>
      <View style={styles.saparator} />
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
  },
  image: {
    marginLeft: wp('5%'),
    marginRight: wp('5%'),
    width: wp('90%'),
    height: hp('25%'),
    borderRadius: wp('1.5%'),
  },
  title: {
    marginTop: hp('2%'),
    marginLeft: wp('5%'),
    marginRight: wp('5%'),
    fontSize: wp('7%'),
  },
  viewBBC: {
    marginTop: hp('0.5%'),
    marginLeft: wp('5%'),
    marginRight: wp('5%'),
    flexDirection: 'row',
  },
  dot: {
    width: wp('2%'),
    height: hp('1%'),
    alignSelf: 'center',
    marginLeft: wp('2%'),
    marginRight: wp('2%'),
    borderRadius: wp('50%'),
    backgroundColor: 'rgba(215,215,215, 0.5)',
  },
  txBBC: {
    color: 'rgba(215,215,215, 0.8)',
  },
  viewBBCA: {
    marginTop: hp('3%'),
    marginLeft: wp('5%'),
    marginRight: wp('5%'),
    flexDirection: 'row',
  },
  txBBCA: {
    marginRight: wp('10%'),
    color: '#5CD790',
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
  saparator: {
    height: hp('0.4%'),
    backgroundColor: '#F6F6F6',
  },
});

export default ListNews;
