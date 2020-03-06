import styled from 'styled-components';

const UrlList = styled.ul`
  border: 1px solid ${props => props.theme.gray400};
  background-color: ${props => props.theme.white};

  li {
    margin: 0;
    padding: 1rem;
    display: flex;
    align-items: center;

    div {
      flex: 1;
    }

    a {
      color: ${props => props.theme.secondary}
    }
  }

  h2 {
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    margin: .5rem 0;
    font-size: 1.2rem;
  }
`;

export default UrlList;