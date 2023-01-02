
import React, {useState, useEffect} from "react";
import axios from 'axios'

import { Button, View, Text , StyleSheet ,TextInput} from "react-native";

export default function AboutScreen({ navigation }) {
   const [insert, setInsert] = useState();
  const [data, setData] = useState([]);

  const fetch = () => {
    console.log('sami')
    axios.get('http://127.0.0.1:8000/stud/list-create')
    .then((res) => setData(res.data))
    .catch(err => console.log(err))
  }
  useEffect(() => {
    fetch()
  },[])

  const des = (id) => {
    axios.delete(`http://127.0.0.1:8000/stud/update-delete/${id}`)
    fetch()
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center",backgroundColor: '#61dafb' }}>
      <Text style={{marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"}}>Student Screen</Text>

        

    <View style={{justifyContent: "space-evenly",  flexBasis: 100, flexBasis: 100,
      }}>
    <Button
        title="Go to Teacher"
        onPress={() => navigation.navigate("Teacher")}
      />
      <Button
        title="Go to Employee"
        onPress={() => navigation.navigate("Employee")}
      /></View>
      {data.map((item) => { 
        return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
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
  }
})