# config-module

Configuration loader that creates a default config.js module if one does not exist.

In general there is two states of the config.js.  Its either not present and creates one with the default configuration, or if it's already there, it will return the existing saved configuration.

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

