import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { ButtonIcon } from './styles/ButtonStyles';
import ClipLoader from "react-spinners/ClipLoader";

const UrlDetail = ({ url, removeUrl, isRemoving }) => (
  <li>
    <div>
      <h3>{url.url}</h3>
      <p><a href="{url.short_url}">{url.short_url}</a></p>
      <p>{url.slug}</p>
    </div>
    <ButtonIcon onClick={() => removeUrl(url)}>
      { /*isRemoving && <ClipLoader /> */}
      <AiFillDelete />
    </ButtonIcon>
  </li>
);

export default UrlDetail;
