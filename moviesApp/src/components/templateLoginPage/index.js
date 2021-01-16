import React from "react";
import "./loginPage.css";

const TemplateLoginPage = ({children}) => {
  return (
      <>
        <div className="container">
  
            <div className="text-center">{children}</div>

        </div>
      </>
  );
};

export default TemplateLoginPage;