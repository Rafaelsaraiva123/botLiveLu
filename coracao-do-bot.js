const tmi = require('tmi.js');

const client = new tmi.Client({
    options: { debug: true },
    connection: { reconnect: true },
    identity: {
        username: 'botlivelu',
        password: 'oauth:dw3akn8xcwoj26ln2ireq92q9afg0w'
    },
    channels: [ 'xchimy' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    // Ignore echoed messages.
    if(self || !message.startsWith("!")) {
        return;
    }
    const args = message.slice(1).split(' ');
    const command = args.shift().toLowerCase();

    if(command === 'echo') {
        client.say(channel, `@${tags.username}, you said: "${args.join(' ')}"`);
    } else if (command === 'oi'){
        client.say(channel, `@${tags.username}, Oi!!!!`);
    } else if (command === 'quemEVoce'){
        client.say(channel, `@${tags.username}, Eu sou o bot supremo dessa live, o nightbot não é nada perto de mim, HAHAHAHAHAHAHA!!!!`);
    }

    });
