const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.data.values[0] === 'step9CodeExamplesRoleReaction1') {
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
            "custom_id": `backStep9CodeExamplesRoleReaction`,
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
        "description": `**I don't get an error, but the role is not updated, either.**\n\nIt's possible you didn't change the value of \`validMessage\` or \`validRoles\`. If you just keep it as it is in the example, it will most likely not hit the if statement. Make sure you have the message already written on Discord, and have the id(s) of the emoji(s) written in the correct format for this file.`,
        "color": 0x00ff00,
        "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#assign-role-reaction`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step9CodeExamplesRoleReaction2') {
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
            "custom_id": `backStep9CodeExamplesRoleReaction`,
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
        "description": `**I'm not sure what validRoles is.**\n\n\`validRoles\` is an [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) that contains various keys and values. In the example, the keys are the emojis, and the values are the id of the role. With that, the next part defines \`validRole\` for when a user uses that specific reaction.`,
        "color": 0x00ff00,
        "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#assign-role-reaction`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step9CodeExamplesRoleReaction3') {
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
            "custom_id": `backStep9CodeExamplesRoleReaction`,
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
        "description": `**I don't get an error, but the message doesn't have emojis, either.**\n\nThe trigger for this file is \`message.reaction.add\`, so this is for when a user uses a reaction to a message. It's possible they don't know they are expected to react to a message if the message doesn't explain to them what each emoji is for, or if the bot doesn't give an example of reactions. You can try to make the message similar to [this one](https://autocode.com/guides/how-to-build-a-discord-bot/#react-with-emoji) so it reacts to the message, and also have the message be more descriptive on what each emoji means.`,
        "color": 0x00ff00,
        "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#assign-role-reaction`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step9CodeExamplesRoleReaction4') {
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
            "custom_id": `backStep9CodeExamplesRoleReaction`,
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
        "description": `**Other.**\n\nIf you're already in the [Autocode Developers Discord server](https://discord.gg/autocode), you can possibly receive help in <#831185301900230700> channel. Please wait patiently.`,
        "color": 0x00ff00,
        "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#assign-role-reaction`
      }
    ]
  });
}