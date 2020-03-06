import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { ButtonIcon } from './styles/ButtonStyles';

const UrlDetail = ({ url, removeUrl }) => (
  <li>
    <div>
      <h2>{url.url}</h2>
      <p><a href="{url.short_url}">{url.short_url}</a></p>
      <p>{url.slug}</p>
    </div>
    <ButtonIcon onClick={() => removeUrl(url)}><AiFillDelete /></ButtonIcon>
  </li>
);

export default UrlDetail;