import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CurrencyButton = (props:Currency) => {
  return (
    <View style={styles.buttonContainer}>
     
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
      
    </View>
  )
}

export default CurrencyButton

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
      
        borderRadius: 6,
        backgroundColor: '#f5dedc',
        paddingHorizontal: 15,
        width: 100,
        margin: 7,
        padding: 5
    },
    flag:{
        fontSize:18,
        color:"#000000",
        marginBottom: 4,
    },
    country:{
        fontSize:11,
        fontWeight: 'bold',
        color: "#2d3436",

        
    },
  
})