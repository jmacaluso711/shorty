import styled from 'styled-components';

const Form = styled.form`
  display: flex;

  input {
    color: ${props => props.theme.white};
    font-size: 1.25rem;
    flex: 1;
    padding: 1.5rem 1.8rem;
    margin: 0 .75rem 0 0;
    border: 1px solid ${props => props.theme.gray700};;
    border-radius: ${props => props.theme.borderRadiusSm};
    background-color: ${props => props.theme.gray700};
    transition: border 0.2s ease;

    &::placeholder {
      color: ${props => props.theme.white};
    }

    &:first-of-type {
      flex: 2;
      margin-left: none;
    }

    &:focus {
      border: 1px solid ${props => props.theme.gray400};
      outline: none;
    }
  }
`;

export { Form };
