import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import About from './About';
import Contacts from './Contacts';
import Home from './Home';
import logo from './assets/android-chrome-192x192.png';
import heartSvg from './assets/heart-solid.svg';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #222;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media (max-width: 480px) {
    padding: 2rem 1rem 1rem;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 332px) {
    gap: 16px;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
`;

const Footer = styled.footer`
  position: sticky;
  bottom: 0;
  width: 100%;
  color: #222222aa;
  padding: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  background-color: #f1f1f1;

  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: small;
  }
`;

function App() {
  return (
    <PageContainer>
      <header>
        <Navbar>
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              style={{
                width: 64,
                height: 64,
                objectFit: 'contain',
                paddingRight: '1rem',
              }}
            />
          </Link>
          <LinksContainer>
            <StyledLink to="/">Sākums</StyledLink>
            <StyledLink to="/par">Par</StyledLink>
            <StyledLink to="/kontakti">Kontakti</StyledLink>
          </LinksContainer>
        </Navbar>
      </header>
      <ContentContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/par" element={<About />} />
          <Route path="/kontakti" element={<Contacts />} />
        </Routes>
      </ContentContainer>
      <Footer>
        Made with{' '}
        <img src={heartSvg} alt="love" width={16} style={{ margin: '0 6px' }} />{' '}
        by Pēteris
      </Footer>
    </PageContainer>
  );
}

export default App;
