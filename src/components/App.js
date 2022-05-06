import React from "react";
import "../styles/App.scss";
import Editor from "./Editor";
import SuperTokens from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";

SuperTokens.init({
    appInfo: { 
        appName: "Eirene Network",
        apiDomain: "http://localhost:8080",
        websiteDomain: "https://banner.eirene-network.xyz",
        apiBasePath: "/auth",
        websiteBasePath: "/auth",
    },
    recipeList: [
        EmailPassword.init(),
        Session.init()
    ]
});
class App extends React.Component {
  render() {
      if (SuperTokens.canHandleRoute()) {
          return SuperTokens.getRoutingComponent()
      }
      return (
          <div>
              <Editor />
          </div>
      );
  }
}

export default App;