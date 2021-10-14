import { createI18n } from 'vue-i18n';
import tr from './messages/tr.json';
import en from './messages/en.json';

export default createI18n({
  locale: 'en',
  messages: { en, tr },
});
