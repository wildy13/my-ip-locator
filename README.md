MY-IP-LOCATOR
============

> Fetch the location of an  ip address, city, region, country, and location while connection.

Uses [ipinfo.io](https://ipinfo.io/json) to query information.

Install
-------
	npm i --save my-ip-locator


Usage
------
```js
import getMyIp from 'my-ip-locator';


async function fetchData() {
    try {
        const data = await getMyIp();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();

```

Outputs:

```
{
	ip: '123.456.789.111',
	city: 'XXX',
	region: 'XXX',
	country: 'XXX',
	loc: '1.2345,678.1111'
}
```
License
-------

MIT - Copyright (c) [Wildy Johanes Simanjuntak](https://github.com/wildy13)
