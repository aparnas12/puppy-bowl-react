import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './components/App';




try {
   
    const root = createRoot(document.querySelector('#app'));
    

    root.render(<App/>);
}
catch (error) {
    console.error(error);
}






