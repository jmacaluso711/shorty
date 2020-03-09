import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import ClipLoader from "react-spinners/ClipLoader";
import { ButtonPrimary } from './styles/ButtonStyles';

const UrlForm = ({ onSubmit, urlInput, onChange, url, urlSlug, slug, loading, toggled }) => {
  const fade = useSpring({
    opacity: toggled ? 1 : 0,
    pointerEvents: toggled ? 'auto' : 'none'
  });
  return (
    <Form onSubmit={onSubmit} style={fade}>
      <input
        ref={urlInput}
        type="text"
        name="url"
        value={url}
        placeholder="Enter URL"
        onChange={onChange}
        required
      />
      <input
        ref={urlSlug}
        type="text"
        name="slug"
        value={slug}
        placeholder="Enter Slug (optional)"
        onChange={onChange}
      />
      <Actions>
        {loading && <ClipLoader color={'#CBD5E0'} />}
        {!loading && <ButtonPrimary type="submit" disabled={!url}>Submit</ButtonPrimary>}
      </Actions>
    </Form>
  )
}

const Form = styled(animated.form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 2;

  @media(min-width: 600px) {
    flex-direction: row;
  }

  input {
    color: ${props => props.theme.white};
    font-size: 1.25rem;
    flex: 1;
    padding: 1.5rem 1.8rem;
    
    border: 1px solid ${props => props.theme.gray700};;
    border-radius: ${props => props.theme.borderRadiusSm};
    background-color: ${props => props.theme.gray700};
    transition: border 0.2s ease;
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;

    @media(min-width: 600px) {
      width: auto;
      margin-right: .75rem;
      margin-bottom: 0;
    }

    &::placeholder {
      color: ${props => props.theme.white};
    }

    &:first-of-type {
      flex: 2;
    }

    &:focus {
      border: 1px solid ${props => props.theme.gray400};
      outline: none;
    }
  }

  > button {
    width: 100%;

    @media(min-width: 600px) {
      width: auto;
    }
  }

`;

const Actions = styled.div`
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default UrlForm;
