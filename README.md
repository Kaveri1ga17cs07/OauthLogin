## Login with Github
This is a app to Demo, login with git hub functionality

### Usage and Setup
- Clone this repo. Go into the root folder and run *yarn* to install the dependencies.
- Login to your Github account and create an OAuth. Note: For this example, while creating the OAuth app, you can set your Homepage URL to http://localhost:3001/ and Authorization callback URL to http://localhost:3001/callback if you are running your app locally.
- Create a .env file in the root folder and set these variables: 
  ```
  REACT_APP_CLIENT_ID=Your Client ID from Github
  REACT_APP_CLIENT_SECRET=Your Client Secret from Github
  REACT_APP_REDIRECT_URI=http://localhost:3001/login
  REACT_APP_PROXY_URL=http://localhost:5000/authenticate
  SERVER_PORT=5000
  ```
- Run *yarn start* to start the app

### Application flow & screenshots
- on launch of the application user is shown the login with github option
- on click user is redirected to github login page , user needs to authorize
- after successfull authorization , application will load callback and recieve the code, validates with middleware server running on port 5000 [ this was added to handle cors issue from web app as github doesn't allow cors]
- added application screenshots in "/screenshots" directory 
