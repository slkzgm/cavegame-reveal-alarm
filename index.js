const player = require('play-sound')(opts = {} );

const soundFilePath = './alert.mp3';

const YOUR_WEB3_TOKEN = '';
const YOUR_CAVE_ID = 231;

function triggerAlert() {
    player.play(soundFilePath, function(err){
        if (err) throw err;
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let lastPercent = 0;

(async () => {
    let done = false;
    while (!done) {
        const req = await fetch("https://cave-api.wolf.game/game/caves", {
            "headers": {
                "accept": "application/json",
                "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
                "if-none-match": "W/\"551-JsryuFx6ef1sLbVLFBuFVjeLPO0\"",
                "priority": "u=1, i",
                "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "web3-token": YOUR_WEB3_TOKEN
            },
            "referrer": "https://cave.wolf.game/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "omit"
        });
        const resp = (await req.json()).filter(cave => cave.id === YOUR_CAVE_ID);
        const { mapFileVisible, found, items } = resp[0];

        const totalSum = Object.values(found).reduce((sum, value) => sum + value, 0);
        const percent = ((totalSum * 100) / items).toFixed(2);

        if (percent > lastPercent) {
            console.log(totalSum);
            console.log(mapFileVisible);
            console.log(percent);
            console.log('\n');
            lastPercent = percent;
            if (mapFileVisible) {
                triggerAlert();
                done = mapFileVisible;
            }
        }
        await sleep(2000);
    }
})()
