import './CSS/login.css';
import './CSS/create.css';
import Footer from "../components/Footer";
import {Formik, Form, Field} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {createHome} from "../service/homeService";
import {useState} from "react";
import {storage} from "./firebase/config";
import {
    ref, getDownloadURL, uploadBytesResumable
} from "firebase/storage";
import {createImg} from "../service/imageService";

const CreatePost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userId = useSelector(state => {
        return state.user.userNow.userFind[0].id
    })
    const handleSubmit = async (values) => {
        let avatar = urls[0]
        let data = {...values, avatar}
        console.log(data)
        let homes = await dispatch(createHome(data))
        let homeId = await homes.payload.idHome
        for (let i = 0; i < urls.length; i++) {
            let image = urls[i]
            let data = {homeId, image}
            await dispatch(createImg(data))
        }
        navigate('/home')
    }
    //Upload IMG
    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setImages((prevState) => [...prevState, newImage]);
        }
    };

    const handleUpload = () => {
        const promises = [];
        if (images.length > 0) {
            images.map((image) => {
                const storageRef = ref(storage, `images/${image.name}`);
                const uploadTask = uploadBytesResumable(storageRef, image);
                promises.push(uploadTask);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const progress = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );
                        setProgress(progress);
                    },
                    (error) => {
                        console.log(error);
                    },
                    async () => {
                        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURLs) => {
                            setUrls(prevState => [...prevState, downloadURLs])
                            console.log("File available at", downloadURLs);
                        });
                    }
                );
            });
        }
        Promise.all(promises)
            .then(() => alert("All images uploaded"))
            .catch((err) => console.log(err));
    };
    //---END---
    return (
        <>
            <div>
                <h2 style={{textAlign: "center", marginBottom: "20px", marginTop: "20px"}}>Chia sẻ thông tin về chỗ
                    ở
                    của bạn cho chúng tôi</h2>
                <p style={{textAlign: "center", marginBottom: "30px"}}>Trong bước này, chúng tôi sẽ hỏi xem bạn cho
                    thuê
                    loại chỗ ở nào và bạn muốn cho khách đặt toàn bộ nhà hay chỉ một phòng cụ thể</p>
                <div>
                    <div className="create" id="backgroundCreate" style={{float: "left"}}>
                        <Formik initialValues={{
                            name: '',
                            address: '',
                            price: '',
                            description: '',
                            categoryId: '',
                            bedroom: '',
                            bathroom: '',
                            userId: userId
                        }} onSubmit={(values) => handleSubmit(values)}>
                            <Form id="createPost" tabIndex="500">
                                <h3>Create Post Rent Home</h3>
                                <div className="name">
                                    <Field type="text" name="name"/>
                                    <label>Name</label>
                                </div>
                                <div className="address">
                                    <Field type="text" name="address"/>
                                    <label>Address</label>
                                </div>
                                <div className="Price">
                                    <Field type="number" name="price"/>
                                    <label>Price</label>
                                </div>
                                <div className="description">
                                    <Field style={{height: "200px"}} name="description"/>
                                    <label>Description</label>
                                </div>
                                <div className="category">
                                    <Field as={"select"} name={"categoryId"}>
                                        <option value="1">Hotel</option>
                                        <option value="2">Hostel</option>
                                        <option value="3">Homestay</option>
                                    </Field>
                                    <label>Category</label>
                                </div>
                                <div className="bedroom">
                                    <Field as={"select"} name={"bedroom"}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </Field>
                                    <label>Bedroom</label>
                                </div>
                                <div className="bathroom">
                                    <Field as={"select"} name={"bathroom"}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </Field>
                                    <label>Bathroom</label>
                                </div>
                                <div className="submit" style={{border: "1px solid #999"}}>
                                    <button className="dark">Submit</button>
                                </div>
                            </Form>
                        </Formik>
                        <br/>
                        <>
                            <input style={{position: "relative", bottom: '119px', width: '27rem', border: 'none'}}
                                   type="file" multiple onChange={handleChange}/>
                            <button style={{color: 'red', position: 'relative', bottom: '7.5rem', right: '3px'}}
                                    onClick={() => dispatch(handleUpload)}>Upload
                            </button>
                        </>


                        <br/>
                    </div>
                    <br/><br/><br/><br/><br/>
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
                                                Chia sẻ một số thông tin cơ bản, như vị trí của nhà/phòng cho thuê
                                                và số
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
                                                style={{width: "120px", height: "120px"}}/>
                                        </div>
                                    </div>
                                    <div>
                                        <li>
                                            <strong>
                                                Làm cho nhà/phòng cho thuê trở nên nổi bật
                                            </strong>
                                            <p>
                                                Thêm từ 5 ảnh trở lên cùng với tiêu đề và nội dung mô tả – chúng tôi
                                                sẽ
                                                giúp bạn
                                                thực hiện. </p>
                                        </li>
                                    </div>

                                </div>

                                <hr/>
                                <div>
                                    <div>
                                        <img
                                            src="https://a0.muscache.com/4ea/air/v2/pictures/c0634c73-9109-4710-8968-3e927df1191c.jpg"
                                            style={{width: "120px", height: "120px"}}/>
                                    </div>

                                    <div>
                                        <li>
                                            <strong>
                                                Hoàn thiện và đăng mục cho thuê
                                            </strong>
                                            <p>
                                                Lựa chọn xem bạn muốn bắt đầu với việc đón tiếp khách có kinh
                                                nghiệm,
                                                chọn giá
                                                khởi
                                                điểm hay đăng mục cho thuê. </p>
                                        </li>
                                    </div>
                                </div>
                            </ul>
                        </form>
                    </div>
                </div>
                <div style={{marginTop: "50%"}}>
                </div>
            </div>
        </>
    )
}
export default CreatePost;