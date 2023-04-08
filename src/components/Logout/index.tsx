import { GoogleLogout } from 'react-google-login'

const clientId = "840694087672-q5jr4irk22t3ompetcsu4n9m0ods8ack.apps.googleusercontent.com"

export default function Logout() {

    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={'Logout'}
                onLogoutSuccess={() => console.log('jj')}
            />
        </div>
    )

}