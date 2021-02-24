import React from 'react';
import { Button, SafeAreaView } from 'react-native';

export default function Home(props) {

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Button
        onPress={() => props.navigation.navigate('contact')}
        title={'Button'}
      />
    </SafeAreaView>
  )
}

const styles = {
  mainContainer: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
}