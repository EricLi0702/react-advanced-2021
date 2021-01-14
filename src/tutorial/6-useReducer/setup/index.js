import React, { useReducer, useState } from 'react';
import Modal from './Modal';
import {data} from '../../../data'
import {reducer} from './reducer'



const defaultState = {
    people:[],
    isModalOpen:false,
    modalContent:''
}

const Index = () => {
    const [name,setName] = useState('');
    const [state, dispatch] = useReducer(reducer,defaultState)
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name){
            const newItem = {id:new Date().getTime().toString(),name}
            dispatch({type:'ADD_ITEM',payload:newItem})
            setName('');
        }else{
            dispatch({type:'NO_VALUE'})
        }
    }
    const closeModal = () => {
        dispatch({type:"CLOSE_MODAL"})
    }
    return (
        <>
            {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}></Modal>}
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button type="submit">submit</button>
            </form>
            {
                state.people?.map((person)=>{
                    const {id,name} = person
                    return (
                        <div key={id}>
                            <h1>{name}</h1>
                            <button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:id})}>remove</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Index;