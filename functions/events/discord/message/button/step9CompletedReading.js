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
          "custom_id": `step9CodeExamples`,
          "placeholder": `Select one:`,
          "options": [
            {
              "label": `Send a direct message`,
              "value": `step9CodeExampleDM`,
              "description": `I need help with sending DM.`,
              "default": false
            },
            {
              "label": `Responding to a message`,
              "value": `step9CodeExampleRespond`,
              "description": `I need help with responding to a message.`,
              "default": false
            },
            {
              "label": `Formatting embeds`,
              "value": `step9CodeExampleEmbeds`,
              "description": `I need help with formatting embeds.`,
              "default": false
            },
            {
              "label": `React to a message with an emoji`,
              "value": `step9CodeExampleReaction`,
              "description": `I need help with adding an emoji reaction to a message.`,
              "default": false
            },
            {
              "label": `Set a role for user`,
              "value": `step9CodeExampleRole`,
              "description": `I need help with setting a role for a user.`,
              "default": false
            },
            {
              "label": `Set a role based on emoji reactions`,
              "value": `step9CodeExampleRoleReaction`,
              "description": `I need help with setting a role for a user from emoji reactions.`,
              "default": false
            },
            {
              "label": `Ban / kick a user`,
              "value": `step9CodeExampleBan`,
              "description": `I need help with setting up how to ban or kick a user.`,
              "default": false
            },
            {
              "label": `Restrict commands by role`,
              "value": `step9CodeExampleRestrictRole`,
              "description": `I need help with restricting commands by roles.`,
              "default": false
            },
            {
              "label": `Restrict commands by permissions`,
              "value": `step9CodeExampleRestrictPermissions`,
              "description": `I need help with restricting commands by permissions.`,
              "default": false
            },
            {
              "label": `Update your bot's status`,
              "value": `step9CodeExampleStatus`,
              "description": `I need help with setting my bot's status.`,
              "default": false
            },
            {
              "label": `Attaching images`,
              "value": `step9CodeExampleAttachment`,
              "description": `I need help with attaching images to a message.`,
              "default": false
            },
            {
              "label": `No English`,
              "value": `step9CodeExampleTranslate`,
              "description": `I do not speak English.`,
              "default": false 
            },
            {
              "label": `No`,
              "value": `step9CodeExample`,
              "description": `No, I understand it perfectly.`,
              "default": false
            }
          ],
          "min_values": 1,
          "max_values": 1,
          "type": 3
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
              default: true
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
      "title": `Step 9: Code examples for bot actions`,
      "description": `How was step 9? Would you like help understanding any of those examples?\n`,
      "color": 0x00ff00,
      "image": {
        "url": `https://i.imgur.com/n1bexzx.png`,
        "height": 256,
        "width": 0
      },
      "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#code-examples`
    }
  ]
});