import socket from 'socket.io';
import Twitter from 'node-tweet-stream';
import twitterConf from './twitter.conf.json';

const io = socket();
io.on('connection', (client) => {
    client.on('disconnect', () => {});
});
io.listen(3000);

const t = new Twitter(twitterConf.credentials);

t.on('tweet', (tweet) => {
    console.log(tweet.text);
    io.emit('tweet', tweet);
});

twitterConf.streams.map(stream => t.track(stream));
