import Navbar from "../components/NavBar";
import './CSS/profile.css'
import Footer from "../components/Footer";

const Profile = () => {
    return (
        <div style={{backgroundColor:"white",marginTop:'10px'}}>
            <Navbar/>
            <div className="container">
            <div className="main-body" style={{boxShadow:"0px 1px 25px 0px rgba(193,193,193,1)"}}>
                <nav aria-label="breadcrumb" className="main-breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                    </ol>
                </nav>
                <hr/>
                <div className="row gutters-sm" >
                    <div className="col-md-4 mb-3" style={{width:"30%"}} >
                        <div className="card" style={{boxShadow:"0px 1px 25px 0px rgba(193,193,193,1)",borderRadius:"20px"}}>
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin"
                                         className="rounded-circle" width="150"></img>
                                    <div className="mt-3">
                                        <h4>John Doe</h4>
                                        <p className="text-secondary mb-1">Full Stack Developer</p>
                                        <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8" style={{width:"70%",}} >
                        <div className="card mb-3" style={{boxShadow:"0px 1px 25px 0px rgba(193,193,193,1)",borderRadius:"20px"}}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0" style={{color:"red"}}>Full Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        Kenneth Valdez
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0" style={{color:"red"}}>Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        fip@jukmuh.al
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0" style={{color:"red"}}>Phone</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        (239) 816-9029
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0" style={{color:"red"}}>Address</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        Bay Area, San Francisco, CA
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <a className="btn btn-info " style={{backgroundColor:"red",color:"white",borderRadius:"15px"}}
                                           href="">Edit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <Footer/>
        </div>


    )
}
export default Profile