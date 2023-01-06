const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.update({
  message_id: context.params.event.message.id,
  channel_id: `${context.params.event.channel_id}`,
  content: ``,
  tts: false,
  components: [
    {
      type: 1,
      components: [
        {
          style: 4,
          label: `Back`,
          custom_id: `nextStep2Replace`,
          disabled: false,
          type: 2
        },
        {
          style: 3,
          label: `Next`,
          custom_id: `step3`,
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
              default: true
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
      title: `Create your Autocode project`,
      description: `Remember to always **save**. You will find the button to save on the bottom right corner.`,
      color: 0x00ff00,
      url: `https://autocode.com/guides/how-to-build-a-discord-bot/#new-autocode-project`,
      image: {
        url: `https://i.imgur.com/FXNHrk5.png`,
        height: 256,
        width: 0
      },
    }
  ]
});