import React from "react";
import { NavLink } from "react-router-dom";
import "./Show.css";

const Show = ({ savedata, setSaveData }) => {
  const deleteData = (index) => {
    const updatedData = savedata.filter((_, i) => i !== index);
    setSaveData(updatedData);
    localStorage.setItem("Data", JSON.stringify(updatedData));
  };

  return (
    <div className="main-container">
      <div className="show-container">
        <h1>Password Vault</h1>
        <div className="password-details">
          {savedata.length > 0 ? (
            savedata.map((data, index) => (
              <div className="password-detail" key={index}>
                <div>
                  <h2>Email:</h2>
                  <p>{data.email}</p>
                </div>
                <div>
                  <h2>Password:</h2>
                  <p>{data.password}</p>
                </div>
                <div>
                  <h2>Name:</h2>
                  <p>{data.name}</p>
                </div>
                <div className="Detail-buttons">
                  <i
                    className="bx bx-trash trash"
                    onClick={() => deleteData(index)}
                  ></i>
                  <NavLink to="/" state={{ data: data, index: index }}>
                    <i className="bx bx-edit edit"></i>
                  </NavLink>
                </div>
              </div>
            ))
          ) : (
            <div className="no-data">
              <h2>No Saved Data</h2>
              <p>
                It seems like you haven't saved any <br /> information yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Show;
