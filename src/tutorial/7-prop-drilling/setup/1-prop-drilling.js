import React, { useState } from "react";
import {data} from "../../../data"

const PropDrilling = () => {
    const [people, setPeople] = useState(data);
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id)
        })
    }
    return (
        <section>
            <h3>prop drilling</h3>
            <List people={people} removePerson={removePerson}></List>
        </section>
    )
}

const List = ({people,removePerson}) => {
    return (
        <>
            {people.map((person)=> {
                return <SinglePerson key={person.id} {...person} removePerson={removePerson}></SinglePerson>
            })}
        </>
    )
}

const SinglePerson = ({id,name,removePerson}) => {
    return (
        <div className="item">
            <h4>single item</h4>
            <h4>{id}</h4>
            <h4>{name}</h4>
            <button onClick={()=> removePerson(id)}>remove</button>
        </div>
    )
}

export default PropDrilling;