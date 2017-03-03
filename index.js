/*  config-module

   Copyright 2017 Nate Lewis

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

   Configuration module loader that creates a default module if one does not exist.

 */

'use strict';
const fs = require('fs');

/**
 * Load the config.js file or create if it does not exist.
 *
 * @param {Object} defaultConfig
 *   The config object that will be returned
 *
 * @example
 *
 * const ConfigModule = require('config-module');
 *
 * const defaultConfig = {
 *    service: {
 *        domain: 'https://some.place.com',
 *        username: 'yourusername@yourdomain.com',
 *        password: 'supersecretpassword'
 *    },
 *    somethingElse: {
 *        this: 'the other thing'
 *    }
 * };
 *
 * const config = ConfigModule.load(defaultConfig);
 *
 * console.log(config.service.domain);
 * // will display: https://some.place.com
 */

module.exports.load = function (defaultConfig) {
    // if nothing was passed, lets make an empty object
    if (typeof (defaultConfig) === 'undefined') {
        defaultConfig = {};
    }

    // the content of the actual config.js module
    const configTemplate = 'var config = ' + JSON.stringify(defaultConfig, null, '\t') + '\nmodule.exports = config;\n';

    // try to load the config, if we can't make one
    try {
        var config = require('./config');
    } catch (e) {
        if (e instanceof Error && e.code === 'MODULE_NOT_FOUND') {
            // config not foune, make one
            fs.writeFile('./config.js', configTemplate, function (err) {
                if (err) {
                    console.log('config: could not create config file ' + err);
                    process.exit(1);
                }
            });
        } else {
            throw e;
        }
    }

      // because we made a new module, return default
    if (typeof (config) === 'undefined') {
        config = defaultConfig;
    }

    return config;
};
