import React, { useEffect, useState } from "react";
import  {useFetch} from "./2-useFetch"

const url = 'https://api.github.com/users';

const Example = () => {
    const {loading,products} = useFetch(url);
    console.log(loading,products)
    
     return (
            <>
                {loading ? 'loading...' : 'data'}
            </>
        )
}

export default Example;