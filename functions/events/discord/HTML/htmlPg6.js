const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
await lib.discord.channels['@0.3.0'].messages.update({
  message_id: `${context.params.event.message.id}`,
  channel_id: `${context.params.event.message.channel_id}`,
  content: ``,
  embeds: [{
    title: `Examples and More`,
    description: `Now continue your journey by looking at some of these explained examples that come after this! Good luck!`,
    color: 0x0073C8,
  }],
    components: [{
      type: 1,
      components: [{
        style: 4,
        label: `Back`,
        type: 2,
        custom_id: `next_4`
      },
      {
        style: 3,
        label: `Continue`,
        custom_id: `all_html_1`,
        type: 2
      }]
    }]
});