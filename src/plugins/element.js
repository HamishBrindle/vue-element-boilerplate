import Vue from 'vue';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import {
  Container,
  Header,
  Main,
  Row,
  Col,
  Button,
} from 'element-ui';
import '@/assets/styles/vendor/_element-ui.scss';

locale.use(lang);

Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Row);
Vue.use(Col);
Vue.use(Button);
