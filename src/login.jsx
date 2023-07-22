import { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import './login.css'

function Login() {
    return (
        <Box display={'flex'} flexDirection={'column'}>
            <h1>Iniciar sesion</h1>
            <form className='forma'>
                <TextField
                    style={{
                        marginTop: 20,
                    }}
                    variant='filled'
                    label="Usuario"
                >
                </TextField>

                <TextField
                    style={{
                        marginTop: 20,
                    }}
                    variant='filled'
                    label="Contraseña"
                    type='password'
                >
                </TextField>
                <Button
                    style={{
                        marginTop: 40,
                        padding: 20
                    }}  
                    variant='contained'
                    type='submit'
                >
                    Iniciar Sesión
                </Button>
            </form>
        </Box>
    )
}

export default Login