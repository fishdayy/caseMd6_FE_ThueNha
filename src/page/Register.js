export default function Register() {
    return (
        <>
            <div className="veen">
                <div className="wrapper">
                    <form id="login" tabIndex="500">
                        <h3>Register</h3>
                        <div className="mail">
                            <input type="mail" name=""/>
                            <label>Mail or Username</label>
                        </div>
                        <div className="passwd">
                            <input type="password" name=""/>
                            <label>Password</label>
                        </div>
                        {/*<div className="passwd">*/}
                        {/*    <input type="password" name=""/>*/}
                        {/*    <label>Re-Password</label>*/}
                        {/*</div>*/}
                        <div className="submit">
                            <button className="dark">Submit</button>
                        </div>
                        <div className="submit">
                            <p>Already an user?</p>
                            <button className="dark">Login</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}