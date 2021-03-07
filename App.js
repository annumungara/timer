import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Media from 'react-media';


export default function App() {
    const [timer,setTimer] = useState(0);
  return (
    <View style = {styles.container}> 

        <View style = {styles.top}>

            <View style = {styles.TimerSpace}>

                <TouchableOpacity 
                    style={styles.buttonHover}
                    onPress={() => { setTimer(timer + 1) }}></TouchableOpacity>
                <TouchableOpacity 
                    style={styles.Hover}>
                    <AntDesign name="pause" size={8} color="#0cbdf4" style={styles.iconStyle}/>
                </TouchableOpacity>
                <Text style={styles.text}>{timer}:</Text>
                <Text style={styles.text}>{timer}:</Text>
                <Text style={styles.text}>{timer}</Text>
            </View>

        </View>

    </View>

  );
}


const styles = StyleSheet.create({
  container:{
      flex : 1
  },
  top:{
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#98d2c1'
  },
  TimerSpace:{
      width : '50%',
      height : '50%',
      borderWidth: 5,
      justifyContent: 'center',
      flexDirection: "row",
      alignItems: 'center',
      borderColor: '#fff',
      backgroundColor: 'black'
  },
  buttonHover: {
      height:'5%',
      width:'5%',
      marginRight : '10%',
      backgroundColor: '#0cbdf4'
    },
  Hover: {
       width : '5%',
       height : '5%',
       borderRadius: '100%',
       borderWidth: 3,
       marginRight : '10%',
       borderColor: '#0cbdf4',
       alignContent: 'center',
       justifyContent: "center",
       backgroundColor: 'black'
      },
  iconStyle:{
      alignSelf:"center"
  },
    text:{
       color:"white",
       textAlign:"center",
       fontSize:15,
       fontWeight:"bold",
       backgroundColor: '#0cbdf4'
    }
});
