import React from 'react'
import {SafeAreaView, View, Text}from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListUser from './Views/ListUser';
import {Button} from '@rneui/base'
import FormUser from './Views/FormUser';
import { Icon } from "@rneui/themed";
import { UsersProvider } from './context/UsersContext';



const Stack = createStackNavigator()
export default props =>{
    
    return(
        <UsersProvider>
        <SafeAreaView style={{
            flex:1
        }}>
            <NavigationContainer>
                
            <Stack.Navigator 
            initialRouteName='ListUser'
            screenOptions={{
                 headerTintColor:'white',
                 headerStyle:{ backgroundColor:'tomato'}           
            }}>
        <Stack.Screen name="ListUser" component={ListUser} options={({navigation})=>{
            
            return{
                title:'Lista de Usuários',
                headerRight: ()=>(

                    <Button onPress={()=> navigation.navigate("ListForm")} type='clear' name="button"  icon={<Icon name="add" size={25} color="#FFF" />}/>
                )
                
            }
        }}/>

        <Stack.Screen name="ListForm" component={FormUser}/>
            </Stack.Navigator>
                </NavigationContainer>
        </SafeAreaView></UsersProvider>
    )
}