import React, { Component, createRef } from 'react';
import { PROXY, API_URL, HEADERS } from '../constants';
import UrlList from './styles/UrlListStyles';
import { ButtonPrimary } from './styles/ButtonStyles';
import { Form, Actions } from './styles/UrlFormStyles';
import { MainLayout, FormLayout, UrlsLayout } from './styles/LayoutStyles';
import ClipLoader from "react-spinners/ClipLoader";
import UrlDetail from './UrlDetail';

const CurrentUrl = ({urlList}) => (
  <div></div>
);

export default class Main extends Component {
  state = {
    url: '',
    slug: '',
    urlList: [],
    loading: false,
    isRemoving: false,
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
      this.setState({ loading: true });
      const blob = await fetch(`${PROXY}${API_URL}/links`, options);
      const res = await blob.json();
      this.setState({
        urlList: [...this.state.urlList, res]
      });
      this.setState({ loading: false, url: '' });
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
      this.setState({ isRemoving: true });
      const blob = await fetch(`${PROXY}${API_URL}/links/${url.slug}`, options);
      if (blob.status === 204) {
        this.loadUrls();
      }
      this.setState({ isRemoving: false });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { url, slug, urlList, loading, isRemoving } = this.state;
    return (
      <MainLayout>
        <FormLayout>
          <div>
            <h1>Hey, Shorty</h1>
            <p>Welcome back, enter your url below and we'll shorten it.</p>
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
              <Actions>
                {loading && <ClipLoader color={'#CBD5E0'}/>}
                {!loading && <ButtonPrimary type="submit" disabled={!this.state.url}>Submit</ButtonPrimary>}
              </Actions>
            </Form>
            <CurrentUrl urlList={urlList}/>
          </div>
        </FormLayout>
        <UrlsLayout>
          <h2>All Links</h2>
          <UrlList>
            {urlList.map((url, index) => (
              <UrlDetail key={index} url={url} removeUrl={this.removeUrl} isRemoving={isRemoving} />
            ))}
          </UrlList>
        </UrlsLayout>
      </MainLayout>
    )
  }
}
