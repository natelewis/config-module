# config-module

Configuration loader that creates a default config.js module if one does not exist.

The config.js module it creates is either not present and one is created with the configuration passed, or if it's already there, it will return the existing saved configuration.

Once the config.js has been created on its first run, you can then change its values to meet your requirements.

### Example Usage:

```javascript
const ConfigModule = require('config-module');

// load config or use the default configuration 
// and save it as config.js
const config = ConfigModule.load({
   service: {
       domain: 'https://some.place.com',
       username: 'yourusername@yourdomain.com',
       password: 'supersecretpassword'
   },
   somethingElse: {
       this: 'the other thing'
   }
});

console.log(config.service.domain); 
// will return: https://some.place.com
```

