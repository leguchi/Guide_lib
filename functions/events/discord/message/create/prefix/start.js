const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: `**You ready to start your Autocode journey?!**\n\n__Prerequisites__\n\n> Autocode Account\n> Discord Account\n\n*Guide made by @leguchi#8173 and @RoldGold#1234!*\n\n**Choose Your Path**`,
  components: [
    {
    type: 1,
    components: [
      {
        style: 1,
        label: `Discord Bot`,
        custom_id: `bot`,
        disabled: false,
        type: 2
      },
      {
        style: 3,
        label: `HTML Website`,
        custom_id: `html`,
        disabled: false,
        type: 2
      }
    ]
  }
],
message_reference: {message_id: context.params.event.id}
});
