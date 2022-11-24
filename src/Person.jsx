import React from 'react';

   const Person = ( props) => {
    console.log(props);
        return(
            <div>
            <p style ={{fontWeight:'bold'}}>I am {props.name} and I am {props.age} years Old</p>
            <p>{props.children}</p>
            </div>  
        );
};
export default Person;


