import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import SuperTokens, { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import * as reactRouterDom from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    {/*This renders the login UI on the /auth route*/}
                    {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
                    {/*Your app routes*/}
                </Routes>
            </BrowserRouter>
        );
    }
}