import React, { useReducer, useState } from 'react';
import Modal from './Modal';
import {data} from '../../../data'

const reducer = (state,action) => {

}

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

        }else{

        }
    }
    return (
        <>
            {state.isModalOpen && <Modal modalContent={state.modalContent}></Modal>}
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
                        </div>
                    )
                })
            }
        </>
    )
}

export default Index;