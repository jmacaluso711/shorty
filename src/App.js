import React, { Component, createRef } from 'react';

const PROXY = `https://cors-anywhere.herokuapp.com/`;
const API_URL = `http://api.bely.me`;
const API_KEY = `5d51945e59e81470096ed99540d1771e`;

class UrlForm extends Component {
  state = {
    url: '',
    urlList: []
  }

  constructor(props) {
    super(props)
    this.urlInput = createRef();
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { url } = this.state;
    const data = { 
      url, 
    };

    fetch(`${PROXY}${API_URL}/links`, {
      method: 'POST',
      headers: {
        'GB-Access-Token': `${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(blob => blob.json())
    .then(res => {
      this.setState({
        urlList: [...this.state.urlList, res]
      });
      
      this.urlInput.current.value = '';
    });

  }
  

  render() {
    const { url, urlList } = this.state;

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
          <button type="submit">Submit</button>
        </form>
        <ul>
          {urlList.map((url, index) => (
            <li key={index}>
              <p>url: {url.url}</p>
              <p>short: {url.short_url}</p>
              <p>slug: {url.slug}</p>
            </li>
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
