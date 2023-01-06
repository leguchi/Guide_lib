const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
await lib.discord.channels['@0.3.0'].messages.update({
  message_id: `${context.params.event.message.id}`,
  channel_id: `${context.params.event.message.channel_id}`,
  content: ``,
  embeds: [{
    title: `HTML Tags`,
    description: `Tags are used to tell a web browser what your website looks like, here are a few important ones here:\n\n\`\`\`html\n
    <h1> - <h6> <!--Headings-->
    <p> <!--Normal text-->
    <head> <!--Where info about your website goes-->
    <body> <!--Where your website body goes-->
    <div> <!--Makes a section in a website-->
    <title> <!--Your website title (MUST BE USED IN THE <head> SECTION)
    \`\`\`\nThis isn't anywhere close to all of them but these are some important ones. Here's an example of them put together on a website: \`\`\`html\n
    <html>
      <head>
        <title>Website title</title>
      </head>
      <body>
        <div>
          <h1>This is a cool website</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed tempus urna et pharetra pharetra massa massa. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Mauris a diam maecenas sed. Pellentesque dignissim enim sit amet venenatis.</p>
        </div>
      </body>
    </html>\`\`\`And this returns:`,
    color: 0x0073C8,
    image: {url: `https://cdn.discordapp.com/attachments/931429162659495987/956078778126307369/unknown.png`}
  }],
    components: [{
      type: 1,
      components: [{
        style: 4,
        label: `Back`,
        type: 2,
        custom_id: `all_html`
      },
      {
        style: 3,
        label: `Continue`,
        custom_id: `all_html_2`,
        type: 2
      }]
    }]
});