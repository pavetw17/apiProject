1.req.body empty on posts

In Postman of the 3 options available for content type select "X-www-form-urlencoded" and it should work.
Also to get rid of error message replace:

```javascript
app.use(bodyParser.urlencoded())
```

https://stackoverflow.com/questions/24543847/req-body-empty-on-posts

With Postman, to test HTTP post actions with a raw JSON data payload, select the raw option and set the following header parameters:

```javascript
Content-Type: application/json
```
<br/>
Also, be sure to wrap any strings used as keys/values in your JSON payload in double quotes.<br/>
The body-parser package will parse multi-line raw JSON payloads just fine.<br/>

```javascript
{
    "foo": "bar"
}
```
<br/>
2. Configuring connect to Redis server
app.js

var redis = require('redis');
var client = redis.createClient(); //creates a new client
By default, redis.createClient() will use 127.0.0.1 and 6379 as the hostname and port respectively. If you have a different host/port you can supply them as following:

var client = redis.createClient(port, host);
