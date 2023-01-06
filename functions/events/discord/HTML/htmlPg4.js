const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.update({
  message_id: `${context.params.event.message.id}`,
  channel_id: `${context.params.event.message.channel_id}`,
  content: ``,
  embeds: [{
    title: `Step 4`,
    description: `Now delete everything in that file, it should just be a white background now.`,
    image: {url: `https://cdn.discordapp.com/attachments/931429162659495987/953005735418134588/unknown.png`},
    color: 0xC87C00
  }],
  components: [{
    type: 1,
    components: [{
      style: 4,
      label: `Back`,
      custom_id: `next_2`,
      disabled: false,
      type: 2
    },
    {
      style: 3,
      label: `Next Step`,
      custom_id: `next_4`,
      disabled: false,
      type: 2
    }]
  }]
});