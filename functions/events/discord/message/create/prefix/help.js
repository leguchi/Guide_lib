const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: `**Commands**\n\n\`!start\` - Begin your guide!\n\`!invite\` - Invite me to other servers\n\`!help\` - Get this message`,
message_reference: {message_id: context.params.event.id}
});
