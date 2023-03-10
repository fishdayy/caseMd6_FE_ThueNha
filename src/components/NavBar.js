import {useNavigate} from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate()
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#"><img src="https://asahiluxstay.com/v2/images/logo.png?v=2" className="logo"/></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/home">Home</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button"
                                           data-bs-toggle="dropdown" aria-expanded="false">
                                            Post
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="/home/create-post">Create</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">List My Posts</a></li>

                                        </ul>
                                    </li>
                                </ul>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Username</a>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <button onClick={() => {
                                        localStorage.clear()
                                        navigate('/login')
                                    }} className="btn btn-outline-danger" type="submit">Log Out
                                    </button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}