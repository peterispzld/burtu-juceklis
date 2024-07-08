import React from 'react';
import { AboutContainer, Paragraph } from './About';
import instagramSvg from './assets/instagram.svg';
import profilePic from './assets/peteris_selfie2_cropped-min.jpg';

import linkedinSvg from './assets/linkedin.svg';

const Contacts: React.FC = () => {
  return (
    <AboutContainer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '3rem',
        }}
      >
        <img
          src={profilePic}
          alt="Profile Picture"
          style={{
            width: 150,
            height: 150,
            borderRadius: '50%',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            marginBottom: '1rem',
          }}
        />
        <div style={{ display: 'flex', gap: 16, marginBottom: '3rem' }}>
          <a
            href="https://www.instagram.com/peterispzld"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramSvg} alt="Instagram" width={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/peteriscaurs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinSvg} alt="Linkedin" width={32} />
          </a>
        </div>
      </div>
      <Paragraph>
        Ja tev ir kādi jautājumi, ieteikumi vai atsauksmes, droši dod ziņu,
        rakstot uz e-pastu{' '}
        <a href="mailto:peteris.dev@gmail.com" style={{ color: '#a4343a' }}>
          peteris.dev@gmail.com
        </a>
        .
      </Paragraph>
    </AboutContainer>
  );
};

export default Contacts;
