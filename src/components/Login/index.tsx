import React from 'react'
import { GoogleLogin } from 'react-google-login'

const clientId = "840694087672-q5jr4irk22t3ompetcsu4n9m0ods8ack.apps.googleusercontent.com"

export default function Login() {

    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText='Login'
                onSuccess={(res) => console.log(res)}
                onFailure={() => console.log('kk')}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )

}