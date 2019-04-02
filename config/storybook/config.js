/* eslint-disable no-unused-vars */
/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { configure } from '@storybook/vue';
import '!style-loader!css-loader!element-ui/lib/theme-chalk/index.css';
import '../../src/plugins/element';

/**
 * Import components used in Storybook here...
 */
import Button from '../../src/components/Button.vue';

/**
 * Register those components here... Make sure tag matches our standard
 */
Vue.component('m-button', Button);

const req = require.context('../../src/stories', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
