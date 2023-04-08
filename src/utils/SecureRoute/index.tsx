import { ComponentType, Fragment, ReactNode, useContext, useEffect, useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";

interface IProps {
    component: ComponentType<any>;
    path: string;
    exact?: boolean;
}

export default function ProtectedRoute({ exact, path, component }: IProps) {
    const history = useHistory();
    const { user } = useContext(GlobalContext);

    useEffect(() => {
        if (!user) {
            history.push('/login');
        }
    }, [user]);

    return (
        <Fragment>
            {
                user && (
                    <Route exact={exact} path={path} component={component} />
                )
            }
        </Fragment>
    );
}