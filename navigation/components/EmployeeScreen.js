import React, {useState, useEffect} from "react";
import axios from 'axios'
import { Button, View, Text, StyleSheet, TextInput } from "react-native";

export default function ContactScreen({ navigation }) {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  const [insert, setInsert] = useState();
  

  const fetch = () => {
    console.log('sami')
    axios.get('http://127.0.0.1:8000/employee/list-create')
    .then((res) => setData(res.data))
    .catch(err => console.log(err))
  }
  const post = () => {
    console.log('sami')
    axios.post('http://127.0.0.1:8000/employee/list-create',{
      fullName:insert
    })
    .then((res) => setData(res.data))
    .catch(err => console.log(err))
  }
  useEffect(() => {
    fetch()
  },[])

  const des = (id) => {
    axios.delete(`http://127.0.0.1:8000/employee/update-delete/${id}`)
    fetch()
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#61dafb' }}>
      <Text style={{marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"}}>Employee Screen</Text>
    
    <View>
      <Text> Enter Text:</Text>
      <Button title="Add" onPress={post} />
      <TextInput style={styles.input} value={insert} on
        onChangeText={(newValue)=> setInsert(newValue)} />
  </View>

    <View style={{justifyContent: "space-evenly",  flexBasis: 100, flexBasis: 100,
      }}>
    <Button 
        title="Go to Student"
        onPress={() => navigation.navigate("Student")}
      />
      <Button
        title="Go to Teacher"
        onPress={() => navigation.navigate("Teacher")}
      /></View>
      {data.map((item) => { 
        return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.texts}>Id: {item.id}</Text>
            <Text style={styles.texts}>name: {item.fullName}</Text>
            <Button 
            title="Delete"
             onPress={() => des(item.id)}
            />
          </View>
        )
      })}
      
    </View>
  );
 
}
 const styles = StyleSheet.create({
    texts:{
      marginTop: 16,
      // paddingVertical: 8,
      // borderWidth: 2,
      borderColor: "#20232a",
      // borderRadius: 6,
      // backgroundColor: "#61dafb",
      // color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    },
    input:{
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
  })