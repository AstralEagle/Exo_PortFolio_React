import React from 'react';
import DefaultTemplate from '../templates/DefaultTemplate';

//Image
import DefaultImg from '../assets/Sans titre.png';
import { AiOutlineGithub, AiOutlinePhone } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import Information from '../components/Information';

const Present = () => {
  return (
    <DefaultTemplate>
      <div className={'d-flex justify-betewn'}>
        <Information
          nom="Dias"
          prenom="Arthur"
          email="arthur.dias@live.fr"
          age={22}
          tel="0605349963"
          git="github.com/AstralEagle"
        />
        <div style={{ backgroundColor: '#EDB88B', position: 'relative' }}>
          <img
            src={DefaultImg}
            alt="DefaultImage"
            style={{ position: 'relative', top: -20, left: -20, width: 200 }}
          />
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default Present;
