import React from 'react';
import { StyleSheet, TextInput, Text, View} from 'react-native';
import styles from './Login.styles'
 
export const Template = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.buttonText}>Login</Text>
            <TextInput style={styles.textInput}>slip</TextInput>
        </View>
    )
}