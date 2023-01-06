const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// starts private channel only available to bot and user
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
  tts: false,
  components: [
    {
      type: 1,
      components: [
        {
          style: 3,
          label: `Next`,
          custom_id: `step1`,
          disabled: false,
          type: 2
        }
      ]
    },
    {
      type: 1,
      components: [
        {
          custom_id: `stepsSelection`,
          placeholder: `Select one`,
          options: [
            {
              label: `Step 1`,
              value: `step1StepsSelection`,
              description: `Step 1: Create your Discord bot`,
              default: false
            },
            {
              label: `Step 2`,
              value: `step2StepsSelection`,
              description: `Step 2: Create your Autocode project`,
              default: false
            },
            {
              label: `Step 3`,
              value: `step3StepsSelection`,
              description: `Step 3: Link your Discord account to Autocode`,
              default: false
            },
            {
              label: `Step 4`,
              value: `step4StepsSelection`,
              description: `Step 4: Create your slash command`,
              default: false
            },
            {
              label: `Step 5`,
              value: `step5StepsSelection`,
              description: `Step 5: Make a prefix command`,
              default: false
            },
            {
              label: `Step 6`,
              value: `step6StepsSelection`,
              description: `Step 6: Customize your bot`,
              default: false
            },
            {
              label: `Step 7`,
              value: `step7StepsSelection`,
              description: `Step 7: Format your bot messages and embeds`,
              default: false
            },
            {
              label: `Step 8`,
              value: `step8StepsSelection`,
              description: `Step 8: Test your commands`,
              default: false
            },
            {
              label: `Step 9`,
              value: `step9StepsSelection`,
              description: `Step 9: Code examples for bot actions`,
              default: false
            },
            {
              label: `Step 10`,
              value: `step10StepsSelection`,
              description: `Step 10: Advanced slash command builder tips`,
              default: false
            },
            {
              label: `FAQ`,
              value: `faqStepsSelection`,
              description: `Frequently Asked Questions`,
              default: false
            }
          ],
          min_values: 1,
          max_values: 1,
          type: 3
        }
      ]
    }
  ],
  embeds: [
    {
      type: `rich`,
      title: `How to build a free Discord bot with Node.js`,
      description: `This is the guide for how you can build the Discord bot with Node.js through Autocode. It is quite simple. If you would like the video version of this guide, [click here](https://www.youtube.com/watch?v=QCBV1pczkxg).`,
      color: 0x00ff00,
      url: `https://autocode.com/guides/how-to-build-a-discord-bot/`
    }
  ]
});