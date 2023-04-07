import { useEffect } from 'react'
import LoginButton from './components/Login'
import LogoutButton from './components/Logout'
import { gapi } from 'gapi-script'
import GoogleLogin from 'react-google-login'
import { Button } from '@mui/material'
import axios from 'axios'

const clientId = "840694087672-q5jr4irk22t3ompetcsu4n9m0ods8ack.apps.googleusercontent.com"
const apiKey = "AIzaSyApWKH5LH8FD5Y7DP4_5COYy46v96PAJIE"
const scope = "https://www.googleapis.com/auth/drive"

function fetchFiles() {
  const accessToken = gapi.auth.getToken().access_token

  axios.get(
    'https://www.googleapis.com/drive/v3/files',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).then((response) => {
    console.log(response)
  })
}

function App() {

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
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <Button onClick={() => fetchFiles()}>Show Files</Button>
    </div>
  )
}
export default App;