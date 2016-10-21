import socket from 'socket.io';
import Twitter from 'node-tweet-stream';
const io = socket();
io.on('connection', (client) => {
    client.on('disconnect', () => {});
});
io.listen(3000);

console.log('Server Started');

const t = new Twitter({
    consumer_key: 'CcZEqQ8iKEMVU9P9VLDigFYpZ',
    consumer_secret: 'zPHN0EFlueYpAgDi1OBg8rxZfSOsK0nPglp4MaOgFtw0jRfn2l',
    token: '388733711-QwvYXeMnn5CmFF5rp10iwdbHyTxztVPoxFG5sVoW',
    token_secret: 'cxyJsDOZq455gG10rXnjVgTtA8WXX1xMj8c5Y4LTcPcva'
});

t.on('tweet', (tweet) => {
    console.log(tweet.text);
    io.emit('tweet', tweet);
});

t.track('javascript');
t.track('nodejs');
