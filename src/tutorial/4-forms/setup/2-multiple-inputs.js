import React, { useState } from "react";

const ControlledInputs = () => {
    const [person,setPerson] = useState({firstName:'',email:'',age:0});
    const [people, setPeople] = useState([]);
    const handleChange = (e) => {
        console.log(e.target)
        const name = e.target.name
        const value = e.target.value
        setPerson({...person,[name]:value})
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(person.firstName && person.email && person.age){
            const newPerson = {...person,id:new Date().getTime().toString()}
            setPeople([...people,newPerson])
            setPerson({firstName:'',email:'',age:0})
        }
    };
    return (
        <>
            <article>
                <form className="form">
                    <div className="form-control">
                        <label htmlFor="firstName">Name: </label>
                        <input 
                            type="text" 
                            required
                            id="firstName" 
                            name="firstName" 
                            value={person.firstName} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">email: </label>
                        <input 
                            type="email" 
                            required
                            id="email" 
                            name="email" 
                            value={person.email} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="age">Age: </label>
                        <input 
                            type="text" 
                            required
                            id="age" 
                            name="age" 
                            value={person.age} 
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" onClick={handleSubmit}>add person</button>
                </form>
            </article>
        </>
    )
}

export default ControlledInputs;