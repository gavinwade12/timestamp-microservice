Timestamp Microservice
=========================

Make a `GET` request to `/:date` with a date to be processed.

The response will have the form:

```
{
  "unix": 1450137600000,
  "natural": "December 15, 2015"
}
```

If the date cannot be processed, both properties on the response object will be `null`.
