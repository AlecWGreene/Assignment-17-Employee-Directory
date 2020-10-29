import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home(){
    return (
        <View>
            <Text style={styles.header}>Welcome to the Employee Directory</Text>
            <Text style={styles.bodyText}>This app was created using react native and some pre-generated data, cycle through the pages and click on the headers to view/sort the data.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        fontWeight: "bold",
        fontSize: "24pt",
        textAlign: "center"
    },
    bodyText: {
        fontSize: "18pt",
        textAlign: "center"
    }
});