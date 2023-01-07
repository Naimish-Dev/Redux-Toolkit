import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React,{useState,useEffect} from 'react'
import Btn from '../Helper.js/Button';
import {add} from "../Redux/CartSlice"
import { useDispatch } from 'react-redux';
import { fetchProducts } from "../Redux/ProductSlice"
import { useSelector } from 'react-redux';
import { Statuses } from '../Redux/ProductSlice';
const Product = () => {
    const getState =useDispatch()

    const { data, status } = useSelector((state) => state.product)

// const [Product, setProducts] = useState([]);
// const [Isloading, setIsloading] = useState(false);

    const addtocard=(e)=>{
        getState(add(e))
    }

// const FatchProduct=async()=>{

//     try{
//    const RowData = await fetch("https://fakestoreapi.com/products");
// const RealData = await RowData.json()    
//     }catch(e){  throw Error(e)}


// }

useEffect(()=>{
    // FatchProduct()
    getState(fetchProducts())

},[])

    if (status === Statuses.LOADING){
        return <div style={{width:"100vw" ,height:"100vh",display:"flex",justifyContent:"center" ,alignItems:"center"}}>loading.... </div>
    }
    if (status === Statuses.ERROR){
        return <div style={{width:"100vw" ,height:"100vh",display:"flex",justifyContent:"center" ,alignItems:"center"}}>Somthin go Wrang....! </div>
    }

  return (
    <div className='All_Product_Align'>

    {
              data.map((val,index)=>{
        return <div key={index}>
            <Card className="Product_Card">
                <CardMedia
                    component="img"
                    alt={val.title}
                    className="img"
                    image={val.image}
                />
                <CardContent sx={{p:"1" ,m:"0"}}>
                    <h5 className="title">
                         {val.title.slice(0,20)}
                    </h5>
                    <h5 className="price">
                        ₹{val.price}
                    </h5>
                    <p  color="text.secondary">
                        {val.description.slice(0,50)}...
                    </p>
                </CardContent>
                <CardActions>
                    <Btn props={"Add to cart"} data={val} btnaction={addtocard}/>
                </CardActions>
            </Card>
        </div>
    })
    }
    </div>
  )
}

export default Product