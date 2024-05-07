import { Badge, Button, Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Product.scss";
import Navbar from "../../components/Navbar";

const Products = () => {
  const [totalQuantity, setTotalQuantity] = useState(0); 
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    setTotalQuantity(totalQuantity);
  }, [cart]);

  const SAMPLE_PRODUCTS = [
    {
      id: "p1",
      price: 6,
      title: "Man Perfume",
      description: "Denver - Hamilton",
    },
    {
      id: "p2",
      price: 5,
      title: "Man Deo",
      description: "Navia - 24 hours refreshment",
    },
  ];

  const handleCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const addItems = (product) => {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };
  const removeItems = (product) => {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        const updatedQuantity = item.quantity > 1 ? item.quantity - 1 : 0;
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    }).filter((item) => item.quantity !== 0);
    setCart(updatedCart);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  })

  return (
    <>
      <Navbar totalQuantity={totalQuantity} />
    <div className="products-container">
      <div className="cart">
      <div className="added-products">
        {cart.map((item) => (
          <Card key={item.id} className="product-card added-product">
            <div className="product-info2">
              <div className="title-container">
                <Typography variant="h6" component="div">
                  {item.title}
                </Typography>${item.price * item.quantity}.00<i> (${item.price}.00 / item)</i>
              </div>
              <Typography variant="body2">
                {item.description}
              </Typography>
              <div className="quantity-controls">
                <Button variant="outlined" onClick={() => removeItems(item)}>
                  -
                </Button>
                <Button variant="outlined" onClick={() => addItems(item)}>
                  +
                </Button>
              </div>
              <Typography component="div">
                x {item.quantity}
              </Typography>
            </div>
          </Card>
        ))}
      </div>
      </div>
      {SAMPLE_PRODUCTS.map((product) => (
        <Card key={product.id} className="product-card">
          <div className="product-info">
            <div className="title-container">
              <Typography variant="h6" component="div">
                {product.title}
              </Typography>
              <Badge
                badgeContent={`$${product.price}.00`}
                classes={{ badge: "custom-badge" }}
              />
            </div>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <div className="button-container">
              <Button variant="outlined" onClick={() => handleCart(product)}>
                Add to cart
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
    </>
  );
};

export default Products;
