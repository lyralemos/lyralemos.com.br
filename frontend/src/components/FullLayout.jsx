import { 
    Route, 
    Routes,
    Link
} from "react-router-dom";

import NavBar from './NavBar'
import Footer from "./Footer";
import Login from "./Login";

import Home from  '../pages/Home.jsx'

const FullLayout = () => {
    return (
        <div className="wrapper">
            <nav className="main-header navbar navbar-expand-md navbar-dark bg-lightblue navbar-white">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        {/* <img src="@/assets/ufal-white.png" alt="Ufal" className="brand-image pt-2"> */}
                    </Link>
                    <div className="navbar-collapse pull-left collapse"></div>
                    <NavBar />
                </div>
            </nav>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container">
                        <div className="row mb-2" v-if="global">
                            <div className="col-sm-6">
                                <h1 className="m-0">
                                    {/* {{global.title}}
                                    <small>{{global.description}}</small> */}
                                </h1>
                            </div>
                            <div className="col-sm-6">
                                {/* <Breadcrumb :menu="global.breadcrumbs" /> */}
                            </div>
                        </div>
                    </div>
                </section>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <Login />
                                <Routes>
                                    <Route element={<Home/>}  path="/" />
                                    {/* <Route component = { Sobre }  path="/sobre" />
                                    <Route component = { Usuario }  path="/usuario" /> */}
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FullLayout