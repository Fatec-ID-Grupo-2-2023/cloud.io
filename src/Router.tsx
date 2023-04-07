import { Route, Switch } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";

export default function Router() {

    return (
        <App>
            <Switch>
                <Route path='/' component={Home} />
            </Switch>
        </App>
    );
}