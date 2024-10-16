import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import ThemeProvider, { themeContext } from './contexts/ThemeContext'
  const App = () => {

    return (
     
        <ThemeProvider>
       <Header />
       <Outlet />
        </ThemeProvider>
    )
  }

export default App

