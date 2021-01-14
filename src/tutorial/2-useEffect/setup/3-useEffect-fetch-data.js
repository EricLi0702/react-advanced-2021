import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users"
const UseEffectSecondArgument = () =>{
    const [users,setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url)
        const users = await response.json();
        setUsers(users)
        // console.log(users)
    }
    useEffect(() => {
        getUsers();
    },[])
    return (
        <>
            <h4>Github Users</h4>
            {users.map((user)=> {
                const {id,login,avatar_url,html_url} = user
                return <li key={id}>
                    <img src={avatar_url} alt={login}/>
                    <div>
                        <h4>
                            {login}
                            <a href={html_url}></a>
                        </h4>
                    </div>
                </li>
            })}
        </>
    )

}

export default UseEffectSecondArgument;