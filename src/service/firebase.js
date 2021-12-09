
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain:  process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ,
    databaseUrl: process.env.REACT_APP_FIREBASE_DB_URL
};
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;