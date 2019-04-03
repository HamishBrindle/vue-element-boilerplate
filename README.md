# vue-element-boilerplate

> 🙏 Let's get this thing going!

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn serve

# build for production
$ yarn build 
$ yarn build:report # for static files and a webpack-bundle analysis

# lint project (use `--fix` to auto-fix most issues)
$ yarn lint
```

## Storybook
Storybook allows us to keep track of our widget library with a launchable UI. Using Storybook we can:
  - Manually test various component states
  - Allow designers to view, and keep track of, widgets currently being used in production
  - Avoid two devs creating the same component.

``` bash
# serve or build storybook
$ yarn storybook:serve
$ yarn storybook:build # for static files
```

## Testing
We're using `jest` for our unit testing.

``` bash
# run unit testing
$ yarn test 
```

## Element UI
Since we're using Element UI, but we still want control over the colors,
we're using a special compilation process (detailed [here](https://element.eleme.io/#/en-US/component/custom-theme)) to generate our customized theme. Note: our `build` process, as well as our `serve` process,
will take care of this for us.

``` bash
$ yarn element:variables # generate a SCSS file where we can override variables
$ yarn element:generate # generate our theme's CSS files using new custom variables
```
