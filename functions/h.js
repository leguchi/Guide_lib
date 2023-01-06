const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.users['@0.2.0'].me.status.update({
  activity_name: `you guy's learn to use Autocode!`,
  activity_type: 'WATCHING',
  status: 'ONLINE'
});