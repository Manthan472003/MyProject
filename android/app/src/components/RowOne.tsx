import React from 'react';
import { StyleSheet, View } from 'react-native';

function RowOne(): React.JSX.Element {
    return (
        <>
            <View style={styles.box} />
            <View style={styles.box} />
            <View style={styles.box} />
        </>
    );
}

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: '#ff0000', // White color
        margin: 10,
    },
});

export default RowOne;
