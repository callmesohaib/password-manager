import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Password.css";

const Password = ({ savedata, setSaveData }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (location.state && location.state.data) {
      setInputValue(location.state.data);
    }
  }, [location]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputValue({ ...inputValue, [id]: value });
  };

  const clearInput = () => {
    setInputValue({ email: "", password: "", name: "" });
  };

  const saveData = (e) => {
    e.preventDefault();
    const itemExists = savedata.some((item) => item.name === inputValue.name);
    if (location.state && location.state.index !== undefined) {
      const index = location.state.index;
      const updatedData = [...savedata];
      updatedData[index] = inputValue;
      setSaveData(updatedData);
      localStorage.setItem("Data", JSON.stringify(updatedData));

    } 
    else if (itemExists) {
      alert("Account detail already exists.");
    }
    else {
      const updatedData = [...savedata, inputValue];
      setSaveData(updatedData);
      localStorage.setItem("Data", JSON.stringify(updatedData));
    }

    clearInput();
    setShowPassword(false);
    navigate("/show");
  };
  const handleCancel = () => {
    if (location.state && location.state.data) {
      navigate("/show");
    } else {
      clearInput();
    }
  };

  return (
    <div className="main-container">
      <div className="container">
        <h1 className="heading">Password Manager</h1>

        <form onSubmit={saveData}>
          <input
            type="email"
            className="email"
            id="email"
            value={inputValue.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <div className="hide">
            {showPassword ? (
              <>
                <input
                  type="text"
                  className="password"
                  id="password"
                  value={inputValue.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                <i
                  className="bx bx-show pass"
                  onClick={() => setShowPassword(false)}
                ></i>
              </>
            ) : (
              <>
                <input
                  type="password"
                  className="password"
                  id="password"
                  value={inputValue.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
                <i
                  className="bx bx-hide pass"
                  onClick={() => setShowPassword(true)}
                ></i>
              </>
            )}
          </div>

          <input
            type="text"
            className="name"
            id="name"
            value={inputValue.name}
            onChange={handleChange}
            placeholder="App Name"
            required
          />
          <br />
          <div className="btns">
            <button type="submit" className="save btn">
              Save
            </button>
            <button type="button" className="cancel btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Password;
