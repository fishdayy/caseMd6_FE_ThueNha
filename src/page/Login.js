import "./CSS/login.css"


export default function Login(){

    return(
        <>
            <div className="veen">
                <div className="wrapper">
                    <form id="login" tabIndex="500">
                        <h3>Login</h3>
                        <div className="mail">
                            <input type="mail" name=""/>
                                <label>Mail or Username</label>
                        </div>
                        <div className="passwd">
                            <input type="password" name=""/>
                                <label>Password</label>
                        </div>
                        <div className="submit">
                            <button className="dark">Login</button>
                        </div>
                        <div className="submit">
                            <p>Don't have an account?</p>
                            <button className="dark">Register</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
