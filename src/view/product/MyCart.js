import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Container, Button } from '@mui/material';
import Navbar from '../../components/Navbar';

const MyCart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div>
        <Navbar/>
      <h1>My Cart</h1>
      <TableContainer component={Container} sx={{backgroundColor:"white"}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>${item.price}.00</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>${item.price * item.quantity}.00</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={4} align="right">Total:</TableCell>
              <TableCell>${totalPrice}.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
        <Button variant="contained" onClick={() => handleCheckout()}>Checkout</Button>
    </div>
  );
};

export default MyCart;
