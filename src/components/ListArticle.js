import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Left, Right} from 'native-base';

const ListArticle = props => {
  const {item, index} = props;
  return (
    <>
      <View style={styles.body}>
        <Left>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.viewBBC}>
            <Text style={styles.txBBC}>Yahoo.com</Text>
            <View style={styles.dot} />
            <Text style={styles.txBBC}>7h</Text>
          </View>
        </Left>
        <Right>
          <Image style={styles.image} source={{uri: item.image}} />
        </Right>
      </View>
      {index % 2 === 0 ? (
        <View style={styles.viewBBCA}>
          <Text style={styles.txBBCAUp}>BBCA +0.11%</Text>
          <Text style={styles.txBBCAUp}>CNBB +0.11%</Text>
          <Text style={styles.txBBCAUp}>ARDS +0.11%</Text>
        </View>
      ) : (
        <View style={styles.viewBBCA}>
          <Text style={styles.txBBCADown}>MNDR -0.11%</Text>
          <Text style={styles.txBBCADown}>BBC -0.11%</Text>
          <Text style={styles.txBBCADown}>BCAA -0.11%</Text>
        </View>
      )}

      <View style={styles.saparator} />
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: hp('4%'),
    marginBottom: hp('2%'),
    flexDirection: 'row',
  },
  image: {
    width: wp('20%'),
    height: hp('10%'),
    borderRadius: wp('1.5%'),
    marginRight: wp('5%'),
  },
  title: {
    marginLeft: wp('5%'),
    fontSize: wp('5%'),
  },
  saparator: {
    height: hp('0.4%'),
    backgroundColor: '#F6F6F6',
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
    marginTop: hp('1%'),
    marginLeft: wp('5%'),
    marginRight: wp('5%'),
    flexDirection: 'row',
    marginBottom: hp('1%'),
  },
  txBBCAUp: {
    marginRight: wp('10%'),
    color: '#5CD790',
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
  txBBCADown: {
    marginRight: wp('10%'),
    color: '#F79B94',
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
});

export default ListArticle;
