import { render } from 'react-dom';
import { renderedComponent } from './Main';

const rootContainer = document.getElementById('content');

render(renderedComponent, rootContainer);
