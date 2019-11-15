import React from 'react';
import './style.scss';

const textInput  = ({placeholder}) => {
 return (
   <div>
     <input 
       type='text' 
       maxLength='30' 
       placeholder={placeholder}
       onChange={()=>{}}
       className='text-input'
      />
   </div>
 )
};

export default textInput;