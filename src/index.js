import { render } from 'react-dom';
import { renderedComponent } from './Main';

const rootContainer = document.getElementById('page');

render(renderedComponent, rootContainer);
