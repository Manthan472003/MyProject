import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import RowOne from './android/app/src/components/RowOne';
import RowTwo from './android/app/src/components/RowTwo';

function App(): React.JSX.Element {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <RowOne/>
        <RowTwo/>
        <RowOne/>
        <RowTwo/>
        <RowOne/>
        <RowTwo/>
        <RowOne/>
        <RowTwo/>
        <RowOne/>
        <RowTwo/>
        <RowOne/>
        <RowTwo/>
        <RowOne/>
        <RowTwo/>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default App;
