import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = (props) => {
    const onChange = val => {
        props.onChange(val.currentTarget.value);
    };

    return (
        <TextField
            label={props.label}
            onChange={onChange}
        />
    );
};

export default Input;
