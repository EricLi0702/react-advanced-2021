import React, { useState, useContext } from "react";
import {data} from "../../../data"

const PersonContext = React.createContext();

const ContextApi = () => {
    const [people, setPeople] = useState(data);
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id)
        })
    }
    return (
        <PersonContext.Provider value={{removePerson,people}}>
            <h3>Context Api / user</h3>
            <List></List>
        </PersonContext.Provider>
    )
}

const List = () => {
    const mainData = useContext(PersonContext)
    console.log(mainData)
    return (
        <>
            {mainData.people.map((person)=> {
                return <SinglePerson key={person.id} {...person}></SinglePerson>
            })}
        </>
    )
}

const SinglePerson = ({id,name}) => {
    const {removePerson} = useContext(PersonContext);
    return (
        <div className="item">
            <h4>single item</h4>
            <h4>{id}</h4>
            <h4>{name}</h4>
            <button onClick={()=> removePerson(id)}>remove</button>
        </div>
    )
}

export default ContextApi;