import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  color: #222;
  font-size: 1.2rem;
  line-height: 1.5;
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 480px) {
    padding: 1rem 2rem 1rem;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

const About: React.FC = () => {
  return (
    <div>
      <AboutContainer>
        <Heading>Par</Heading>
        <Paragraph>
          Burtu Juceklis ir latviešu{' '}
          <a
            href="https://en.wikipedia.org/wiki/Scrabble"
            target="_blank"
            style={{ color: '#a4343a' }}
          >
            Scrabble
          </a>{' '}
          vārdu meklēšanas lietotne, kas tika izveidota, lai palīdzētu
          spēlētājiem uzlabot savu spēles pieredzi.
        </Paragraph>
        <Paragraph>
          Lietotne ļauj lietotājiem ievadīt burtu jucekli, atpakaļ saņemot visus
          iespējamos vārdus, kas var tikt veidoti no šiem burtiem. Lietotāji var
          arī meklēt vārdus pēc to garuma un pēc tā, vai vārds satur konkrētu
          burtu vai burtu virkni. Apskatīt vārdu definīcijas var nospiežot uz
          pašiem vārdiem.
        </Paragraph>
        <Paragraph>
          Vārdi ir atlasīti no{' '}
          <a
            href="https://tezaurs.lv"
            target="_blank"
            style={{ color: '#a4343a' }}
          >
            Tezaurs.lv
          </a>{' '}
          2024. gada atvērtajiem datiem un tiek sakārtoti pēc to punktu skaita,
          sākot no lielākā punktu skaita. Nav iekļauti vārdi, kas sākas ar
          lielajiem burtiem, kā arī saīsinājumi. Ir ņemti vērā Scrabble burtu
          skaita ierobežojumi, piemēram, nav vārdu, kas satur vairāk nekā vienu
          "H" vai "Č" burtu.
        </Paragraph>
        <Paragraph>
          Dati ir licencēti saskaņā ar{' '}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            style={{ color: '#a4343a' }}
          >
            CC BY-SA 4.0
          </a>{' '}
          licenci.
        </Paragraph>
        <Paragraph>
          Ja novērtējat šo lietotni un/vai vēlaties atbalstīt tās turpmāku
          attīstību, lūdzu, apsveriet iespēju{' '}
          <a
            href="https://buymeacoffee.com/peterispzld
"
            target="_blank"
            style={{ color: '#a4343a' }}
          >
            nopirkt man grāmatu
          </a>
          !
        </Paragraph>
        <br />
        <Paragraph>
          <Link style={{ color: '#a4343a' }} to={'/'}>
            Atpakaļ
          </Link>{' '}
          uz lietotni.
        </Paragraph>
      </AboutContainer>
    </div>
  );
};

export default About;
