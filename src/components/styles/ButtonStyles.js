import styled from 'styled-components';

const ButtonPrimary = styled.button`
  border: none;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  font-weight: bold;
  font-size: 1.25rem;
  border-radius: ${props => props.theme.borderRadius};
  padding: 1.5rem 2.5rem;
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
  color: ${props => props.color ? props.color : props.theme.gray600};
  border: 1px solid transparent;
  border-radius: ${props => props.theme.borderRadiusSm};
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  transition: color 0.2s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    color: ${props => props.hoverColor ? props.hoverColor : props.theme.gray800};;
  }

  &:focus {
    outline: none;
  }
`;

export {ButtonPrimary, ButtonIcon};
