const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.data.values[0] === 'step9CodeExamplesDM1') {
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
            "custom_id": `backStep9CodeExamplesDM`,
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
        "description": `**I have an error saying: Invalid \\\"user_id\\\".**\n\nYou are most likely having trouble running through Autocode, and the payload. You can either continue with the green \`Run\` button on the bottom right corner after updating the payload with the needed information (such as \`guild_id\` or \`user_id\`), or just try that \`/help\` command directly through Discord.`,
        "color": 0x00ff00,
        "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#send-dm`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step9CodeExamplesDM2') {
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
            "custom_id": `backStep9CodeExamplesDM`,
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
        "description": `**I have an error saying: \\\"lib is not defined\\\".**\n\nYou may have accidentally deleted \`const lib\` at the top. Check the guide once more to see what it is you're missing, and where to place it.`,
        "color": 0x00ff00,
        "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#send-dm`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step9CodeExamplesDM3') {
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
            "custom_id": `backStep9CodeExamplesDM`,
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
        "description": `**I don't get an error, but the slash command does not work, either.**\n\nIt's possible you made the file correctly, but didn't create the command in the [slash command builder](https://autocode.com/tools/discord/command-builder/).`,
        "color": 0x00ff00,
        "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#send-dm`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step9CodeExamplesDM4') {
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
            "custom_id": `backStep9CodeExamplesDM`,
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
        "color": 0x5865F2,
        "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#send-dm`
      }
    ]
  });
}