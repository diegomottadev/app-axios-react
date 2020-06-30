import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL  ="https://jsonplaceholder.typicode.com";
axios.defaults.headers.commons["Authorization"] = 'Auth token';
axios.defaults.headers.post['Content-Type'] = "application/json";

axios.interceptors.request.use(request =>{
    console.log(request);
    return request;
},error =>{
    //internet conectivity
    console.log(error);
    return Promise.reject(error);
}
);

axios.interceptors.response.use(request =>{
    console.log(request);
    return request;
},error =>{
    //internet conectivity
    console.log(error);
    return Promise.reject(error);
}
);



ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
