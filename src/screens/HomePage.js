import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import NavbarUser from '../components/NavbarUser';
import UpcomingMovies from '../components/UpcomingMovies';
import Footer from '../components/Footer';
import NowShowing from '../components/NowShowingMovies';

const Homepage = () => {
  return (
    <View>
      <ScrollView stickyHeaderIndices={[0]} style={styles.wrapper}>
        <NavbarUser />
        <View style={styles.bannerWrapper}>
          <View>
            <Text style={styles.textBanner1}>
              Nearest Cinema, Newest Movie,
            </Text>
            <Text style={styles.textBanner2}>Find out now!</Text>
          </View>
          <View>
            <Image
              source={require('../assets/images/image2.png')}
              style={styles.imageBanner}
            />
          </View>
        </View>
        <NowShowing />
        <UpcomingMovies />
        <View style={styles.joinWrapper}>
          <View style={styles.joinCard}>
            <View>
              <Text style={styles.textJoin1}>Be the vanguard of the</Text>
              <Text style={styles.textJoin2}>Eastick People</Text>
            </View>
            <View>
              <TextInput
                name="email"
                autoCapitalize="none"
                style={styles.input}
                placeholder="Type your email"
              />
              <Pressable style={styles.btnJoin}>
                <Text style={styles.textBtnJoin}>Join Now</Text>
              </Pressable>
            </View>
            <View>
              <Text style={styles.textJoin3}>
                By joining you as a Eastick member, we will always send you the
                latest updates via email .
              </Text>
            </View>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  bannerWrapper: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    zIndex: -1,
    backgroundColor: 'white',
  },
  textBanner1: {
    fontSize: 16,
    color: '#A0A3BD',
  },
  textBanner2: {
    fontSize: 38,
    color: '#3C6255',
  },
  imageBanner: {
    resizeMode: 'contain',
    width: '100%',
  },
  joinWrapper: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  joinCard: {
    borderWidth: 1,
    borderColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    paddingVertical: 50,
    backgroundColor: 'white',
  },
  textJoin1: {
    color: '#4E4B66',
    textAlign: 'center',
    fontSize: 16,
  },
  textJoin2: {
    color: '#61876E',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    width: 280,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    padding: 10,
    borderRadius: 4,
    marginTop: 40,
    marginBottom: 20,
  },
  btnJoin: {
    backgroundColor: '#61876E',
    width: 280,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 40,
  },
  textBtnJoin: {
    color: 'white',
    fontWeight: 'bold',
  },
  textJoin3: {
    textAlign: 'center',
    width: 260,
  },
});

export default Homepage;
