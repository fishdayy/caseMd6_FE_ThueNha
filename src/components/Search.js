import '../page/CSS/login.css'
// import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { DateRange } from 'react-date-range';
// import {useState} from 'react'
// const [date, setDate] = useState([
//     {
//         startDate: new Date(),
//         endDate: null,
//         key: 'selection'
//     }
// ]);

export default function Search() {
    return (
        <div className="container" style={{borderRadius:"25px",boxShadow:"0px 1px 25px 0px rgba(193,193,193,1)",marginBottom:"50px",height:"130px"}}>
            <ul className="nav nav-pills mb-3  nav-pills-flex" >
                <li class="nav-item" role="presentation" style={{marginTop:"10px"}}>
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
                <li className="nav-item" role="presentation" style={{marginTop:"10px"}}>
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
                <li className="nav-item" role="presentation" style={{marginTop:"10px"}}>
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
            <ul className="nav nav-pills mb-3  nav-pills-flex" >
                <div style={{display:"flex",width:"300px",alignItems:"center",marginRight:"3%",border:"1px solid",borderRadius:"5px"}}>
                    <i className="fa-solid fa-magnifying-glass" style={{padding:"0 10px"}}></i>
                    <input type="text" placeholder="Where are you going?" className="text-search" style={{border:"none",marginRight:"5px"}}/>
                </div>
                <div style={{display:"flex",width:"300px",alignItems:"center",border:"1px solid",marginRight:"3%",borderRadius:"5px"}}>
                    <i className="fa-solid fa-calendar-days" style={{padding:"0 10px"}}></i>
                    <span className="text-search" style={{marginRight:"10px"}}>date to date</span>
                </div>
                <div style={{display:"flex",width:"300px",alignItems:"center",border:"1px solid",marginRight:"3%",borderRadius:"5px"}}>
                    <i className="fa-solid fa-people-group" style={{padding:"0 10px"}}></i>
                    <span className="text-search" style={{marginRight:"10px"}}>1 bathroom, 1 bedroom</span>
                </div>
                <div style={{display:"flex",width:"20px",alignItems:"center",marginLeft:"10%"}}>
                    <button className="btn btn-danger" type="submit" style={{marginLeft:"10px"}}>Search</button>
                </div>
            </ul>
        </div>
    )
}