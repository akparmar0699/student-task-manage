import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
        {/* page title*/}
        <h1 className="form-title">Welcom Back</h1>
        {/* login form */}
        <form>
            {/* email field */}
            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="enter your email"
                />
            </div>

            {/* password field */}
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="enter your password"
                />
            </div>

            {/* submit button */}
            <button type="submit" className="btn-primary">Login</button>
        </form>
    {/*link to register page */}
    <p className="link-text">
        Don't have an account? <Link to="/Register">Register</Link>
    </p>    
     </div>
  );
};

export default Login;
