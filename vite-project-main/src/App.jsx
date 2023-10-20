import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import doc from './assets/doc.svg'
import mail from './assets/mail.png'
import facebook from './assets/facebook.png'
import insta from './assets/insta.png'
import { useRoutes } from "react-router-dom"
import Main1 from './Main1'
import About from './About'
import Documentation from './Documentation'

function App() {
  const route = useRoutes([
    {
      path: '/',
      element: <Main1/>,
      //Главная
    },
    {
      path: '/about',
      element: <About/>,
      //Главная
    },
    {
      path: '/main1',
      element: <Documentation/>,
      //Главная
    },
  ]);

  return route;

}

export default App
