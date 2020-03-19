import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import UrlDetail from './components/UrlDetail';

const fakeUrl = {
  url: 'http://google.com',
  slug: 'slug',
  short_url: 'http://short.com'
}

describe('UrlDetail', () => {
  it('renders and displays the url properly', () => {
    const wrapper = shallow(<UrlDetail url={fakeUrl} />);
    const url = wrapper.find('h3');
    expect(url.text()).toBe(fakeUrl.url);
  });

  it('renders and displays short url properly', () => {
    const wrapper = shallow(<UrlDetail url={fakeUrl} />);
    const short_url = wrapper.find('p a');
    expect(short_url.text()).toBe(fakeUrl.short_url);
  });

  it('renders and displays slug properly', () => {
    const wrapper = shallow(<UrlDetail url={fakeUrl} />);
    const slug = wrapper.find('.url-detail-slug');
    expect(slug.text()).toBe(fakeUrl.slug);
  });

  it('renders and displays the remove button properly', () => {
    const wrapper = shallow(<UrlDetail url={fakeUrl} />);
    const removeButton = wrapper.find('ButtonIcon');
    expect(removeButton).toHaveLength(1);
  });
});
