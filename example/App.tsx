/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   ScrollView,
   StyleSheet,
   Text,
   View,
 } from 'react-native';
 import Dropdown from 'rn-simple-dropdown';
 const DATA = [
   {key: '1', label: 1},
   {key: '2', label: 2},
   {key: '3', label: 3},
   {key: '4', label: 5},
   {key: '5', label: 6},
   {key: '6', label: 7},
   {key: '7', label: 8},
   {key: '8', label: 9},
   {key: '9', label: 10},
   {key: '10', label: 11},
   {key: '11', label: 12},
 ];
 
 const App = () => {
   
   return(
     <ScrollView>
     <View style={styles.container}>
       <View style={styles.above} />
       <Dropdown data={DATA} placeholder="placeholder" maxHeightList={200} />
       <Text>dasdsa</Text>
       <Text>dasdsa</Text>
       <Text>dasdsa</Text>
       <Text>dasdsa</Text>
       <Text>dasdsa</Text>
       <Text>dasdsa</Text>
       <Text>dasdsa</Text>
       <Text>dasdsa</Text>
       <Text>dasdsa</Text>
       <Text>dasdsa</Text>
       <Text>dasdsa</Text>
       <Text>dasdsa</Text>
       <Text>dasdsa</Text>
       <Text>dasdsa</Text>
       <Text>dasdsa</Text>
       <Text>dasdsa</Text>
       <Text>dasdsa</Text>
     </View>
   </ScrollView>
   )
 };
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent:'center',
     alignItems:'center'
   },
   above: {
     height: 100,
   },
 });
 
 export default App;
 