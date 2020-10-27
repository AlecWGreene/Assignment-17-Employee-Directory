import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
//import * as fs from "react-native-fs";

import EmployeeDataCard from "./EmployeeDataCard.js";
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


function EmployeeDataContainer(props) {
    const [state, setState] = useState({
        name: 0,
        department: 0,
        manager: 0,
        roles: 0
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

    const handleNameSort = () => {
        setState({
            name:  ((state.name + 2) % 3) - 1,
            department: 0,
            manager: 0,
            roles: 0
        })
    }

    const handleDepartmentSort = () => {
        setState({
            name: 0,
            department: ((state.department + 2) % 3) - 1,
            manager: 0,
            roles: 0
        })
    }

    const handleManagerSort = () => {
        setState({
            name: 0,
            department: 0,
            manager: ((state.manager + 2) % 3) - 1,
            roles: 0
        })
    }

    const handleRoleSort = () => {
        setState({
            name: 0,
            department: 0,
            manager: 0,
            roles: ((state.roles + 2) % 3) - 1
        })
    }

    const sortData = (arr) => {
        for(const key of Object.keys(state)) {
            if (state[key] != 0) {
                const tempArr = [];
                const index = key === "name" ? 1 : ( key === "department" ? 3 : ( key === "roles" ? 4 : ( key === "manager" ? 5 : undefined ) ));
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

    const displayData = sortData(data.employees);

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.pressableContainer}>
                <Pressable style={[styles.pressableButton, { flex: 1 }]} onPress={handleNameSort}><Text style={styles.pressableText}>Name</Text></Pressable>
                <Pressable style={styles.pressableButton} onPress={handleDepartmentSort}><Text style={styles.pressableText}>Department</Text></Pressable>
                <Pressable style={styles.pressableButton} onPress={handleRoleSort}><Text style={styles.pressableText}>Role</Text></Pressable>
                <Pressable style={styles.pressableButton} onPress={handleManagerSort}><Text style={styles.pressableText}>Manager</Text></Pressable>
            </View>

            <ScrollView>
                {displayData.map(rowData => {
                    return (
                        <EmployeeDataCard 
                          firstName={removeParentheses(rowData[1])} lastName={removeParentheses(rowData[2])} 
                          department={removeParentheses(data.departments.filter(deptRow => deptRow[0].trim() === rowData[3].toString())[0][1])} 
                          role={removeParentheses(data.roles.filter(deptRow => deptRow[0].trim() === rowData[4].toString())[0][1])} 
                          manager={removeParentheses(data.employees.filter(empRow => empRow[0].trim() === rowData[5].toString())[0][1])} 
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
        flex: 0.25,
        justifyContent: "center",
        borderWidth: "2px",
        borderColor: "#444444"
    },
    pressableText: {
        textAlign: "center"
    }
});

export default EmployeeDataContainer;