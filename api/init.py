from supertokens_python import Supertokens, get_all_cors_headers
from flask import Flask, abort
from flask_cors import CORS 
from supertokens_python.framework.flask import Middleware
from supertokens_python import init, InputAppInfo, SupertokensConfig
from supertokens_python.recipe import emailpassword, session


app = Flask(__name__)
Middleware(app)

CORS(
    app=app,
    origins=[
        "https://banner.eirene-network.xyz"
    ],
    supports_credentials=True,
    allow_headers=["Content-Type"] + get_all_cors_headers(),
)
init(
    app_info=InputAppInfo(
        app_name="Eirene Network",
        api_domain="http://localhost:8080",
        website_domain="https://banner.eirene-network.xyz",
        api_base_path="/auth",
        website_base_path="/auth"
    ),
    supertokens_config=SupertokensConfig(
        connection_uri="https://try.supertokens.com",
    ),
    framework='flask',
    recipe_list=[
        session.init(), 
        emailpassword.init()
    ]
)

@app.route('/', defaults={'u_path': ''})  
@app.route('/<path:u_path>')  
def catch_all(u_path: str):
    abort(404)

if __name__ == '__main__':
    app.run(port="8080", host="0.0.0.0")