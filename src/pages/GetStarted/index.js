import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILGetStarted, ILLogo} from '../../assets';
import {Button} from '../../components';

const GetStarted = () => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah, cepat dan fleksibel
        </Text>
      </View>
      <View>
        <Button title="Get Started" />
        <View style={{height: 16}} />
        <Button type="secondary" title="Sign In" />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {padding: 40, justifyContent: 'space-between', backgroundColor: 'white', flex: 1},
  // eslint-disable-next-line no-dupe-keys
  title: {fontSize: 28, fontWeight: '600', color: 'black', marginTop: 91, color: 'white'},
});
