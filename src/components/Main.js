import React, { Component, createRef } from 'react';
import { PROXY, API_URL, HEADERS } from '../constants';
import styled from 'styled-components';
import { MainLayout, FormLayout, UrlsLayout } from './styles/LayoutStyles';
import ClipLoader from "react-spinners/ClipLoader";
import UrlDetail from './UrlDetail';
import CurrentUrl from './CurrentUrl';
import UrlForm from './UrlForm';


export default class Main extends Component {
  state = {
    url: '',
    slug: '',
    urlList: [],
    currentUrl: {},
    loading: false,
    isRemoving: false,
    urlSuccess: false,
    formToggled: true
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
        urlList: [...this.state.urlList, res],
        currentUrl: {...res},
        urlSuccess: true,
        loading: false,
        formToggled: false
      });
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

  closeCurrent = () => {
    this.setState({
      formToggled: true,
      urlSuccess: false,
      url: ''
    });
    this.urlInput.current.value = '';
    this.urlSlug.current.value = '';
  }

  copyToClip = (e) => {
    console.log('copy');
  }

  render() {
    const { 
      url, 
      slug, 
      urlList, 
      currentUrl,
      loading, 
      isRemoving, 
      urlSuccess, 
      formToggled 
    } = this.state;

    return (
      <MainLayout>
        <FormLayout>
          <div>
            <h1>Hey, Shorty</h1>
            <p>Welcome back, enter your url below and we'll shorten it.</p>
            <UrlForm 
              onSubmit={this.onSubmit}
              urlInput={this.urlInput}
              onChange={this.onChange}
              url={url}
              urlSlug={this.urlSlug}
              slug={slug}
              loading={loading}
              toggled={formToggled}
            />
            <CurrentUrl 
              url={currentUrl} 
              toggled={urlSuccess} 
              closeCurrent={this.closeCurrent}
              copyToClip={this.copyToClip}
            />
          </div>
        </FormLayout>
        <UrlsLayout>
          <div>
            <header>
              <h2>All Links</h2>
              {isRemoving && <ClipLoader />}
            </header>
            <UrlListContainer>
              {urlList.map((url, index) => (
                <UrlDetail key={index} url={url} removeUrl={this.removeUrl} isRemoving={isRemoving} />
              ))}
            </UrlListContainer>
          </div>
        </UrlsLayout>
      </MainLayout>
    )
  }
}


const UrlListContainer = styled.ul`
  border: 1px solid ${props => props.theme.gray400};
  background-color: ${props => props.theme.white};

  li {
    margin: 0;
    padding: 1rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.gray400};
    position: relative;

    &:last-child {
      border-bottom: none;
    }

    div {
      flex: 1;
    }

    a {
      color: ${props => props.theme.secondary};
      
      &:hover {
        color: ${props => props.theme.secondaryDark}
      }
    }
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    margin: .5rem 0;
    font-size: 1.2rem;
  }
`;
