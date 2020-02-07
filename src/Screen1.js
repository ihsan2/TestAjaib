import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Header, Body, Title, Tabs, Tab} from 'native-base';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

//import tabs
import TabBerita from './components/tabs/TabBerita';
import TabKomunitas from './components/tabs/TabKomunitas';
import TabBelajar from './components/tabs/TabBelajar';

export default class Screen1 extends Component {
  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <Header style={styles.header}>
            <Body style={styles.bodyHeader}>
              <Title style={styles.titleHeader}>News & Feed</Title>
            </Body>
          </Header>
          <Tabs>
            <Tab
              heading="Berita"
              tabStyle={styles.tab}
              textStyle={styles.textStyle}
              activeTabStyle={styles.tab}
              activeTextStyle={styles.activeText}>
              <TabBerita />
            </Tab>
            <Tab
              heading="Komunitas"
              tabStyle={styles.tab}
              textStyle={styles.textStyle}
              activeTabStyle={styles.tab}
              activeTextStyle={styles.activeText}>
              <TabKomunitas />
            </Tab>
            <Tab
              heading="Belajar"
              tabStyle={styles.tab}
              textStyle={styles.textStyle}
              activeTabStyle={styles.tab}
              activeTextStyle={styles.activeText}>
              <TabBelajar />
            </Tab>
          </Tabs>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#3A83F9',
  },
  bodyHeader: {
    alignItems: 'center',
  },
  titleHeader: {
    fontWeight: 'bold',
  },
  tab: {
    backgroundColor: '#3A83F9',
  },
  textStyle: {
    color: '#6FA5FB',
    fontWeight: 'bold',
    fontSize: wp('5%'),
  },
  activeText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: wp('5%'),
  },
});
