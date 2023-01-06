const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.update({
  message_id: `${context.params.event.message.id}`,
  channel_id: `${context.params.event.message.channel_id}`,
  content: ``,
  embeds: [{
    title: `Step 2`,
    description: `Now after you click create New Web Service you should be given the screen below, set the name for your project and then click \`Create Project\`\n\n**Note:** Whatever you name your project will be part of your website's URL!`,
    image: {url: `https://cdn.discordapp.com/attachments/931429162659495987/952456206008598568/image.jpg`},
    color: 0xC87C00
  }],
  components: [{
    type: 1,
    components: [{
      style: 4,
      label: `Back`,
      custom_id: `htmlStart2`,
      disabled: false,
      type: 2
    },
    {
      style: 3,
      label: `Next Step`,
      custom_id: `next_2`,
      disabled: false,
      type: 2
    }]
  }]
});