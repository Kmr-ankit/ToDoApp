import React from "react";
import { View,Image,Text,Button,Pressable } from "react-native";

function IndivisualDetails({element}){
console.log(element.iten.name);
}
export default function IndivisualEntry({element, styles,setAthletesData}){
   
    const toDeleteRecord= (deleteRecord)=> {
        setAthletesData(previousData=> previousData.filter(record=> record.id!== deleteRecord.item.id ))
       }

    return (<View style = {{flex:1,padding:4, width:'100%',height:59,flexDirection:'row',justifyContent:'space-between'}}>
    <Text style = {styles.countContainer}>{element.index + 1}</Text>
    <Image style = {{height:40,width:40,borderRadius:20}} source ={element.item.Photo}/>
    <Pressable onPress={IndivisualDetails} >
    <Text style = {[styles.countContainer,{width:150}]}>{element.item.name}</Text>
    </Pressable>
    <Text style = {[styles.countContainer,{width:70}]}>{element.item.Country}</Text>
    <Button 
        title = 'X'
        onPress={()=> {toDeleteRecord(element)}} />
    </View>
 

    );
}