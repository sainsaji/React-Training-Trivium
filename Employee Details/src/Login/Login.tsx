import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let [uname, setUname] = useState("");
  let [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const doLogin = () => {
    if (uname === "" || pwd === "") {
      alert("Uname , Pass can't be empty");
      return;
    }
    if (uname === "admin" && pwd === "admin") {
      alert("Success");
      localStorage.setItem("uname", uname);
      navigate("/dashboard");
    } else {
      alert("Failed");
    }
  };

  const handleUnameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUname(event.target.value);
  };
  const handlePwdChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPwd(event.target.value);
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={uname}
            onChange={handleUnameChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={pwd}
            onChange={handlePwdChange}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={doLogin}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
