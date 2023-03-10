var lpMethods = {
    lpGetAuthenticationToken: function(cb) {
        console.log("LP asked for id_token or auth code in Code Flow");
        // Do your magic…
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let payload = {
            iss: 'https://auth.archzero.dev/realms/LivePerson',
            sub: 'fb037d90-a070-4c46-98a2-b36a17aa1d4b'
        }

        let body = JSON.stringify({ payload, ttl: 600 });

        let requestOptions = {
            method: 'POST',
            headers, body
        };
        fetch(`https://auth.archzero.dev/realms/LivePerson/protocol/openid-connect/token`, requestOptions)
            .then(response => response.text().then(text => cb(text)))
            .catch(error => console.log('error', error));
    }
};