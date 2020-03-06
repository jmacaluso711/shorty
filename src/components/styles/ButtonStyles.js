import styled from 'styled-components';

const ButtonPrimary = styled.button`
  border: none;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  font-weight: bold;
  font-size: 1.25rem;
  border-radius: ${props => props.theme.borderRadius};
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.primaryDark};
  }

  &[disabled] {
    opacity: 0.75;
    cursor: auto;

    &:hover {
      background-color: ${props => props.theme.primary};
    }
  }
`;

const ButtonIcon = styled.button`
  border: none;
  color: ${props => props.theme.gray600};
  padding: 0;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export {ButtonPrimary, ButtonIcon};