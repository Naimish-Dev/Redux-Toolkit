import React from 'react'
import Button from '@mui/material/Button';


const Btn = ({ props, btnaction,data }) => {
  return (
      <Button variant="outlined" size="small" onClick={() => { btnaction(data)}}>
          {props}
      </Button>  )
}

export default Btn