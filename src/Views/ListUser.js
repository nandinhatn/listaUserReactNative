import React, {useState, useContext} from 'react'
import {View, Text,FlatList, Alert} from 'react-native'
import User from '../data/User'
import { ListItem, Avatar } from '@rneui/base'
import FormUser from './FormUser'
import UsersContext from '../context/UsersContext'


export default props =>{
  const {state,dispatch} = useContext(UsersContext)

/*  
    Para uma url externa :
const [poke, setPoke]= useState({})
  const pokemons = fetch('https://pokeapi.co/api/v2/pokemon')
  .then((response)=> response.json()).then((json)=> 
  setPoke(json.results)) */
 const deleteUser =(user)=>{
    Alert.alert('Excluir usuário', `Deseja excluir o usuário ${user.name}`,[
        {
            text: 'Sim',
            onPress(){
               dispatch({
                type:'deleteUser',
                payload : user,
               })
            }
        },
        {
            text: 'Não'
        }
    ])

 }
     
    const getUser =({item:user})=>{
        
       
        return(
            <View>

<ListItem
            bottomDivider
            onPress={() => props.navigation.navigate('ListForm', user)}>
            <Avatar source={{ uri: user.avatarUrl }} size={40}/>
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron
              name="edit"
              size={25}
              color="orange"
              onPress={() => props.navigation.navigate('ListForm')}
            />
             <ListItem.Chevron
              name="delete"
              size={25}
              color="red"
              onPress={() => deleteUser(user)}
            />
          </ListItem>

                </View>
        )

    }
    
    return(
        <View>
          <FlatList
          data={state.users}
          renderItem={getUser}
          keyExtractor={ user=> user.id.toString()}
          >

          </FlatList>

                </View>
    )
    }