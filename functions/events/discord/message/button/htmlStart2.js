const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.update({
  message_id: context.params.event.message.id,
  channel_id: context.params.event.channel_id,
  content: `<@${context.params.event.member.user.id}> Here's your guide! Good luck!!`,
  embeds: [{
    title: `Step 1`,
    description: `Before we can make our website we need to make a place to make the website, do this by going to your [Autocode Dashboard](https://autocode.com/dashboard) and clicking \`New Web Service\`!`,
    color: 0xC8F00,
    image: {url: `https://cdn.discordapp.com/attachments/931429162659495987/952452570343944192/Screenshot_2022-03-12_222456.jpg`}
  }],
  components: [{
    type: 1,
    components: [{
      style: 3,
      label: `Next Step`,
      custom_id: `next_1`,
      type: 2
    }]
  }]
});