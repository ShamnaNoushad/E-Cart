import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, emptyCart } from '../Redux/slices/cartslice'
import { useNavigate } from 'react-router-dom'

function Cart() {
    const navigate = useNavigate()
    const cartArray = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()

    //to hold total price of a cart products
    const[total,setTotal] = useState(0)
    const getTotalPrice = ()=>{
        if(cartArray.length>0){
            setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
        }
        else{
            setTotal(0)
        }
    }
    //empty cart or order placing
    const handleCartEmpty = ()=>{
        dispatch(emptyCart())
        alert("Order Placed Successfully")
        navigate('/')
    }

    useEffect(()=>{
        getTotalPrice()
    },[cartArray])

    return (
        <div>
            <Row>
                <Col  style={{marginTop:'8%'}}>
                    <h3 className='text-center mt-4'>Cart Products</h3>
                    <table className='m-5 border border-2'>
                        <thead>
                            <tr>
                                <th className='border border-1'>Id</th>
                                <th className='border border-1'>Name</th>
                                <th className='border border-1'>Image</th>
                                <th className='border border-1'>Price</th>
                                <th className='border border-1'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartArray.length > 0 ? cartArray.map((item, index) => (
                                    <tr>
                                        <td className='border border-1'>{index + 1}</td>
                                        <td className='border border-1'>{item.title}</td>
                                        <td className='border border-1'><img src={item.thumbnail} alt="" height={'100px'} width={'100px'} /></td>
                                        <td className='border border-1'>{item.price}</td>
                                        <td className='border border-1'>
                                            <i onClick={() => dispatch(deleteFromCart(item.id))} className='fa-solid fa-trash'></i>
                                        </td>
                                    </tr>
                                )) : "empty Cart"
                            }
                        </tbody>
                    </table>
                </Col>

                <Col  style={{marginTop:'15%'}}>
                    <div className='card shadow m-5 mx-3 text-center' >
                        <h3 className='m-2 text-center'>Cart Summary</h3>
                        <h6 className='fw-bolder'>Total Cart Items : {cartArray.length}</h6>
                        <h6 className='fw-bolder'>Total Price : {total}</h6>

                        <div className='text-center'>
                            <button onClick={handleCartEmpty} className='btn btn-success m-4'>Check Out</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Cart