import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
//import * as fs from "react-native-fs";

import DepartmentDataCard from "./DepartmentDataCard.js";
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
        headName: 0,
        budget: 0,
        expenses: 0
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
            headName: 0,
            budget: 0,
            expenses: 0
        })
    }

    const handleDepartmentHeadSort = () => {
        setState({
            name: 0,
            headName: ((state.headName + 2) % 3) - 1,
            budget: 0,
            expenses: 0
        })
    }

    const handleBudgetSort = () => {
        setState({
            name: 0,
            headName: 0,
            budget: ((state.budget + 2) % 3) - 1,
            expenses: 0
        })
    }

    const handleExpensesSort = () => {
        setState({
            name: 0,
            headName: 0,
            budget: 0,
            expenses: ((state.expenses + 2) % 3) - 1
        })
    }

    const sortData = (arr) => {
        for(const key of Object.keys(state)) {
            if (state[key] != 0) {
                const tempArr = [];
                const index = key === "name" ? 1 : ( key === "headName" ? 2 : ( key === "budget" ? 3 : ( key === "expenses" ? 4 : undefined ) ));
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

    const displayData = sortData(data.departments);

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.pressableContainer}>
                <Pressable style={[styles.pressableButton, { flex: 1 }]} onPress={handleNameSort}><Text style={styles.pressableText}>Name</Text></Pressable>
                <Pressable style={styles.pressableButton} onPress={handleDepartmentHeadSort}><Text style={styles.pressableText}>Department Head</Text></Pressable>
                <Pressable style={styles.pressableButton} onPress={handleExpensesSort}><Text style={styles.pressableText}>Budget</Text></Pressable>
                <Pressable style={styles.pressableButton} onPress={handleBudgetSort}><Text style={styles.pressableText}>Expenses</Text></Pressable>
            </View>

            <ScrollView>
                {displayData.map(rowData => {
                    return (
                        <DepartmentDataCard 
                          name={removeParentheses(rowData[1])} 
                          headName={removeParentheses(data.employees.filter(emplRow => emplRow[0].trim() === rowData[2].toString())[0].reduce((total, value, index) =>{
                            if(index === 1){
                              return total + value + " ";
                               }
                            else if(index === 2){
                              return total + value;
                          }
                          return total;
                          
                          }, ""))} 
                          budget={removeParentheses(rowData[3])} 
                          expenses={removeParentheses(rowData[4])} 
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