import { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import './Registro.css'

function Registro() {
    return (
        <Box display={'flex'} flexDirection={'column'}>
            <h1>Registrarse</h1>
            <form className='formulario'>
                <TextField
                    style={{
                        marginTop: 20,
                    }}
                    variant='filled'
                    label="Nombre"
                >
                </TextField>

                <TextField
                    style={{
                        marginTop: 20,
                    }}
                    variant='filled'
                    label="Apellido"
                >
                </TextField>

                <TextField
                    style={{
                        marginTop: 20,
                    }}
                    variant='filled'
                    label="Correo Electronico"
                    type='email'
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
                    registrarse
                </Button>
            </form>
        </Box>
    )
}

export default Registro