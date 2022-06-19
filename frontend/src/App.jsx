import { 
    BrowserRouter,
    Route, 
    Routes,
    Link
} from "react-router-dom";

import logo from '@/assets/logo.svg'
import github from '@/assets/github.svg'
import twitter from '@/assets/twitter.svg'
import linkedin from '@/assets/linkedin.svg'

import Home from "./pages/Home";

function App() {

    return (
        <BrowserRouter>
            <div className="header">
                <img src={logo} alt="" />
                <ul className="social">
                    <li>
                        <a href="https://github.com/lyralemos" className="github">
                            <img src={github} alt="GitHub" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/lyralemos" className="twitter">
                            <img src={twitter} alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/lyralemos" className="linkedin">
                            <img src={linkedin} alt="Linkedin" />
                        </a>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
