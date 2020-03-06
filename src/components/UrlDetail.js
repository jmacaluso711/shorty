import React from 'react'

const UrlDetail = ({ url, removeUrl }) => (
  <li>
    <p>url: {url.url}</p>
    <p>short: {url.short_url}</p>
    <p>slug: {url.slug}</p>
    <button onClick={() => removeUrl(url)}>delete</button>
  </li>
);

export default UrlDetail;