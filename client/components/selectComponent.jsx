import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const SelectComponent = (props) => {
    const options = props.items ? props.items : [];
    const [value, setValue] = useState(0);

    const onChange = (val) => {
        const value = val.target.value;
        setValue(value);
        props.onChange(value);
    };

    return(
      <FormControl>
          <InputLabel htmlFor={`${props.name}-select`}>{props.name}</InputLabel>
          <Select
              inputProps={{name: props.name, id: `${props.name}-select`}}
              value={value}
              onChange={onChange}
          >
              <MenuItem value=""><em>None</em></MenuItem>
              {
                  options.map(op => {
                    return <MenuItem key={`${op.name}-key`} value={op.id}>{op.name}</MenuItem>;
                  })
              }
          </Select>
      </FormControl>
    );
};

export default SelectComponent;
