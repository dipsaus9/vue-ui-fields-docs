#!/bin/bash

# exit on errors
set -e

# copy production config to the latest.js (which is used in nuxt.config.js)
cp ./config/production.js ./config/latest.js

cp ./config/netlify_headers ./static/_headers

# node env
export NODE_ENV=production

nuxt generate