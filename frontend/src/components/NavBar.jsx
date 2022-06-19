import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
            <li className="nav-item dropdown user">
                <a href="" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                    {/* <font-awesome-icon icon="user-circle"></font-awesome-icon> */}
                    <span className="pl-1 username d-none d-sm-inline-block">name</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-right border-0 shadow">
                    {/* <template v-if="is_admin"> */}
                        <li>
                            <Link className="dropdown-item" to="/admin/sites">
                                {/* <font-awesome-icon icon="unlock-alt"></font-awesome-icon> */}
                                Pendentes
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/admin/servers">
                                {/* <font-awesome-icon icon="server"></font-awesome-icon> */}
                                Servidores
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/admin/images">
                                {/* <font-awesome-icon icon="database"></font-awesome-icon> */}
                                Imagens
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/admin/types">
                                {/* <font-awesome-icon icon="wind"></font-awesome-icon> */}
                                Tipos
                            </Link>
                        </li>
                        <li className="dropdown-divider"></li>
                        <li>
                            <Link className="dropdown-item" to="/admin/users">
                                {/* <font-awesome-icon icon="users"></font-awesome-icon> */}
                                Usuários
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="dropdown-item">
                                {/* <font-awesome-icon icon="key"></font-awesome-icon> */}
                                Tokens
                            </a>
                        </li>
                    {/* </template> */}
                    <li>
                        <a href="#" className="dropdown-item">
                            {/* <font-awesome-icon icon="sign-out-alt"></font-awesome-icon> */}
                            Sair
                        </a>
                    </li>
                </ul>
            </li>
        </ul>

    )
}

export default NavBar