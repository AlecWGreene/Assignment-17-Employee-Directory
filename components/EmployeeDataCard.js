import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function EmployeeDataCard(props) {
    let imgHeight = 450, imgWidth = 450;
    return (
        <View style={styles.cardContainer}>
            {
                Image.getSize("https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352088-stock-illustration-default-placeholder-profile-icon.jpg", (width, height) => { imgHeight = height; imgWidth = width; }, (err) => { console.log(err)})
            }
            <View style={styles.cardDataContainer}>
                <Image style={{ height: imgHeight, width: imgWidth, maxHeight: 100, maxWidth: 100}} source={{uri: "https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352088-stock-illustration-default-placeholder-profile-icon.jpg"}} />
            </View>

            <View style={styles.cardDataContainer}>
                <Text>{props.firstName + " " + props.lastName}</Text>
            </View>

            <View style={styles.cardDataContainer}>
                <Text>Department: {props.department}</Text>
                <Text>Role: {props.role}</Text>
                <Text>Manager: {props.manager}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: "3rem",
        backgroundColor: "#eeeeee"
    },
    cardDataContainer: {
        flex: 0.3333333,
        flexDirection: "column",
        justifyContent: "center"
    }
});