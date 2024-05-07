import React from "react";
import { useForm } from 'react-hook-form';
import { Container, Typography, TextField, Button, Grid } from "@mui/material";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { handleSubmit, register, formState: { errors } } = useForm(); // Destructure register and errors from useForm
    const navigate = useNavigate();

    const toaststyle = {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false
    }

    const users = [
        {
            user_id: 1,
            first_name: "andrew",
            last_name: "user1",
            email: "andrew@test.com",
            password: "andrew@123"
        },
        {
            user_id: 2,
            first_name: "mike",
            last_name: "user2",
            email: "mike@test.com",
            password: "mike@123"
        },
        {
            user_id: 3,
            first_name: "jeet",
            last_name: "user3",
            email: "jeet@test.com",
            password: "jeet@123"
        }
    ];

    const onSubmit = (data) => {
        const loginUser = users.find(user => user.email === data.email && user.password === data.password)
        if (loginUser) {
            console.log("Login Successfully", loginUser);
            localStorage.setItem("user", JSON.stringify(loginUser));
            navigate('/products')
        } else {
            toast.error("Invalid email or password", {
                ...toaststyle,
            });
        }
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 8 , backgroundColor: 'white', padding: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Login
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            type="email"
                            placeholder="Enter email"
                            {...register("email", { required: "Email is required" })} 
                            error={Boolean(errors.email)} 
                            helperText={errors.email ? errors.email.message : ''} 
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Password"
                            variant="outlined"
                            type="password"
                            placeholder="Enter password"
                            {...register("password", { required: "Password is required" })} // Register password input with validation
                            error={Boolean(errors.password)} // Show error if there's an error for password input
                            helperText={errors.password ? errors.password.message : ''} // Display error message for password input
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth variant="contained" color="primary" type="submit"> {/* Add type="submit" to trigger form submission */}
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default Login;
