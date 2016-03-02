#!/usr/bin/env node

/* eslint-env node */
require("babel-register")({
    presets: [
        "es2015",
        "stage-0"
    ]
});
require("babel-polyfill");
require("./server.es6");
