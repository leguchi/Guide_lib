const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.1'].destroy({
  channel_id: `${context.params.event.message.channel_id}`
});