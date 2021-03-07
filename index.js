import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class app extends React.Component{
    render() {
        return (
            <View style = {styles.container}> 

            <View style = {styles.top}>

                    <View style = {styles.profileimage}></View>
            </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex : 1
    },
    top:{
        height: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#98d2c1'
    },
    profileimage:{
        width : 140,
        height : 140,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: '#fff',
        backgroundColor: '#eee'
    }
});