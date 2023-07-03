import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import EncryptedStorage from 'react-native-encrypted-storage';
import { useNavigation } from '@react-navigation/native';

const AddNotes = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('')
  const navigation = useNavigation();

  const saveNote = async () => {
    let temp = [];
    temp.push({title:title, desc: desc});
    await EncryptedStorage.setItem('notes', JSON.stringify({data: temp}))
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <TextInput placeholder='Enter Note Title' placeholderTextColor={'#000'} style={styles.input} value={title} onChangeText={txt => setTitle(txt)}/>
      <TextInput placeholder='Enter Note Desc' placeholderTextColor={'#000'} style={styles.input} value={desc} onChangeText={txt => setDesc(txt)}/>
      <TouchableOpacity style={styles.addbtn} onPress={() => {
        saveNote()
      }}>
        <Text style={styles.btntxt}>Add Notes</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddNotes;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    color: '#000',
    width: '90%',
    height: 55,
    borderWidth: 0.5,
    borderRadius: 15,
    alignSelf: 'center',
    paddingLeft: 20,
    marginTop: 30
  },
  addbtn:{
    width: '90%',
    height: 55,
    borderRadius: 15,
    marginTop: 50,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btntxt:{
    color: '#fff',
    fontSize: 20
  }
})