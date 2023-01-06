const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: `**Invite me!**\n\nClick the button below to invite me to other servers!`,
  components: [
    {
    type: 1,
    components: [
      {
        style: 5,
        label: `Invite`,
        url: `https://discord.com/oauth2/authorize?client_id=908413318694309928&scope=identify%20bot%20applications.commands&permissions=8`,
        disabled: false,
        type: 2
      },
    ]
  }
],
message_reference: {message_id: context.params.event.id}
});
