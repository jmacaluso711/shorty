import styled from 'styled-components';

const MainLayout = styled.main`
  display: flex;
  height: 100vh;
`;

const FormLayout = styled.section`
  flex: 1;
  background-color: ${props => props.theme.gray800};
`;

const UrlsLayout = styled.section`
  flex: 1;
`;


export { MainLayout, FormLayout, UrlsLayout };