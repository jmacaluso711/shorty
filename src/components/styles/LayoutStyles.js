import styled from 'styled-components';

const MainLayout = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0 1rem;

  @media(min-width: 860px) {
    flex-direction: row;
  }
`;

const FormLayout = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${props => props.theme.white};
    font-size: 4rem;
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    color: ${props => props.theme.gray400};
    font-size: 1.5rem;
    margin-top: .75rem;
    margin-bottom: 3rem;
  }
`;

const UrlsLayout = styled.section`
  flex: 1;
  padding: 4rem;
  margin: 1rem 0;
  background-color: ${props => props.theme.white};
  border-radius: 20px;
  overflow-y: scroll;

  h2 {
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 1.75rem;
  }
`;


export { MainLayout, FormLayout, UrlsLayout };
