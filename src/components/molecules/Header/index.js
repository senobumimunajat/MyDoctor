import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap} from '../..';
import {IconBackDark} from '../../../assets';
import {colors} from '../../../utils';

const Header = () => {
  return (
    <View style={styles.container}>
      <IconBackDark />
      <Text style={styles.text}>Daftar Akun</Text>
      <Gap width={24} />
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: colors.text.primary,
  },
});
