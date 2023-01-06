const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let channel = await lib.discord.guilds['@0.2.3'].channels.create({
  guild_id: `${context.params.event.guild_id}`,
  name: `Guide-${context.params.event.member.user.username}`,
  type: 0,
  topic: `${context.params.event.member.user.username}'s Guide channel!`
});
await lib.discord.channels['@0.3.1'].messages.create({
  channel_id: `${channel.id}`,
  content: `**Finished?**`,
  components: [{
    type: 1,
    components: [{
      label: `Exit`,
      custom_id: `finish`,
      type: 2,
      style: 4
    }]
  }]
});
await lib.discord.channels['@0.3.0'].messages.create({
  channel_id: channel.id,
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