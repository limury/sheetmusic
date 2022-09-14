import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Profile from './pages/Profile';
import { ThemeProvider } from '@mui/material/styles';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#fafafa',
    },
    secondary: {
      main: '#1976d2',
    },
  },
};


const router = createBrowserRouter([
  // home
  {
    path: "/",
    element: <App />,
    children: [

    ]
  },

  //login
  {
    path: "/profile/:username",
    element: <Profile />,
    loader: async ({params}) => {
      // fetch user data here
    }
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeOptions}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
