import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ListSaham from '../ListSaham';
import ListArticle from '../ListArticle';

export default class TabBelajar extends Component {
  constructor() {
    super();
    this.state = {
      btn: 1,
    };
  }

  render() {
    const data = [
      {
        id: '1',
        title: 'IPOTFUND',
      },
      {
        id: '2',
        title: 'Mandiri Most',
      },
      {
        id: '3',
        title: 'Bareksa',
      },
      {
        id: '4',
        title: 'Ajaib',
      },
      {
        id: '5',
        title: 'Bibit',
      },
      {
        id: '6',
        title: 'Tokopedia Reksadana',
      },
    ];
    const dataArticle = [
      {
        id: '1',
        title: 'Wow! Reksa Dana ArtListArticle Minim Risiko Jangka Panjang',
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
            <Text style={styles.txTitle}>Rekomendasi Saham Hari Ini</Text>
            <FlatList
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={({item, index}) => (
                <ListSaham item={item} index={index} />
              )}
              keyExtractor={item => item.id}
            />
          </View>
          <View>
            <FlatList
              style={styles.list}
              data={dataArticle}
              renderItem={({item, index}) => (
                <ListArticle item={item} index={index} />
              )}
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
    marginTop: hp('2%'),
  },
  list: {
    marginBottom: wp('44%'),
  },

  txTitle: {
    marginLeft: wp('5%'),
    marginRight: wp('5%'),
    color: '#2C4B7D',
    fontSize: wp('7%'),
    fontWeight: 'bold',
  },
});
