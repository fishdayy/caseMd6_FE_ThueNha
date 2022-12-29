import '../page/CSS/login.css'

export default function Search() {
    return (
        <div className="container" style={{borderRadius:"25px",boxShadow:"0px 1px 25px 0px rgba(193,193,193,1)",marginBottom:"50px"}}>
            <ul className="nav nav-pills mb-3  nav-pills-flex">
                <li class="nav-item" role="presentation">
                    <button className="nav-link pills-home-tab" id="pills-home-tab" data-bs-toggle="#pills-home"
                            role="tab" aria-controls="pills-home">
                        <div style={{display:"flex",alignItems:"center"}}>
                            <i className="fa-solid fa-home" style={{color:"black",padding:"0 10px"}}></i>
                            <div className="nav-link-strong">
                                <strong style={{color:"black"}}>
                                    Hotel
                                </strong>
                            </div>
                        </div>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link pills-home-tab" id="pills-home-tab" data-bs-toggle="#pills-home"
                            role="tab" aria-controls="pills-home">
                        <div style={{display: "flex", alignItems: "center"}}>
                            <i className="fa-solid fa-dungeon" style={{color: "black", padding: "0 10px"}}></i>
                            <div className="nav-link-strong">
                                <strong style={{color: "black"}}>
                                    Homestay
                                </strong>
                            </div>
                        </div>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link pills-home-tab" id="pills-home-tab" data-bs-toggle="#pills-home"
                            role="tab" aria-controls="pills-home">
                        <div style={{display: "flex", alignItems: "center"}}>
                            <i className="fa-solid fa-hotel" style={{color: "black", padding: "0 10px"}}></i>
                            <div className="nav-link-strong">
                                <strong style={{color: "black"}}>
                                    Hostel
                                </strong>
                            </div>
                        </div>
                    </button>
                </li>
            </ul>
            <ul className="nav nav-pills mb-3  nav-pills-flex">
                <div style={{display:"flex",alignItems:"center"}}>
                    <i className="fa-solid fa-magnifying-glass" style={{padding:"0 10px"}}></i>
                    <input type="text" placeholder="Where are you going?" className="text-search"/>
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                    <i className="fa-solid fa-calendar-days" style={{padding:"0 10px"}}></i>
                    <span className="text-search">date to date</span>
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                    <i className="fa-solid fa-people-group" style={{padding:"0 10px"}}></i>
                    <span className="text-search">1 bathroom, 1 bedroom</span>
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                    <button className="btn btn-outline-success" type="submit" style={{marginLeft:"10px"}}>Search</button>
                </div>
            </ul>
        </div>
    )
}