const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
await lib.discord.channels['@0.3.0'].messages.update({
  message_id: `${context.params.event.message.id}`,
  channel_id: `${context.params.event.message.channel_id}`,
  content: ``,
  embeds: [{
    title: `More HTML Tags`,
    description: `Here are a few more tags that you can use:\n\n\`\`\`html\n
    <button> <!--Make a button that you can click-->
    <input> <!--Make a text box/checkbox/button-->
    <ol> and <ul> <!--Make a bullet or numbered list-->
    <img> <!--Make an image-->
    \`\`\`\Here are the tags put together on a website: \`\`\`html\n
    <html>
      <head>
        <title>Website title</title>
      </head>
      <body>
        <ol>
          <li>Hello</li>
          <li>Hi</li>
          <li>Sup</li>
        </ol>
        <ul>
          <li>Hello</li>
          <li>Hi</li>
          <li>Sup</li>
        </ul>
        <button>Button</button>
        <input value="textbox"></input>
        <img src="https://cdn.discordapp.com/attachments/931429162659495987/956084807505440798/5961-defaultsmile.png">
      </body>
    </html>\`\`\`And this returns:`,
    color: 0x0073C8,
    image: {url: `https://cdn.discordapp.com/attachments/931429162659495987/956085523292749874/unknown.png`}
  }],
    components: [{
      type: 1,
      components: [{
        style: 4,
        label: `Back`,
        type: 2,
        custom_id: `all_html_1`
      },
      {
        style: 3,
        label: `Continue`,
        custom_id: `all_html_3`,
        type: 2
      }]
    }]
});