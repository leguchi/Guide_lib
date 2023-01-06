const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.data.values[0] === 'step9CodeExamplesRole1') {
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
            "custom_id": `backStep9CodeExamplesRole`,
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
        "description": `**It doesn't say which trigger to use.**\n\nIt doesn't, but the second image shows the slash command builder, and is also mentioned, so it hints how this is a \`command\` endpoint.`,
        "color": 0x00ff00,
        "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#set-role`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step9CodeExamplesRole2') {
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
            "custom_id": `backStep9CodeExamplesRole`,
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
        "description": `**I'm not sure what context.params.event.data.options[0].value is.**\n\n\`context.params\` is generally what comes into the endpoint. In this case, \`context.params.event.data.options[0].value\` would be the "user to assign a role" to, and \`context.params.event.data.options[1].value\` would be "the role to assign". Those two are the options made in the command builder.`,
        "color": 0x00ff00,
        "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#set-role`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step9CodeExamplesRole3') {
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
            "custom_id": `backStep9CodeExamplesRole`,
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
        "description": `**I don't get an error, but the slash command does not work, either.**\n\nIt's possible that you didn't make the slash command, but it can also be that you did make the slash command, but did it incorrectly. Make sure that whenever you build a \`command\` endpoint, you also use the [slash command builder](https://autocode.com/tools/discord/command-builder/) to create the command. When doing so, make sure the options' type is correct; The default is string, but for this command, you want \`User\` for options[0] and \`Role\` for options[1].`,
        "color": 0x00ff00,
        "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#set-role`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step9CodeExamplesRole4') {
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
            "custom_id": `backStep9CodeExamplesRole`,
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
        "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#set-role`
      }
    ]
  });
}