#!/bin/bash

# exit on errors
set -e

# copy staging config to the latest.js (which is used in nuxt.config.js)
cp ./config/staging.js ./config/latest.js

# node env
export NODE_ENV=production 


nuxt generate --quiet --fail-on-error