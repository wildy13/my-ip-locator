import fetch from 'node-fetch';

function getMyIp() {
    fetch('https://ipinfo.io/json')
        .then(response => response.json())
        .then(data => {
            return {
                ipAddress: data.ip,
                city: data.city,
                region: data.region,
                country: data.country,
                loc: data.loc
            }
        })
        .catch(error => {
            return error
        });
}

module.exports = getMyIp;
