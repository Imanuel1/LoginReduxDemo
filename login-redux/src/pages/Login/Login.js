import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import InputField from '../../components/InputField'
import { submitUserAsync } from '../../features/user/UserSlice'
import { userInitValue, validInitValue } from '../../utils/constant'
import { fields } from '../../utils/validation'
import './Login.css'

export default function Login() {
  const [userDetails, setUserDetails] = useState(userInitValue)
  const [validFields, setValidFields] = useState(validInitValue)
  const dispatch = useDispatch();

  const { confirm, ...userData } = userDetails;


  const handleClick = (e) => {
    e.preventDefault();
    if (!Object.values(validFields).includes(false)) {
      dispatch(submitUserAsync(userData));
      setUserDetails({...userInitValue})
      setValidFields({...validInitValue})
    } else {
      validFields["invisible"] = false;
      setValidFields({...validFields})
      console.log("validation error!");
    }
  }

  console.log("userDetails: ", userDetails)
  console.log("validFields: ", validFields)
  const handleUserChanges = (id, valid, value) => {
    validFields[id] = id === "confirm" ? valid(value) && value === userDetails["password"] : valid(value);
    userDetails[id] = value;
    setUserDetails({ ...userDetails })
    setValidFields({ ...validFields })
  }

  return (
    <div className="p-login">
      {fields.map(field =>
        <InputField
          key={field.id}
          field={field}
          userDetails={userDetails}
          handleUserChanges={handleUserChanges}
          validFields={validFields} />)}
      <Button variant="contained" onClick={handleClick}>Submit</Button>
    </div>
  )
}
