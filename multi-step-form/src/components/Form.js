/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PersonAuthInfo from "./PersonAuthInfo";
import PersonContactInfo from "./PersonContactInfo";

const Form = () => {
  const [page, setPage] = useState(0);
  const formTitles = ["Kişisel Bilgiler", "İletişim Bilgileri"];
  const lastIndexOfTitle = formTitles.length - 1;

  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    email: "",
    phone: "",
    address: ""
  });

  const FormDisplay = () => {
    if (page === 0) {
      return <PersonAuthInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return (
        <PersonContactInfo formData={formData} setFormData={setFormData} />
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // POST
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          className="percent"
          style={{ width: page === 0 ? "50%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <h3>{formTitles[page]}</h3>
      </div>
      <form method="POST">
        <div className="form-body">{FormDisplay()}</div>
        <button disabled={page === 0} onClick={() => setPage(page - 1)}>
          Geri
        </button>
        <button
          disabled={page === lastIndexOfTitle}
          onClick={() => setPage(page + 1)}
        >
          İleri
        </button>
        {page === lastIndexOfTitle ? (
          <button type="submit" onClick={handleSubmit}>
            Gönder
          </button>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default Form;
