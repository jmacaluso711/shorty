import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  padding: 1rem;

  input {
    font-size: 1.25rem;
    flex: 1;
    padding: 0 1rem;
    margin: 0 .5rem 0 0;
    border: 1px solid ${props => props.theme.gray400};
    border-radius: ${props => props.theme.borderRadiusSm};

    &:first-of-type {
      flex: 2;
      margin-left: none;
    }
  }
`;

export { Form };