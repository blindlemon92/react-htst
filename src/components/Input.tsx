import { forwardRef } from 'react'
import { TextField } from '@mui/material'

interface inputType {
    name: string,
    placeholder: string,
}

const Input = forwardRef((props: inputType, ref) => {
  return (
    <TextField
         variant="outlined"
         margin="normal"
         inputRef={ref}
         fullWidth
         type="text"
         {...props}

    >
    </TextField>
  )
});

export default Input