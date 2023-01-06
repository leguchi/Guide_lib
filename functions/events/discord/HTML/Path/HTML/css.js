const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
await lib.discord.channels['@0.3.0'].messages.update({
  message_id: `${context.params.event.message.id}`,
  channel_id: `${context.params.event.message.channel_id}`,
  content: ``,
  embeds: [{
    title: `HTML & CSS`,
    description: `CSS (Cascade Styling Sheet) is how you make your website look awesome! Obviously you use HTML to make all of the objects but CSS is important to style the website. CSS Can do soooo much, add a background, make images bigger or smaller, add color to text, and so much more! CSS isn't a walk in the park so here's an example of a code using it:\`\`\`html\n
    <html>
      <head>
        <style>
          .header{
            color: #55ab97
          }
        </style>
      </head>
      <body>
        <h1 class="header">CSS Website!</h1>
      </body>
    </html>\`\`\`So this makes a website with a teal header. Notice how the \`<style>\` tag was used in the \`<head>\` section. CSS is formated like \`.CLASSNAME\` and whatever you put inside of that is the CSS for that class, you can use that CSS by adding a \`class="CLASSNAME"\` inside of the thing you want to include the CSS in. Here's how to website turns out:`,
    color: 0x0073C8,
    image: {url: `https://cdn.discordapp.com/attachments/956090781771366441/956283756283564072/unknown.png`}
  }],
    components: [{
      type: 1,
      components: [{
        style: 4,
        label: `Back`,
        type: 2,
        custom_id: `all_html_2`
      },
      {
        style: 3,
        label: `Continue`,
        custom_id: `all_html_4`,
        type: 2
      }]
    }]
});