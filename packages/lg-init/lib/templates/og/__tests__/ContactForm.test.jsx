import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ContactForm from '../components/ContactForm'
import { data } from '../utils/data';

it('Contact components renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactForm theme={data.theme} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Contact component renders unchanged', () => {
  const tree = renderer.create(<ContactForm theme={data.theme} />).toJSON();
  expect(tree).toMatchSnapshot();
});
