# zendesk-vue-boilerplate

This is boilerplate for a minimalistic product with `Vue`, `pug`, and `zat` in order to create Zendesk sidebar apps.

### Testing locally
Perform these steps:

```
yarn run build
cd dist
zat server
```

You can always run `yarn run build` while leaving `zat server` running in another terminal tab and see the new changes working after a quick refresh.

Afterwards, visit any ticket or chat url with `?zat=true` appended at the end, e.g. https://hubstaff.zendesk.com/agent/tickets/68890?zat=true.  The development app should be the only one appearing in the sidebar.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
