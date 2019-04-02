/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

storiesOf('Button', module)
  .add('with text', () => ({
    template: '<m-button @click="action">Hello Button</m-button>',
    methods: { action: action('clicked') },
  }))
  .add('with some emoji', () => ({
    template: '<m-button @click="action">😀 😎 👍 💯</m-button>',
    methods: { action: action('clicked') },
  }));
