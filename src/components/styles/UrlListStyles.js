import styled from 'styled-components';

const UrlList = styled.ul`
  border: 1px solid ${props => props.theme.gray400};
  background-color: ${props => props.theme.white};

  li {
    margin: 0;
    padding: 1rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.gray400};
    position: relative;

    &:last-child {
      border-bottom: none;
    }

    div {
      flex: 1;
    }

    a {
      color: ${props => props.theme.secondary};
      
      &:hover {
        color: ${props => props.theme.secondaryDark}
      }
    }
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    margin: .5rem 0;
    font-size: 1.2rem;
  }
`;

export default UrlList;
