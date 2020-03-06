import React, { Component, createRef } from 'react';
import { PROXY, API_URL, HEADERS } from '../constants';
import UrlList from './styles/UrlListStyles';
import UrlDetail from './UrlDetail';
import { ButtonPrimary } from './styles/ButtonStyles';
import { Form } from './styles/UrlFormStyles';

export default class Main extends Component {
  state = {
    url: '',
    slug: '',
    urlList: [],
    loading: false
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
        headers: HEADERS
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
      headers: HEADERS,
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
    } catch (err) {
      console.error(err);
    }

  }

  removeUrl = async (url) => {
    const options = {
      method: 'DELETE',
      headers: HEADERS,
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
      <main>
        <section>
          <Form onSubmit={this.onSubmit}>
            <input
              ref={this.urlInput}
              type="text"
              name="url"
              value={url}
              placeholder="Enter URL"
              onChange={this.onChange}
              required
            />
            <input
              ref={this.urlSlug}
              type="text"
              name="slug"
              value={slug}
              placeholder="Enter Slug (optional)"
              onChange={this.onChange}
            />
            <ButtonPrimary type="submit" disabled={this.state.url === ''}>Submit</ButtonPrimary>
          </Form>
        </section>
        <section>
          <h2>All Links</h2>
          <UrlList>
            {urlList.map((url, index) => (
              <UrlDetail key={index} url={url} removeUrl={this.removeUrl} />
            ))}
          </UrlList>
        </section>
      </main>
    )
  }
}