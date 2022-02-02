import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './MultilineTextFields.css';

export default function MultilineTextFields({ data, setData, value }) {
  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Subject"
          multiline
          rows={4}
          name="subject"
          onChange={(e) => handleChange(e)}
          defaultValue={value}
        />
      </div>
    </Box>
  );
}
