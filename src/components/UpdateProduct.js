import React ,{useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom'

const UpdateProduct = () => {

   const [name, setName] = useState('');
   const [price, setPrice] = useState('');
   const [category, setCategory] = useState('');
   const [company, setCompany] = useState('');
   const params = useParams();
   const Navigate = useNavigate();

// ===============this api auto fills the data on update page with the data of product which we want to update=============//
   useEffect(()=>{
    getProductDetails();
   },[])


   const getProductDetails = async ()=>{
    // console.log(params);
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
   }
// ================================================================================================================//


// ============== api integration to upadte the prdt ================================//
   const UpdateProductfunc=  async()=>{
      //  console.log(name,price,category,company)
       let result =  await fetch(`http://localhost:5000/product/${params.id}`,{
         method :'Put',
         body:JSON.stringify({name, price, category, company}),
         headers:{
            'Content-Type':"application/json"
         }
       });
       result = await result.json();
       Navigate("/")
   }

  return (
    <div className='prd'>
    <h1>Update Product</h1>

    <input className='inputBox' type="text" placeholder='Enter Product name'
     value={name}  onChange={(e)=>{setName(e.target.value)}} />

    <input className='inputBox' type="text" placeholder='Enter Product price'
     value={price} onChange={(e)=>{setPrice(e.target.value)}} />

    <input className='inputBox' type="text" placeholder='Enter Product category'
     value={category} onChange={(e)=>{setCategory(e.target.value)}} />

    <input className='inputBox' type="text" placeholder='Enter Product company'
     value={company} onChange={(e)=>{setCompany(e.target.value)}} />
    
    <button onClick={UpdateProductfunc} className='appbutton'>Update Product</button>
    </div>
  )
}


export default UpdateProduct;