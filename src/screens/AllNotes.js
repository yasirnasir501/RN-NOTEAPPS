import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AllNotes = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addBtn} onPress={() => {
        navigation.navigate('AddNotes')
      }}>
        <Text style={styles.btntxt}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AllNotes

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  addBtn:{
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#000',
    position:'absolute',
    right: 20,
    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btntxt:{
    color: '#fff',
    fontSize: 30
  }
})