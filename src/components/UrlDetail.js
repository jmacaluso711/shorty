import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { ButtonIcon } from './styles/ButtonStyles';

const UrlDetail = ({ url, removeUrl }) => (
  <li>
    <div>
      <h3>{url.url}</h3>
      <p><a href={url.short_url}>{url.short_url}</a></p>
      <p className="url-detail-slug">{url.slug}</p>
    </div>
    <ButtonIcon onClick={() => removeUrl(url)}>
      <AiFillDelete />
    </ButtonIcon>
  </li>
);

export default UrlDetail;
