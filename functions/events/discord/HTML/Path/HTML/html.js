const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.update({
  message_id: `${context.params.event.message.id}`,
  channel_id: `${context.params.event.message.channel_id}`,
  content: ``,
  embeds: [{
    title: `HTML`,
    description: `HTML (Hypertext Markup Language) is a great way to make your own websites! Obviously you don't just want your website to say \`Hello World\` so we are going to begin with HTML basics.\n\n*You can also learn about HTML at [W3Schools](https://www.w3schools.com/)*`,
    color: 0x0073C8,
  }],
    components: [{
      type: 1,
      components: [{
        style: 4,
        label: `Back`,
        type: 2,
        custom_id: `next_5`
      },
      {
        style: 3,
        label: `Begin`,
        custom_id: `all_html_1`,
        type: 2
      }]
    }]
});