import { useState,} from 'react';
import { View,Button } from 'react-native';
import {athletes} from './components/data';
import Header from './components/Header';
import Footer from './components/Footer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Neeraj from './components/AthletesScreen/Neeraj_Chopra';
import Blake from './components/AthletesScreen/Yohan_Blake';

function HomeScreen (props){
  const [athletesData,setAthletesData] = useState(athletes);
  
  // const [nameInput,setNameInput] = useState('');
  // const [countryInput,setCountryInput] = useState('');
  // const[idd,setIdd]=useState(6);

 return (
 <View style ={{flex:1}}>
          <Header 
          //   countryInput={countryInput} setCountryInput={setCountryInput} nameInput={nameInput} setNameInput={setNameInput}
          // setAthletesData={setAthletesData}  setIdd={setIdd} idd={idd} athletesData={athletesData} />
          setAthletesData={setAthletesData} athletesData={athletesData} />
          
      <Footer  setAthletesData={setAthletesData} navigation={props.navigation} athletesData = {athletesData} />
    </View>
  );
}
const Stack = createNativeStackNavigator();



export default function App() {
  return (
 <NavigationContainer>
  <Stack.Navigator initialRouteName='home' >
  <Stack.Screen name = "home" component= {HomeScreen} options = {{title: 'Home'}} />
  <Stack.Screen name = "Neeraj_Chopra" component= {Neeraj}  />
  <Stack.Screen name = "Yohan_Blake" component= {Blake}  />
  </Stack.Navigator>
</NavigationContainer>
  );
}

