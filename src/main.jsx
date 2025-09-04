import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// CSS imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// App component
import App from './App.jsx';

// 2. createRoot는 앱 전체에서 딱 한 번만 호출합니다.
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* 3. BrowserRouter가 App 컴포넌트를 감싸야 라우팅 기능이 작동합니다. */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
