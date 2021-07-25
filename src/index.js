import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Main } from './Main';

const mainComponent = (
    <StrictMode>
        <Main />
    </StrictMode>
);
const rootContainer = document.getElementById('content');

render(mainComponent, rootContainer);
