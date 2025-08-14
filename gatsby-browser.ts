import ReactDOM from 'react-dom';
import type { GatsbyBrowser } from 'gatsby';

export const replaceHydrateFunction: GatsbyBrowser['replaceHydrateFunction'] = () => (element, container, callback) => {
  ReactDOM.render(element, container, callback);
};
