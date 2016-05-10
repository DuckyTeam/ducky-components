/* eslint-env node */
/* eslint-disable no-process-env, no-console */

import config from './webpack.config.js';
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackMiddleware from 'webpack-dev-middleware';
const DEFAULT_PORT = 3005;
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = process.env.PORT ? process.env.PORT : DEFAULT_PORT;
const app = express();

if (isDeveloping) {
    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        contentBase: 'src',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    app.get('*', (req, res) => {
        middleware.fileSystem.readFile(path.join(__dirname, 'dist/index.html'), (err, data) => {
            if (err) {
                res.write(err);
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    });
} else {
    app.use(express.static(path.join(__dirname, '/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
}

app.listen(port, '0.0.0.0', (err) => {
    if (err) {
        console.log(err);
    }
    console.info(
        '==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.',
        port,
        port
    );
});
