import React, { useContext } from 'react';
import I18nContext from "./context/I18nContext"
import CompanyContext from "./context/CompanyContext"

const Welcome = () => {
    const {companyData} = useContext(CompanyContext)
    const { t } = useContext(I18nContext)
    return ( 
        <>
        {t.welcome.main}! {companyData.customers} {t.welcome.daily}!
        </>
     );
}
 
export default Welcome;