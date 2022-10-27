export class HttpServices {
    // constructor(baseApiPath = "") {
    // this.baseApi = baseApiPath;
    // }
    async get(path) {
    const response = await fetch(`${path}`);
    return response.json();
    }
    async post(path, body) {
    const stringifieData = JSON.stringify(body);
    const response = await fetch(`${path}`, {
    method: "POST",
    body: stringifieData,
    headers: {
    "Content-Type": "application/json",
    },
    });
    return response.json();
    }
    }