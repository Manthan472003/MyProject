import React from 'react';
import {  StyleSheet, View } from 'react-native';

function RowTwo(): React.JSX.Element {
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
        backgroundColor: '#ffffff', // White color
        margin: 10,
    },
});

export default RowTwo;
