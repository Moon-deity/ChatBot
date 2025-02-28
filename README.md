# ChatBot
This is a general Text-to-Text chat bot using gemini-1.5-flash API.

### Technology used:
- Vite React App
- Tailwind CSS
- Google Cloud API
- Express Backend
- LocalStorage

### Features
- Chat with Gemini-1.5-Flash
- Create new chat
- Stores all the chats on localstorage

### How to build:
- create a file name `.env` in backend directory and write API as
```
API = "your_api_goes_here"
```
- Now open terminal install the packages
```
npm install
```
- Now run the Vite+React app
```
npm run dev
```
- Now change directory to the backend folder
```
cd .\backend\
```
- Now again install the packages 
```
npm install
```
- Now run the server
```
node .\server.js
```
- Now open `localhost:5174`

### Additional Information
I have not included options like edit chat title or delete a chat so you have to manually delete chats by pressing `CTRL+SHIFT+I` and it will open developer tools, then go to application and delete the key value pairs
#### Warning: Clearing browser cache will delete all the chats

## Very Important Note:
I have stored the conversations on local storage (*I want to store them on a good online database service but my pocket say **no***)  
(*Also you can send only 15 messages per minute in this API, I want to buy premium with more tokens but again my pocket says **no***)