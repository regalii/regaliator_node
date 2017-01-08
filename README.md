# Regalii Node.js Client

A Node.js client for connecting to the Regalii API.

## Usage

Example:

```js
const Regaliator = require('regaliator');

const client = new Regaliator(
  'https://test.casiregalii.com',
  processs.env.REGALII_API_KEY,
  processs.env.REGALII_SECRET
);

client.account().then(({ body }) => {
  console.log(body)
});

```

All methods of the `object` regaliator returns a `Promise`. In case of success,
3 arguments are available:
* `body`: The decoded JSON response ;
* `req`: The request emitted ;
* `res`: The response returned by server.

For instance, to get all arguments:

```js
client.account().then(({ body, req, res }) => console.log(body));
```

The order doesn't matter, only names count.

## Examples

Examples of some common use-cases:

### Creating a credential bill

```js
client.createCredentialsBill(12376, 'login', 'challengeme').then(({ body }) => {
  console.log('Created bill ' + body.id);
});
```

### Polling for while bill updating

Coming soon.

### Answering MFA Challenge

Coming soon.

## Test

```
npm test
```

## Todo

* Factor test code:
  * Repetitive parts ;
  * Fake server init.
* Expose some private method as function ;
* Implement missing methods existing on Ruby client.
