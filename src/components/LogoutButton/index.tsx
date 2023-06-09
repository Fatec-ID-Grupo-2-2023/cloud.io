import { GoogleLogout } from 'react-google-login';
import './style.scss';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

const clientId = "840694087672-q5jr4irk22t3ompetcsu4n9m0ods8ack.apps.googleusercontent.com"

export default function LogoutButton() {

    const { setUser } = useContext(GlobalContext);

    return (
        <GoogleLogout
            className="logout-button"
            clientId={clientId}
            buttonText={'Logout'}
            onLogoutSuccess={() => setUser(undefined)}
        />
    )

}