import React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import { AiFillCloseCircle } from "react-icons/ai";
import { ButtonIcon } from './styles/ButtonStyles';

const CurrentUrl = ({ url, toggled, closeCurrent }) => {
  const fade = useSpring({
    opacity: toggled ? 1 : 0
  });
  return (
    <CurrentUrlStyles style={fade}>
      <div>{url.short_url}</div>
      <ButtonIcon onClick={closeCurrent}><AiFillCloseCircle /></ButtonIcon>
    </CurrentUrlStyles>
  )
};

const CurrentUrlStyles = styled(animated.div)`
  position: absolute;
  color: ${props => props.theme.white};
  font-size: 1.5rem;
  font-weight: bold;
  width: 100%;
  bottom: 0;
  padding: 1rem;
  background-color: ${props => props.theme.black};
  z-index: 1;
  display: flex;
  align-items: center;

  div {
    flex: 1;
  }
`;

export default CurrentUrl;

