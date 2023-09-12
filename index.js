import fetch from 'node-fetch';

export default async function getMyIp() {
    try {
        const response = await fetch('https://ipinfo.io/json');
        const data = await response.json();

        return {
            ipAddress: data.ip,
            city: data.city,
            region: data.region,
            country: data.country,
            loc: data.loc
        };
    } catch (error) {
        throw error; // Rethrow the error to maintain the promise chain
    }
}
