const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.update({
  message_id: `${context.params.event.message.id}`,
  channel_id: `${context.params.event.message.channel_id}`,
  content: ``,
  embeds: [{
    title: `Step 3`,
    description: `Now that you're in your project you want to click the \`www\` file, this should show a new file called \`hello.html\`, click it`,
    image: {url: `https://cdn.discordapp.com/attachments/931429162659495987/952700364497498192/image2.jpg`},
    color: 0xC87C00
  }],
  components: [{
    type: 1,
    components: [{
      style: 4,
      label: `Back`,
      custom_id: `next_1`,
      disabled: false,
      type: 2
    },
    {
      style: 3,
      label: `Next Step`,
      custom_id: `next_3`,
      disabled: false,
      type: 2
    }]
  }]
});