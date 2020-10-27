import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
//import * as fs from "react-native-fs";

import RoleDataCard from "./RoleDataCard.js";
import getData from "../utils/getData.js";
import removeParentheses from "../utils/removeParentheses.js";

const fileName = {
    departments: "../data/department_table.csv",
    employees: "../data/employee_table.csv",
    roles: "../data/role_table.csv"
}

const data = {
    employees: undefined,
    roles: undefined,
    departments: undefined
}


function RoleDataContainer(props) {
    const [state, setState] = useState({
        title: 0,
        salary: 0
    });

    // Load any missing data
    if (!data.employees) {
        data.employees = getData(fileName.employees);
    }
    if (!data.departments) {
        data.departments = getData(fileName.departments);
    }
    if (!data.roles) {
        data.roles = getData(fileName.roles);
    }

    const handleTitleSort = () => {
        setState({
            title:  ((state.title + 2) % 3) - 1,
            salary: 0
        })
    }

    const handleSalarySort = () => {
        setState({
            title: 0,
            salary: ((state.salary + 2) % 3) - 1
        })
    }


    const sortData = (arr) => {
        for(const key of Object.keys(state)) {
            if (state[key] != 0) {
                const tempArr = [];
                const index = key === "title" ? 1 : ( key === "salary" ? 2 : undefined );
                for (let i = 0; i < arr.length; i++) {
                    if (tempArr.length === 0) {
                        tempArr.push(arr[i]);
                        continue;
                    }
                    for (let j = 0; j < tempArr.length; j++) {
                        if (tempArr[j][index] < arr[i][index] && state[key] === 1) {
                            tempArr.splice(j,0,arr[i]);
                            break;
                        }
                        else if(tempArr[j][index] > arr[i][index] && state[key] === -1){
                            tempArr.splice(j,0,arr[i]);
                            break;
                        }
						if (j === tempArr.length - 1) {
							tempArr.push(arr[i]);
							break;
}
                    }
                }
				return tempArr;
            }
        }

        return arr;
    }

    const displayData = sortData(data.roles);

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.pressableContainer}>
                <Pressable style={[styles.pressableButton, { flex: 0.5 }]} onPress={handleTitleSort}><Text style={styles.pressableText}>Title</Text></Pressable>
                <Pressable style={styles.pressableButton} onPress={handleSalarySort}><Text style={styles.pressableText}>Salary</Text></Pressable>
            </View>

            <ScrollView>
                {displayData.map(rowData => {
                    return (
                        <RoleDataCard 
                          title={removeParentheses(rowData[1])}
                          salary={removeParentheses(rowData[2])} 
                          key={rowData[0]}
                        />
                    );
                })}
            </ScrollView>
        </View>);
}

const styles = StyleSheet.create({
    pressableContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    pressableButton: {
        flex: 0.5,
        justifyContent: "center",
        borderWidth: "2px",
        borderColor: "#444444"
    },
    pressableText: {
        textAlign: "center"
    }
});

export default RoleDataContainer;