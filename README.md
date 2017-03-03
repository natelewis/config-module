# config-module

Configuration module loader that creates a default config.js module if one does not exist.

In general there is two states of the config.js.  Its either not present and creates it with the default configuration, or if its already there and will pull in the configuration already saved.

### Example Usage:

```javascript
const ConfigModule = require('config-module');
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

