import './styles/reset.css';

import { createHeader } from './app/header/header';
import { saveDataToBase } from './api/sava-date';

import { mock } from './mock/mock-date';

saveDataToBase(mock)

document.body.replaceChildren(createHeader())
