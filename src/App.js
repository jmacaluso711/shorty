import React, { Component, createRef } from 'react';

const PROXY = `https://cors-anywhere.herokuapp.com/`;
const API_URL = `http://api.bely.me`;
const API_KEY = `5d51945e59e81470096ed99540d1771e`;
const headers = {
  'GB-Access-Token': `${API_KEY}`,
  'Content-Type': 'application/json',
};

const UrlDetail = ({ url, removeUrl }) => (
  <li>
    <p>url: {url.url}</p>
    <p>short: {url.short_url}</p>
    <p>slug: {url.slug}</p>
    <button onClick={() => removeUrl(url)}>delete</button>
  </li>
);

class UrlForm extends Component {
  state = {
    url: '',
    slug: '',
    urlList: []
  }

  constructor(props) {
    super(props)
    this.urlInput = createRef();
    this.urlSlug = createRef();
  }

  async componentDidMount() {
    this.loadUrls();
  }

  loadUrls = async () => {
    try {
      const blob = await fetch(`${PROXY}${API_URL}/links`, {
        headers: headers
      });
      const res = await blob.json();
      this.setState({
        urlList: [...res]
      });
    } catch (err) {
      console.error(err);
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = async (e) => {
    e.preventDefault();

    const { url, slug } = this.state;
    let params;

    if (slug !== '') {
      params = { url, slug };
    } else {
      params = { url }
    }

    const options = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(params)
    } 

    try {
      const blob = await fetch(`${PROXY}${API_URL}/links`, options);
      const res = await blob.json();
      this.setState({
        urlList: [...this.state.urlList, res]
      });
      this.urlInput.current.value = '';
      this.urlSlug.current.value = '';
    } catch(err) {
      console.error(err);
    }

  }
  
  removeUrl = async (url) => {
    const options = {
      method: 'DELETE',
      headers: headers,
    }

    try {
      const blob = await fetch(`${PROXY}${API_URL}/links/${url.slug}`, options);
      if (blob.status === 204) {
        this.loadUrls();
      }
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { url, slug, urlList } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input 
            ref={this.urlInput}
            type="text" 
            name="url"
            value={url}
            placeholder="Enter URL"
            onChange={this.onChange}
          />
          <input
            ref={this.urlSlug}
            type="text"
            name="slug"
            value={slug}
            placeholder="Enter Slug (optional)"
            onChange={this.onChange}
          />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {urlList.map((url, index) => (
            <UrlDetail key={index} url={url} removeUrl={this.removeUrl}/>
          ))}
        </ul>
      </div>
    )
  }
}




function App() {
  return (
    <div className="App">
      <UrlForm />
    </div>
  );
}

export default App;
