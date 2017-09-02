export function get(api) {
    let myFetchOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };

    let res = fetch("http://192.168.1.164:5000" + api, myFetchOptions).then(res => res.json()).then(
        json => {
            return json.data
        }
    );

    return res;
}

export function post(api, data) {

    let myFetchOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',

        },
        body: JSON.stringify({
            data,
        })

    };

    let res = fetch("http://192.168.1.164:5000" + api, myFetchOptions).then(res => res.json()).then(
        json => {
            return json.data
        }
    );

    return res;
}

export function put(api, data){
    let myFetchOptions = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            data,
        })

    };

    let res = fetch("http://192.168.1.164:5000" + api, myFetchOptions).then(res => res.json()).then(
        json => {
            return json.data
        }
    );

    return res;
}