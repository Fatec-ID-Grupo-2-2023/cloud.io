import { useContext } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalContext';

const clientId = "840694087672-q5jr4irk22t3ompetcsu4n9m0ods8ack.apps.googleusercontent.com"

export default function LoginButton() {
    const history = useHistory();
    const { setUser } = useContext(GlobalContext);

    function onSuccess(response: any) {
        // console.log(response)
        history.push('/')
        setUser(response)
    }

    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                render={renderProps => (
                    <button style={{ backgroundColor: '#262626', border: 'none', borderRadius: '10px' }} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <img alt='google' src='src\assets\google.svg' /></button>
                )}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={() => console.log('kk')}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )

}
