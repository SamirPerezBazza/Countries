import React from 'react';

const Bar = ({func})=>{
    const handleSearch=(e)=>{
        func(e.target.value);
    }
    return(
        <>
            <div className="bar-container">
                <i class="fas fa-search"></i>
                <input className="bar-input" onChange={handleSearch}></input>
            </div>
        </>
    );

}
export default Bar;