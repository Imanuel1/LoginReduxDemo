import { TextField } from '@mui/material';
import React, { useState } from 'react'

export default function InputField({ field, userDetails, handleUserChanges, validFields }) {
    const { id, name, type, maxLength, valid } = field;
    const isNotValid = () => validFields[id] || validFields["invisible"] ? 'none' : "rgba(251,72,72,23%)"

    return (
        <div>
            <TextField
                style={{background: isNotValid()}}
                id={id}
                label={name}
                value={userDetails[id]}
                type={type}
                inputProps={{maxLength: maxLength}}
                onChange={(e) => handleUserChanges(id, valid, e.target.value)}
            />
        </div>
    )
}
