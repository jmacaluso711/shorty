import React from 'react';
import {useSpring} from 'react-spring';
import { Form, Actions} from './styles/UrlFormStyles';
import { ButtonPrimary } from './styles/ButtonStyles';
import ClipLoader from "react-spinners/ClipLoader";

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

export default UrlForm;
