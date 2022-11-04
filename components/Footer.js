import React from "react";
import { View,Image,Text,Button,Pressable,FlatList,StyleSheet } from "react-native";
import Blake from "./AthletesScreen/Yohan_Blake";
import Neeraj from "./AthletesScreen/Neeraj_Chopra";
// export default function Footer({setAthletesData, athletesData}){
export default function Footer(props){
    // function IndivisualDetails({element}){
    //     console.log(element);
    //     }
    const toDeleteRecord= (deleteRecord)=> {
        props.setAthletesData(previousData=> previousData.filter(record=> record.id!== deleteRecord.item.id ))
       }
    return(   
<View style = {{flex:5,backgroundColor:'white',padding :2}}>
     <FlatList
      data ={props.athletesData}
//   renderItem = {(element) => <IndivisualEntry element={element} styles={styles} setAthletesData={setAthletesData} />
  renderItem = {(element) => <View style = {{flex:1,padding:4, width:'100%',height:59,flexDirection:'row',justifyContent:'space-between'}}>
  <Text style = {styles.countContainer}>{element.index + 1}</Text>
  <Image style = {{height:40,width:40,borderRadius:20}} source ={element.item.Photo}/>
  <Pressable
    // onPress= {() =>   console.log(element.item.name) }> 
 onPress={() => props.navigation.navigate(element.item.name.split(' ').join('_'))}>  
  <Text style = {[styles.countContainer,{width:150}]}>{element.item.name}</Text>
  </Pressable>
  <Text style = {[styles.countContainer,{width:70}]}>{element.item.Country}</Text>
  <Button 
      title = 'X'
      onPress={()=> {toDeleteRecord(element)}} />
  </View> }
 
     
    ItemSeparatorComponent = {() => { return (<View style = {{height: 1, width:'100%',backgroundColor:'black'}}></View> );}}
    ListHeaderComponent = {() => {return (<View style = {{width:'50%',height:69,flexDirection:'row',justifyContent:'space-between'}}>
      <Text style = {[styles.countContainer,{width:35,fontWeight:'bold'}]}>S.No.</Text>
      <Text style = {[styles.countContainer,{fontWeight:'bold'}]}>Pic.</Text>

<Text style = {[styles.countContainer,{width:150,fontWeight:'bold'}]}>Name</Text>
<Text style = {[styles.countContainer,{width:70,fontWeight:'bold'}]}>country</Text>
    </View>);}}
      />
      </View>
    );
}

const styles = StyleSheet.create({

    countContainer:{
      // fontSize:30,
      color:'blue',
      // borderWidth: 2,
      
      // borderColor: 'black',
      // borderRadius:8,
      // width: '20%',
      margin: 8,
      padding: 8,
    },
  });