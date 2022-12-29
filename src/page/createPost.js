import './CSS/login.css';
import './CSS/create.css';
import Navbar from "../components/NavBar";
import Banner from "../components/Banner";
import Search from "../components/Search";
import Footer from "../components/Footer";

const CreatePost = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <h2 style={{textAlign:"center",marginBottom:"20px",marginTop:"20px"}}>Chia sẻ thông tin về chỗ ở của bạn cho chúng tôi</h2>
            <p style={{textAlign:"center",marginBottom: "30px"}}>Trong bước này, chúng tôi sẽ hỏi xem bạn cho thuê loại chỗ ở nào và bạn muốn cho khách đặt toàn bộ nhà hay chỉ một phòng cụ thể</p>
            <div>
                <div className="create" id="backgroundCreate" style={{float: "left"}}>
                    <form id="createPost" tabIndex="500">
                        <h3>Create Post Rent Home</h3>
                        <div className="name">
                            <input type="text" name=""/>
                            <label>Name</label>
                        </div>
                        <div className="address">
                            <input type="number" name=""/>
                            <label>Address</label>
                        </div>
                        <div className="description">
                            <textarea style={{height: "200px"}} name=""/>
                            <label>Description</label>
                        </div>
                        <div className="category">
                            <select id="rooms">
                                <option value="hotel">Hotel</option>
                                <option value="hostel">Hostel</option>
                                <option value="homestay">Homestay</option>
                            </select>
                            <label>Category</label>
                        </div>
                        <div className="bedroom">
                            <select id="bedroom">
                                <option value="firstBedroom">1</option>
                                <option value="secondBedroom">2</option>
                                <option value="thirdBedroom">3</option>
                            </select>
                            <label>Bedroom</label>
                        </div>
                        <div className="bathroom">
                            <select id="bathroom">
                                <option value="firstHotel">1</option>
                                <option value="secondHostel">2</option>
                                <option value="thirdHomestay">3</option>
                            </select>
                            <label>Bathroom</label>
                        </div>
                        <div className="image">
                            <input type="file" name=""/>
                            <label>Image</label>
                        </div>
                        <div className="submit">
                            <button className="dark">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="infoCreate" id="backgroundCreate" style={{float: "left"}}>
                    <form id="createPost" tabIndex="500">
                        <ul style={{listStyleType: "upper-roman"}}>
                            <div>
                                <div>
                                    <img
                                        src="https://a0.muscache.com/4ea/air/v2/pictures/da2e1a40-a92b-449e-8575-d8208cc5d409.jpg"
                                        style={{width: "120px", height: "120px"}}/>
                                </div>
                                <div>
                                    <li>
                                        <strong>
                                            Chia sẻ thông tin về chỗ ở của bạn cho chúng tôi
                                        </strong>
                                        <p>
                                            Chia sẻ một số thông tin cơ bản, như vị trí của nhà/phòng cho thuê và số
                                            lượng khách
                                            có thể ở tại đó.
                                        </p>
                                    </li>
                                </div>



                            </div>
                            <hr/>
                            <div>
                                <div>
                                    <div>
                                        <img
                                            src="https://a0.muscache.com/4ea/air/v2/pictures/bfc0bc89-58cb-4525-a26e-7b23b750ee00.jpg"
                                            style={{width:"120px",height:"120px"}}/>
                                    </div>
                                </div>
                                <div>
                                    <li>
                                        <strong>
                                            Làm cho nhà/phòng cho thuê trở nên nổi bật
                                        </strong>
                                        <p>
                                            Thêm từ 5 ảnh trở lên cùng với tiêu đề và nội dung mô tả – chúng tôi sẽ giúp bạn
                                            thực hiện. </p>
                                    </li>
                                </div>

                            </div>

                            <hr/>
                            <div>
                                <div>
                                    <img
                                        src="https://a0.muscache.com/4ea/air/v2/pictures/c0634c73-9109-4710-8968-3e927df1191c.jpg"
                                        style={{width:"120px",height:"120px"}}/>
                                </div>

                                <div>
                                    <li>
                                        <strong>
                                            Hoàn thiện và đăng mục cho thuê
                                        </strong>
                                        <p>
                                            Lựa chọn xem bạn muốn bắt đầu với việc đón tiếp khách có kinh nghiệm, chọn giá
                                            khởi
                                            điểm hay đăng mục cho thuê. </p>
                                    </li>
                                </div>
                            </div>
                        </ul>
                    </form>
                </div>
            </div>
            <div style={{marginTop:"50%"}}>
                <Footer/>
            </div>
        </div>
    )
}
export default CreatePost