import { useState } from "react";
import { View,Text,TextInput,Button,Alert,StyleSheet } from "react-native";
import AddToBE from "./AthletesScreen/AddtToBE";
// export default function Header({countryInput,setCountryInput,nameInput,setNameInput,setAthletesData,setIdd,idd,athletesData}){
  export default function Header({setAthletesData,athletesData}){
  const [nameInput,setNameInput] = useState('');
  const [countryInput,setCountryInput] = useState('');
  const[idd,setIdd]=useState(6);
  

  function nameInputHandler(prop){
    setNameInput(prop);
   }
   function countryInputHandler(enteredText){
 setCountryInput(enteredText);
   }
   function resetInput(enteredText){
    setNameInput('');
    setCountryInput('');
  }
  function dataAddHandler(){
   if(nameInput.length>0){
    setIdd((preId)=> preId+1);
    const newData = {id:idd,
      name: nameInput,
      Country: countryInput,
      Photo: require('../assets/Images/No_image.jpg'),
    };
  setAthletesData((preData)=>[...preData,newData]);
  AddToBE(newData);
  
  resetInput();
}
else {
  Alert.alert('enter name','name can not be empty',[{text:'Okay'}] )
}
  }
    return( <View style = {styles.heading}>
        <Text style = {styles.headingText}>ATHLETS</Text> 
        <View style ={{marginTop:5,flexDirection:'row',alignItems:'center' , justifyContent:'space-around' }}>
        <TextInput style= {{width:100,padding:5,margin :10,borderWidth:1,borderRadius:10}}
        value = {nameInput}
        placeholder='Enter Name'
        onChangeText={nameInputHandler}
        />
        <TextInput style= {{width:100,padding:5,margin :10,borderWidth:1,borderRadius:10}} 
        value={countryInput}
        placeholder='Enter Country'
        onChangeText={countryInputHandler}
        />
        </View>
        <View style = {{ widhth:'70%',flexDirection:'row', alignItems:'space-between', justifyContent:'space-between'}}>
        <View style = {{marginTop:10,margin :10}}>
        <Button
      title = 'reset'
      onPress={resetInput} />
      </View>
      <View style = {{marginTop:10,margin :10}}>
      <Button 
      title = 'submit'
      onPress={dataAddHandler} />
      </View>
      </View>
        </View>
  );
  }

  const styles = StyleSheet.create({
      heading:{ flex:2,
      backgroundColor: '#B4C259',
  
      height: 200,
      alignItems: 'center',
      justifyContent: 'center',
      // marginTop:25,
     
    },
    headingText: {
      marginTop:12,
      fontSize:25,
      fontWeight:'bold',
    },
  });