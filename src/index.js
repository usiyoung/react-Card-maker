import React,{memo} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './app.jsx';
import ImageFileInput from './components/image_file_input/image_file_input.jsx';
import './index.css';
import AuthService from './service/auth_service';
import CardRepository from './service/card_repository.js';
import firebaseApp from './service/firebase';
import ImageUploader from './service/image_uploader.js';

const authService = new AuthService(firebaseApp);
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const FileInput = memo(props => (<ImageFileInput {...props} imageUploader={imageUploader}/>))

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <App authService={authService} FileInput={FileInput} cardRepository={cardRepository}/>
      </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root'),
);


