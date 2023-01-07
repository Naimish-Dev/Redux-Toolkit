import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector,useDispatch } from 'react-redux';
import { remove } from "../Redux/CartSlice"
import { CardMedia, Stack } from '@mui/material';
import Btn from '../Helper.js/Button';
import { useState } from 'react';



    

export default function Cart() {
const [total,settotal]=useState(0)


    const cardDatas=useSelector((state)=>state.cart);

    const removeitme=useDispatch();
        const removeitemfromcard =(e)=>{
            console.log(e);
            removeitme(remove(e))
        }

    function subtotal() {    
        var totalAmount=0 
      for(var i=0; i<cardDatas.length ; i++ ){
            totalAmount += cardDatas[i].price
      }
       settotal(totalAmount);        
        }

        React.useEffect(() => {
            subtotal()
        }, [cardDatas])
        

        return (
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={5}>
                            Cart
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">img</TableCell>
                        <TableCell align="center">title</TableCell>
                        <TableCell>Desc</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        {cardDatas.map((item,index) => (
                            <TableRow key={index}>
                                <TableCell align="left">
                                    <CardMedia
                                        component="img"
                                        alt={item.title}
                                        className="img"
                                        image={item.image} /></TableCell>
                                <TableCell align="right">{item.title}</TableCell>
                                <TableCell>{item.description.slice(0)}</TableCell>
                                <TableCell align="right">{item.price}</TableCell>
                                <TableCell align="right">

                                    <Stack spacing={2}>
                                        <Btn props={"Remove"} data={item.id} btnaction={removeitemfromcard}></Btn>
                                        {/* <Box>Item 2</Box> */}
                                        {/* <Btn props={"-"} data={item.id} btnaction={decrimentitem}></Btn> */}
                                    </Stack>
                                </TableCell>
                        </TableRow>
                    ))}

                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">{total.toFixed(2)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Tax</TableCell>
                            <TableCell align="right">7% </TableCell>
                            <TableCell align="right">{(total * 7 / 100).toFixed(2)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">{(total + (total * 7 / 100)).toFixed(2)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}