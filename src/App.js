import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import HomePage from './pages/HomePage';
import WelcomePage from './pages/Welcome';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/forget-password" element={<ForgetPasswordPage/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/Welcome" element={<WelcomePage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
