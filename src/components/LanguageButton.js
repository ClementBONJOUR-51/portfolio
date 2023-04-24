import React from 'react';
import { useContext } from "react";
import { LanguageContext } from "../index";
import flag_fr from '../assets/img/france.png';
import flag_en from '../assets/img/royaume-uni.png';
import { Button } from 'reactstrap';

const LanguageButton = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
      <Button className='btn btn-lg bg-light px-4 py-2' onClick={toggleLanguage}> {language==="en"?
      <img src={flag_fr} alt="line" className="img-fluid" height={20} width={30} /> :
      <img src={flag_en} alt="line" className="img-fluid" height={20} width={30}/>}
      </Button>
  );
};

export default LanguageButton;