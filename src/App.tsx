/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  FlatList,
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CurrencyButton from './components/CurrencyButton';
import { currencyByRupee } from './constants';
import Snackbar from 'react-native-snackbar';
type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): React.JSX.Element {
const [inputValue, setInputValue] = useState('')
const [resultValue, setResultValue] = useState('')
const [targetCurrency, setTargetCurrency] = useState('')


const convert = (targetValue:Currency) => {

if(!inputValue){
  Snackbar.show({
    text: 'Amount is required',
    duration: Snackbar.LENGTH_LONG,
    textColor: 'red',
    backgroundColor: 'grey'
  });
}
const inputAmount = parseFloat(inputValue)
if(!isNaN(inputAmount)){
const converted = inputAmount * targetValue.value
const result = `${targetValue.symbol} ${converted.toFixed(2)}`
setResultValue(result)
setTargetCurrency(targetValue.name)
}else{
  Snackbar.show({
    text:'Please enter a valid number',
    duration: Snackbar.LENGTH_LONG,
    textColor: 'red',
    backgroundColor: 'grey'
  })
}
}



  return (
    <>
    <StatusBar />
    <View style={styles.container}>
      
      <View style={styles.input}>
     <Text style={styles.heading}>Currency Converter</Text>
     
      <View>
     <Text style={styles.currency}>PKR </Text>
     <TextInput 
     style={styles.textInput}
     placeholder='Enter amount in PKR'
      keyboardType='numeric'
      value={inputValue}
      maxLength={14}
      onChangeText={setInputValue}

      
     ></TextInput>
     </View>
     {resultValue && (
            <Text style={styles.resultTxt} >
              {resultValue}
            </Text>
          )}
</View>
     
    <View style={styles.listContainer}>
      <FlatList
      numColumns={3}
      data={currencyByRupee}
      keyExtractor={(item) => (item.name)}
      renderItem={({item}) => (
        <Pressable style={[styles.button, targetCurrency === item.name && styles.selected]}
        
        onPress={() =>convert(item)}>
          <CurrencyButton {...item}/>
          </Pressable>
      )}
       /> 
    </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    paddingTop: 80,
    paddingHorizontal: 24,
    backgroundColor: '#8fb5db'
    
  },
  input:{
   
   marginBottom:15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currency: {
  textAlign: 'center'
    
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
button:{
 

  
},
selected:{
  backgroundColor: '#abdb8f'
},
listContainer:{
  
  justifyContent: 'space-evenly',
  alignItems: 'center'
},
resultTxt:{
  fontSize: 20,
  fontWeight: 'bold'
}
});

export default App;
