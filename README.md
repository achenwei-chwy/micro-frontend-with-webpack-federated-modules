# Purpose
This is a small demo to show case how to wire a minimal setup of two modules integrated into an application.

# Development
1. go in each `xxx-app` folder and run `yarn`
2. go in each `xxx-app` folder and run `yarn start` for development localhost
3. view localhost:8083 for injected module of `detail-page-app` and `header-app` into `home-app`

# Gotchas
An application need to be restarted if webpack.config.js is changed
To update change from a remote, in most case, you just need to do a container app refresh(i.e. in this case, its `home-app`)

