//UI Component
import React from 'react';

const Ninjas = ({ninjas}) => { 
    const ninjaList = ninjas.map(ninja => {
    if (ninja.age > 40) {
        return(
            <div className="ninja" key={ninja.id}>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div> 
            </div>
        ) //it will return one set of jsx template of each in individual ninja
    } else {
        return null
    } 
    })   
    return(
        <div className="ninjaList" >
            {ninjaList}
        </div>
    )
}
export default Ninjas