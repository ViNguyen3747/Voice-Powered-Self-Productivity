import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Authentication from "../images/Authentication.svg";

const Signin = () => {
  return (
    <div className="info-container">
      <div className="InfoRow">
        <div className="Column1">
          <div className="TextWrapper">
            <p className="TopLine">Join us</p>
            <p className="Subtitle">
              Easy to access, easy to understand. Join us now to exprience the
              best way to develope your healthy livestyle!
            </p>
            <Link to="/auth">
              <Button
                className="info-wrapper"
                style={{ background: "#D14343", color: "white" }}
              >
                Sign in
              </Button>
            </Link>
          </div>
        </div>
        <div className="Column2">
          <div className="ImgWrap">
            <img className="Img" src={Authentication} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
