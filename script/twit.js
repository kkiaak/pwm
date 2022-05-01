var Twit = require('twit');
const fs = require('fs');

exports.getTweet = () => {
    var T = new Twit({
        consumer_key: 'rHN5uDnuB6ACWf8FaIe6h34ZU',
        consumer_secret: '6UmmQoGrM6SVjBanocZX5xBz2pL5P2g3R2eZWN6dLiljJtbjpw',
        app_only_auth: true,    
    });

    T.get('search/tweets', { q: 'agesci', count: 15 }, function (err, data, response) {
        fs.writeFile(__dirname + '/json/twitt.json', JSON.stringify(data), 'utf8', (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Json Tweet -agesci- Saved")
            }
        });
    });
    T.get('search/tweets', { q: 'scouting', count: 15 }, function (err, data, response) {
        fs.writeFile(__dirname + '/json/twitt.json', JSON.stringify(data), 'utf8', (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Json Tweet -scouting- Saved")
            }
        });
    });
};
