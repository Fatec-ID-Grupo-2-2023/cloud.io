import { Box, Button } from '@mui/material'
import axios from 'axios'
import { gapi } from 'gapi-script'
import { useEffect } from 'react'
import LoginButton from '../../components/Login'
import LogoutButton from '../../components/Logout'

export default function Login() {
    const clientId = "840694087672-q5jr4irk22t3ompetcsu4n9m0ods8ack.apps.googleusercontent.com"
    const apiKey = "AIzaSyApWKH5LH8FD5Y7DP4_5COYy46v96PAJIE"
    const scope = "https://www.googleapis.com/auth/drive"

    useEffect(() => {
        function start() {
            gapi.client.init({
                apiKey,
                clientId,
                scope
            })
        }
        gapi.load('client:auth2', start)
    }, [])

    return (
        <Box>
            <LoginButton />
            <LogoutButton />
        </Box>
    );
}