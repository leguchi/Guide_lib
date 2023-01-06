const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
await lib.discord.channels['@0.3.0'].messages.update({
  message_id: `${context.params.event.message.id}`,
  channel_id: `${context.params.event.message.channel_id}`,
  content: ``,
  embeds: [{
    title: `HTML & JavaScript`,
    description: `You can use JavaScript inside of HTML! You can use it to automate things inside of you website, here's an example of a website using JS:\`\`\`html\n
    <html>
      <body>
        <h1 id="title">Title!</h1>
        <input id="input"></input>
        <button onclick="update()">Update Title</button>
        <script>
          function update() {
            var newTitle = document.getElementById('input').value
            var oldTitle = document.getElementById('title')      
            oldTitle.innerHTML = newTitle
          }
        </script>
      </body>
    </html>\`\`\`This will make it so whatever you put inside of the textbox with become the title when you click the button!`,
    color: 0x0073C8,
    image: {url: `https://cdn.discordapp.com/attachments/931429162659495987/956101011007754261/unknown.png`}
  }],
    components: [{
      type: 1,
      components: [{
        style: 4,
        label: `Back`,
        type: 2,
        custom_id: `all_html_3`
      },
      {
        style: 3,
        label: `Continue`,
        custom_id: `all_html_5`,
        type: 2
      }]
    }]
});