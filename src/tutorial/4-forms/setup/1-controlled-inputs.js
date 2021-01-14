import React, { useState } from "react";

const ControlledInputs = () => {
    const [firstName,setFirstName] = useState('');
    const [email,setEmail] = useState('')
    const [people, setPeople] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstName && email){
            console.log('submit the form');
            const person = {
                id:new Date().getTime().toString(), 
                firstName:firstName,
                email:email
            };
            console.log(person)
            setPeople((people) => {
                return [...people,person];
            })
            setFirstName('');
            setEmail('');
        }else{
            console.log('empty values');
        }
    }
    return (
        <>
            <article>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="firstName">Name: </label>
                        <input 
                            type="text" 
                            required
                            id="firstName" 
                            name="firstName" 
                            value={firstName} 
                            onChange={(e)=> setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">email: </label>
                        <input 
                            type="email" 
                            required
                            id="email" 
                            name="email" 
                            value={email} 
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <button type="submit">add person</button>
                </form>
                {
                    people.map((person,index)=> {
                        const {id,firstName,email} = person
                        return (
                            <div key={id} className="item">
                                <h4>{id}</h4>
                                <h4>{firstName}</h4>
                                <p>{email}</p>
                            </div>
                        )
                    })
                }
            </article>
        </>
    )
}

export default ControlledInputs;