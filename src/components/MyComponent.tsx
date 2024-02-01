import React, { useState } from 'react';

const MyComponent = (params:any) => {
 const {title, clickButton} =params

 const [value, setValue] = useState('')

  return (
    <div>
    <h1 data-testid={"title"}>{title}</h1>
    <input data-testid={'input-field'} value={value} onChange={(e)=> setValue(e.target.value)}  />
    <button data-testid={'button'} onClick={()=> clickButton()}/>
    </div>
  );
};

export default MyComponent;
