import { createApp } from 'vue';
import '@/assets/scss/main.scss';
import App from './App.vue';
import store from './store';
import router from './router';
import i18n from './locales';
import helpers from './helpers';
const app = createApp(App);

import AtomButton from './components/AtomButton';
import AtomDivider from './components/AtomDivider';
import AtomImage from './components/AtomImage';
import AtomLoader from './components/AtomLoader';
import AtomNoDataCard from './components/AtomNoDataCard';
import MoleculeCounter from './components/MoleculeCounter';
import OrganismCard from './components/OrganismCard';
import OrganismModal from './components/OrganismModal';

app.component('AtomButton', AtomButton);
app.component('AtomDivider', AtomDivider);
app.component('AtomImage', AtomImage);
app.component('AtomLoader', AtomLoader);
app.component('AtomNoDataCard', AtomNoDataCard);
app.component('MoleculeCounter', MoleculeCounter);
app.component('OrganismCard', OrganismCard);
app.component('OrganismModal', OrganismModal);

app.config.globalProperties.helpers = helpers;
app.use(router).use(store).use(i18n).mount('#app');
