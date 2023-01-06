const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.update({
  message_id: `${context.params.event.message.id}`,
  channel_id: `${context.params.event.message.channel_id}`,
  content: ``,
  embeds: [{
    title: `Step 5`,
    description: `Now what you want to do is paste this into your \`hello.html\` file, this will produce a basic webpage that says \`Hello World\`\n\n\`\`\`html
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
  Hello World
  </body>
</html>\`\`\`\n\nThen you want to click \`Run\` so that you can view your webpage`,
    color: 0xC87C00,
    image: {url: `https://cdn.discordapp.com/attachments/931429162659495987/953008917078753361/image3.jpg`}
  }],
  components: [{
    type: 1,
    components: [{
      style: 4,
      label: `Back`,
      custom_id: `next_3`,
      disabled: false,
      type: 2
    },
    {
      style: 3,
      label: `Next Step`,
      custom_id: `next_5`,
      disabled: false,
      type: 2
    }]
  }]
});