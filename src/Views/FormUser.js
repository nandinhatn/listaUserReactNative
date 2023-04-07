import react, {useState, useContext} from 'react'
import {View, Text, Button, TextInput, StyleSheet} from 'react-native'
import UsersContext from '../context/UsersContext'



export default ({route, navigation})=>{
    const {dispatch}= useContext(UsersContext)
    //console.warn(Object.keys(route.params))
    const [user, setUser] = useState(route.params ? route.params : {})
    return (
        <View style={style.view}>
           {/*  <Button title='aperte' onPress={()=> navigation.goBack()}/> */}
           <Text>Nome:</Text>
           <TextInput style={style.input} placeholder='Informe o Nome' onChangeText={name=> setUser({...user, name})}   name="user" value={user.name}/>
            <Text> Email:   </Text>
            <TextInput style={style.input} name="email" onChangeText={email => setUser({...user, email})} value={user.email}/>
            <Text>Avatar</Text>
            <TextInput style={style.input} name="avatar" onChangeText={avatar=> setUser({...user, avatar})} value={user.avatarUrl}/>
            <Button title="Salvar" onPress={()=>{ dispatch({
                type: user.id? 'updateUser' : 'createUser',
                payload : user,
            })
            navigation.goBack()
            }}/>
        </View>
    )
}

const style = StyleSheet.create({
    view:{
        flex:1,
        padding: 20,
        gap: 20,

    },
    input:{
       
        borderWidth: 1,
    
    }
})

