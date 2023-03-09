import React from 'react';
import { Button } from '@mui/material';



const ButtonList = ( props ) => {
  return (
    <Button sx={{
        fontFamily:'arial',
        fontSize:'16px',
        marginTop:'10px',
        borderRadius:'20px',
        color:'black',
        backgroundColor:'inherit',
        textTransform:'none',
        '&:hover' : {backgroundColor:'inherit',} }}
    > {props.text} </Button>
  );
}
export default ButtonList

