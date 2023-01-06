const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
await lib.discord.channels['@0.3.0'].messages.update({
  message_id: `${context.params.event.message.id}`,
  channel_id: `${context.params.event.message.channel_id}`,
  content: ``,
  embeds: [{
    title: `External JS & CSS`,
    description: `The \`<style>\` and \`<script>\` tags are not the only way to include CSS and JS inside of your website, you can use external files to store you CSS and JS and they will just the same as if they were inside of your HTML file:\`\`\`html\n
    <html>
      <head>
        <link href="style.css" rel="stylesheet">
      </head>
      <body>
        <h1 class="header" id="header">External JS and CSS!</h1>
        <script src="script.js"></script>
      </body>
    </html>\`\`\`There is no CSS or JS inside of this HTML file yet they are calling the JS and CSS with \`<link href="style.css" rel="stylesheet>\` for CSS and \`<script src="script.js"></script>\` for JS. The files \`style.css\` and \`script.js\` need to be created though. Create 2 new files inside of your \`www\` category and add a \`.js\` and a \`.css\` at the end of the file name:`,
    color: 0x0073C8,
    image: {url: `https://cdn.discordapp.com/attachments/956090781771366441/956287735784669294/unknown.png`}
  }],
    components: [{
      type: 1,
      components: [{
        style: 4,
        label: `Back`,
        type: 2,
        custom_id: `all_html_4`
      },
      {
        style: 3,
        label: `Continue`,
        custom_id: `all_html_6`,
        type: 2
      }]
    }]
});