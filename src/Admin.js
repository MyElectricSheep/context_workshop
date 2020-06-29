import React, { useContext, useState } from "react";
import I18nContext from "./context/I18nContext";
import CompanyContext from "./context/CompanyContext";
import Welcome from "./Welcome";

const Admin = () => {
  const { companyData, setCompanyData } = useContext(CompanyContext);
  const [newCustomerValue, setNewCustomerValue] = useState("");
  const { t } = useContext(I18nContext);
  return (
    <>
      <h3>{companyData.name}</h3>
      <br />
      <div>{t.admin.title}</div>
      <br />
      <Welcome />
      <br />
      <div>{t.admin.content}</div>
      <input
        value={newCustomerValue}
        onChange={(e) => setNewCustomerValue(e.target.value)}
        placeholder="Daily customers"
        type="text"
      />
      <button
        onClick={(e) => {
          setCompanyData({ ...companyData, customers: newCustomerValue });
        }}
      >
        Save
      </button>
    </>
  );
};

export default Admin;
