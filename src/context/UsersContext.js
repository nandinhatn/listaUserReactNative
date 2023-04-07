import React, {createContext, useReducer} from 'react'
import users from '../data/User'
import { create } from 'react-test-renderer'
const initialState= {users}

const UsersContext = createContext({})

export const UsersProvider= props =>{
    function reducer(state, action){
   
        
        if(action.type=='deleteUser'){
            const user = action.payload
            return {
                ...state,
                users: state.users.filter(u=> u.id !==user.id)
            }
            
        }
        if(action.type =='createUser'){
            const user = action.payload
            user.id = Math.random()
            return{
                ...state,
                users : [...state.users,user]
            }
        }
        if(action.type=='updateUser'){
            const updated = action.payload
            return {
                ...state,
                users : state.users.map(u=> u.id === updated.id ? updated : u)
            }
        }
        return state
    }
    const [state, dispatch]= useReducer(reducer,initialState)
    return (
        <UsersContext.Provider value={{state,dispatch
            }
        }>
            {props.children}
        </UsersContext.Provider>
    )
}


export default UsersContext