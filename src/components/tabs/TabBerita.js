import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text, FlatList} from 'react-native';
import {Item, Input, Button} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';
import ListNews from '../ListNews';

export default class TabBerita extends Component {
  constructor() {
    super();
    this.state = {
      btn: 1,
    };
  }

  render() {
    const {btn} = this.state;
    const data = [
      {
        id: '1',
        title: 'Wow! Reksa Dana Saham Minim Risiko Jangka Panjang',
        image:
          'https://ajaib.co.id/wp-content/uploads/2019/06/reksa-dana-saham-minim-risiko.jpg',
      },
      {
        id: '2',
        title: 'Berapa Lama Reksa Dana Cair? Ini Jawabannya',
        image:
          'https://ajaib.co.id/wp-content/uploads/2019/12/lama-reksa-dana-cair.jpg',
      },
      {
        id: '3',
        title: '5 Manfaat Investasi Reksa Dana BCA, Jaminan Menguntungkan!',
        image:
          'https://ajaib.co.id/wp-content/uploads/2019/09/reksa-dana_Keuntungan-Investasi-Reksa-Dana-Online-_Febrian-min-1024x683.jpg',
      },
      {
        id: '4',
        title: 'Keuntungan Investasi Reksa Dana Online: Mengapa Harus Coba?',
        image:
          'https://ajaib.co.id/wp-content/uploads/2019/09/Reksadana-BCA-min-1024x683.jpg',
      },
      {
        id: '5',
        title: 'Sebelum Investasi Reksa Dana, Kenali Dulu Tipe Investormu?',
        image:
          'https://ajaib.co.id/wp-content/uploads/2019/09/781985449sst1567675024-1024x683.jpg',
      },
    ];

    return (
      <>
        <SafeAreaView style={styles.container}>
          <View>
            <Item>
              <Icon
                name="search"
                size={20}
                color={'#B3B6B7'}
                style={styles.iconSearch}
              />
              <Input
                placeholder="Cari Artikel"
                placeholderTextColor="#B3B6B7"
                style={styles.txtSearch}
              />
            </Item>
          </View>
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.viewBtn}>
              <Button
                style={!btn ? styles.buttonActive : styles.buttonSegment}
                onPress={() => this.setState({btn: 0})}>
                <Text style={!btn ? styles.textActive : styles.textSegment}>
                  Populer
                </Text>
              </Button>
              <Button
                style={btn === 1 ? styles.buttonActive : styles.buttonSegment}
                onPress={() => this.setState({btn: 1})}>
                <Text
                  style={btn === 1 ? styles.textActive : styles.textSegment}>
                  Reksa Dana
                </Text>
              </Button>
              <Button
                style={btn === 2 ? styles.buttonActive : styles.buttonSegment}
                onPress={() => this.setState({btn: 2})}>
                <Text
                  style={btn === 2 ? styles.textActive : styles.textSegment}>
                  Belajar
                </Text>
              </Button>
              <Button
                style={btn === 3 ? styles.buttonActive : styles.buttonSegment}
                onPress={() => this.setState({btn: 3})}>
                <Text
                  style={btn === 3 ? styles.textActive : styles.textSegment}>
                  BUMN
                </Text>
              </Button>
              <Button
                style={btn === 4 ? styles.buttonActive : styles.buttonSegment}
                onPress={() => this.setState({btn: 4})}>
                <Text
                  style={btn === 4 ? styles.textActive : styles.textSegment}>
                  Investor
                </Text>
              </Button>
              <Button
                style={btn === 5 ? styles.buttonActive : styles.buttonSegment}
                onPress={() => this.setState({btn: 5})}>
                <Text
                  style={btn === 5 ? styles.textActive : styles.textSegment}>
                  Komunitas
                </Text>
              </Button>
            </ScrollView>
          </View>
          <View style={styles.saparator} />
          <View>
            <FlatList
              style={styles.list}
              data={data}
              renderItem={({item}) => <ListNews item={item} />}
              keyExtractor={item => item.id}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconSearch: {
    marginLeft: wp('5%'),
  },
  txtSearch: {
    marginLeft: wp('2%'),
    fontSize: wp('5%'),
  },
  viewBtn: {
    marginLeft: wp('1%'),
    marginRight: wp('3%'),
    height: hp('8%'),
  },
  buttonSegment: {
    height: hp('5%'),
    backgroundColor: '#fff',
    borderWidth: wp('0.2%'),
    borderColor: 'rgb(216,216,216)',
    borderRadius: wp('2.5%'),
    marginLeft: wp('2%'),
    alignSelf: 'center',
  },
  buttonActive: {
    height: hp('6%'),
    backgroundColor: '#F8FBFF',
    borderWidth: wp('0.5%'),
    borderColor: '#9CC1FB',
    borderRadius: wp('2.5%'),
    marginLeft: wp('2%'),
    alignSelf: 'center',
  },
  textActive: {
    paddingLeft: wp('3%'),
    paddingRight: wp('3%'),
    fontSize: wp('5%'),
    color: '#3F86F9',
  },
  textSegment: {
    paddingLeft: wp('3%'),
    paddingRight: wp('3%'),
    color: 'rgb(216,216,216)',
  },
  saparator: {
    height: hp('0.2%'),
    backgroundColor: '#F6F6F6',
  },
  list: {
    marginBottom: hp('14%'),
  },
});
