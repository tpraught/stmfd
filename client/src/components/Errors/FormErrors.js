import React from 'react';

//Front-end valdiation error messages for Admin Portal pages
const FormErrors = ({formErrors}) =>(
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p key={i}>  *{formErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
    <br className="clr" />
  </div>);

export default FormErrors;