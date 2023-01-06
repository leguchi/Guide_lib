const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.update({
  message_id: context.params.event.message.id,
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "components": [
    {
      "type": 1,
      "components": [
        {
          "style": 4,
          "label": `Back`,
          "custom_id": `nextStep5Trigger`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 3,
          "label": `Next`,
          "custom_id": `nextStep6`,
          "disabled": false,
          "type": 2
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
              default: true
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
  "embeds": [
    {
      "type": "rich",
      "title": `Step 5: Make a prefix command`,
      "description": "Replace the code that's already there with this:\n\n```js\n// authenticates you with the API standard library\n// type `await lib.` to display API autocomplete\nconst lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});\n\nlet userString = context.params.event.content.split(' ')[1];\nlet reason = context.params.event.content.split(' ').slice(2).join(' ')\n  || 'No reason provided.';\n\nif (!userString || !userString.match(/<@.*>/)) {\n  await lib.discord.channels['@0.3.0'].messages.create({\n    channel_id: `${context.params.event.channel_id}`,\n    content: `You must tag a user to warn.`\n  });\n  return;\n}\n\nawait lib.discord.channels['@0.3.0'].messages.create({\n  channel_id: `${context.params.event.channel_id}`,\n  content: `<@!${context.params.event.author.id}> warned ${userString}!`,\n  embed: {\n    \"type\": \"rich\",\n    \"title\": \"Reason\",\n    \"description\": '❌  ' + reason,\n    \"color\": 0xAA0000\n  }\n});\n\nawait lib.discord.users['@0.2.0'].dms.create({\n  recipient_id: `${userString}`,\n  content: `<@!${context.params.event.author.id}> warned you!`,\n  embed: {\n    \"type\": \"rich\",\n    \"title\": \"Reason\",\n    \"description\": '❌  ' + reason,\n    \"color\": 0xAA0000\n  }\n});\n```\n`userString` will be a variable for the user that will be given a warning. `reason` will be a variable for the reason why the user will be given a warning. For more info on string, click [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String). The `if` statement will check whether the prefix command includes the user, and then a warning message will be sent to both the channel the command was set in, as well as the dm of the user getting warned.",
      "color": 0x00ff00,
      "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#prefix-commands`
    }
  ]
});