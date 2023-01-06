const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.data.values[0] === 'step9CodeExampleDM') {
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
            "custom_id": `step9CodeExamplesDM`,
            "placeholder": `Select one:`,
            "options": [
              {
                "label": `Error: user_id`,
                "value": `step9CodeExamplesDM1`,
                "description": `I have an error saying: Invalid \\\"user_id\\\".`,
                "default": false
              },
              {
                "label": `Error: lib`,
                "value": `step9CodeExamplesDM2`,
                "description": `I have an error saying: \\\"lib is not defined\\\".`,
                "default": false
              },
              {
                "label": `No /help command`,
                "value": `step9CodeExamplesDM3`,
                "description": `I don't get an error, but the slash command does not work, either.`,
                "default": false
              },
              {
                "label": `Other`,
                "value": `step9CodeExamplesDM4`,
                "description": `None of the above.`,
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
        "type": 1,
        "components": [
          {
            "style": 4,
            "label": `Back`,
            "custom_id": `completedReadingStep9`,
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
        "description": `How was step 9? Would you like help understanding any of those examples?\n`,
        "color": 0x00ff00,
        "image": {
          "url": `https://i.imgur.com/JCNYKBj.png`,
          "height": 256,
          "width": 0
        },
        "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#send-dm`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step9CodeExampleRespond') {
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
            "custom_id": `step9CodeExamplesRespond`,
            "placeholder": `Select one:`,
            "options": [
              {
                "label": `\`message.create\` vs \`message.create.prefix\`?`,
                "value": `step9CodeExamplesRespond1`,
                "description": `I wonder why I use \`message.create\` instead of \`message.create.prefix\`.`,
                "default": false
              },
              {
                "label": `\`ping\` command again?`,
                "value": `step9CodeExamplesRespond2`,
                "description": `I don't understand the difference between this \`ping\` command vs the earlier one.`,
                "default": false
              },
              {
                "label": `Error: channel_id`,
                "value": `step9CodeExamplesRespond3`,
                "description": `I have an error saying: Invalid \\\"channel_id\\\".`,
                "default": false
              },
              {
                "label": `Other`,
                "value": `step9CodeExamplesRespond4`,
                "description": `None of the above.`,
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
        "type": 1,
        "components": [
          {
            "style": 4,
            "label": `Back`,
            "custom_id": `completedReadingStep9`,
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
        "description": `How was step 9? Would you like help understanding any of those examples?\n`,
        "color": 0x00ff00,
        "image": {
          "url": `https://i.imgur.com/JCNYKBj.png`,
          "height": 256,
          "width": 0
        },
        "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#respond-to-message`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step9CodeExampleEmbeds') {
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
            "custom_id": `step9CodeExamplesEmbeds`,
            "placeholder": `Select one:`,
            "options": [
              {
                "label": `No /help command`,
                "value": `step9CodeExamplesEmbeds1`,
                "description": `I don't get an error, but the slash command does not work, either.`,
                "default": false
              },
              {
                "label": `Error: guild is not defined`,
                "value": `step9CodeExamplesEmbeds2`,
                "description": `I have an error saying: "guild is not defined".`,
                "default": false
              },
              {
                "label": `Error: id of undefined`,
                "value": `step9CodeExamplesEmbeds3`,
                "description": `I have an error saying: "Cannot read property 'id' of undefined".`,
                "default": false
              },
              {
                "label": `Other`,
                "value": `step9CodeExamplesEmbeds4`,
                "description": `None of the above.`,
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
        "type": 1,
        "components": [
          {
            "style": 4,
            "label": `Back`,
            "custom_id": `completedReadingStep9`,
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
        "description": `How was step 9? Would you like help understanding any of those examples?\n`,
        "color": 0x00ff00,
        "image": {
          "url": `https://i.imgur.com/JCNYKBj.png`,
          "height": 256,
          "width": 0
        },
        "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#format-embeds`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step9CodeExampleReaction') {
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
            "custom_id": `step9CodeExamplesReaction`,
            "placeholder": `Select one:`,
            "options": [
              {
                "label": `return vs no return?`,
                "value": `step9CodeExamplesReaction1`,
                "description": `I don't understand why one example includes return, while the other doesn't.`,
                "default": false
              },
              {
                "label": `Error: Unknown Emoji`,
                "value": `step9CodeExamplesReaction2`,
                "description": `I have an error saying: Unknown Emoji: code 10014.`,
                "default": false
              },
              {
                "label": `Reaction everywhere`,
                "value": `step9CodeExamplesReaction3`,
                "description": `Every message sent now has that reaction.`,
                "default": false
              },
              {
                "label": `Other`,
                "value": `step9CodeExamplesReaction4`,
                "description": `None of the above.`,
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
        "type": 1,
        "components": [
          {
            "style": 4,
            "label": `Back`,
            "custom_id": `completedReadingStep9`,
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
        "description": `How was step 9? Would you like help understanding any of those examples?\n`,
        "color": 0x00ff00,
        "image": {
          "url": `https://i.imgur.com/JCNYKBj.png`,
          "height": 256,
          "width": 0
        },
        "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#react-with-emoji`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step9CodeExampleRole') {
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
            "custom_id": `step9CodeExamplesRole`,
            "placeholder": `Select one:`,
            "options": [
              {
                "label": `Trigger?`,
                "value": `step9CodeExamplesRole1`,
                "description": `It doesn't say which trigger to use.`,
                "default": false
              },
              {
                "label": `data.options[0].value?`,
                "value": `step9CodeExamplesRole2`,
                "description": `I'm not sure what context.params.event.data.options[0].value is.`,
                "default": false
              },
              {
                "label": `Command deletes itself`,
                "value": `step9CodeExamplesRole3`,
                "description": `I don't get an error, but the slash command does not work, either.`,
                "default": false
              },
              {
                "label": `Other`,
                "value": `step9CodeExamplesRole4`,
                "description": `None of the above.`,
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
        "type": 1,
        "components": [
          {
            "style": 4,
            "label": `Back`,
            "custom_id": `completedReadingStep9`,
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
        "description": `How was step 9? Would you like help understanding any of those examples?\n`,
        "color": 0x00ff00,
        "image": {
          "url": `https://i.imgur.com/JCNYKBj.png`,
          "height": 256,
          "width": 0
        },
        "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#set-role`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step9CodeExampleRoleReaction') {
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
            "custom_id": `step9CodeExamplesRoleReaction`,
            "placeholder": `Select one:`,
            "options": [
              {
                "label": `No change`,
                "value": `step9CodeExamplesRoleReaction1`,
                "description": `I don't get an error, but the role is not updated, either.`,
                "default": false
              },
              {
                "label": `{a:b}?`,
                "value": `step9CodeExamplesRoleReaction2`,
                "description": `I'm not sure what validRoles is.`,
                "default": false
              },
              {
                "label": `No emojis`,
                "value": `step9CodeExamplesRoleReaction3`,
                "description": `I don't get an error, but the message doesn't have emojis, either.`,
                "default": false
              },
              {
                "label": `Other`,
                "value": `step9CodeExamplesRoleReaction4`,
                "description": `None of the above.`,
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
        "type": 1,
        "components": [
          {
            "style": 4,
            "label": `Back`,
            "custom_id": `completedReadingStep9`,
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
        "description": `How was step 9? Would you like help understanding any of those examples?\n`,
        "color": 0x00ff00,
        "image": {
          "url": `https://i.imgur.com/JCNYKBj.png`,
          "height": 256,
          "width": 0
        },
        "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#assign-role-reaction`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step9CodeExampleBan') {
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
            "custom_id": `step9CodeExamplesBan`,
            "placeholder": `Select one:`,
            "options": [
              {
                "label": `Trigger?`,
                "value": `step9CodeExamplesBan1`,
                "description": `It doesn't say which trigger to use.`,
                "default": false
              },
              {
                "label": `Three commands?`,
                "value": `step9CodeExamplesBan2`,
                "description": `I'm not sure what the third command should be.`,
                "default": false
              },
              {
                "label": `Command deletes itself`,
                "value": `step9CodeExamplesBan3`,
                "description": `I don't get an error, but the slash command does not work, either.`,
                "default": false
              },
              {
                "label": `Other`,
                "value": `step9CodeExamplesBan4`,
                "description": `None of the above.`,
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
        "type": 1,
        "components": [
          {
            "style": 4,
            "label": `Back`,
            "custom_id": `completedReadingStep9`,
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
        "description": `How was step 9? Would you like help understanding any of those examples?\n`,
        "color": 0x00ff00,
        "image": {
          "url": `https://i.imgur.com/JCNYKBj.png`,
          "height": 256,
          "width": 0
        },
        "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#ban-kick-mute`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step9CodeExampleRestrictRole') {
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
            "custom_id": `step9CodeExamplesRestrictRole`,
            "placeholder": `Select one:`,
            "options": [
              {
                "label": `Role vs permission?`,
                "value": `step9CodeExamplesRestrictRole1`,
                "description": `I'm not sure what the difference is between the administrator role and permission.`,
                "default": false
              },
              {
                "label": `More than one role`,
                "value": `step9CodeExamplesRestrictRole2`,
                "description": `I would like to include more than one admin role.`,
                "default": false
              },
              {
                "label": `Command deletes itself`,
                "value": `step9CodeExamplesRestrictRole3`,
                "description": `I don't get an error, but the slash command does not work, either.`,
                "default": false
              },
              {
                "label": `Other`,
                "value": `step9CodeExamplesRestrictRole4`,
                "description": `None of the above.`,
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
        "type": 1,
        "components": [
          {
            "style": 4,
            "label": `Back`,
            "custom_id": `completedReadingStep9`,
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
        "description": `How was step 9? Would you like help understanding any of those examples?\n`,
        "color": 0x00ff00,
        "image": {
          "url": `https://i.imgur.com/JCNYKBj.png`,
          "height": 256,
          "width": 0
        },
        "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#restrict-commands`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step9CodeExampleRestrictPermissions') {
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
            "custom_id": `step9CodeExamplesRestrictPermissions`,
            "placeholder": `Select one:`,
            "options": [
              {
                "label": `Role vs permission?`,
                "value": `step9CodeExamplesRestrictPermissions1`,
                "description": `I'm not sure what the difference is between the administrator role and permission.`,
                "default": false
              },
              {
                "label": `Permission?`,
                "value": `step9CodeExamplesRestrictPermissions2`,
                "description": `I'm not sure what permissions are.`,
                "default": false
              },
              {
                "label": `Command deletes itself`,
                "value": `step9CodeExamplesRestrictPermissions3`,
                "description": `I don't get an error, but the slash command does not work, either.`,
                "default": false
              },
              {
                "label": `Other`,
                "value": `step9CodeExamplesRestrictPermissions4`,
                "description": `None of the above.`,
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
        "type": 1,
        "components": [
          {
            "style": 4,
            "label": `Back`,
            "custom_id": `completedReadingStep9`,
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
        "description": `How was step 9? Would you like help understanding any of those examples?\n`,
        "color": 0x00ff00,
        "image": {
          "url": `https://i.imgur.com/JCNYKBj.png`,
          "height": 256,
          "width": 0
        },
        "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#restrict-commands-permissions`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step9CodeExampleStatus') {
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
            "custom_id": `step9CodeExamplesStatus`,
            "placeholder": `Select one:`,
            "options": [
              {
                "label": `Trigger?`,
                "value": `step9CodeExamplesStatus1`,
                "description": `I'm not sure which trigger I should be using.`,
                "default": false
              },
              {
                "label": `Activity type?`,
                "value": `step9CodeExamplesStatus2`,
                "description": `I'm not sure what other activity types there are.`,
                "default": false
              },
              {
                "label": `Changing it from: Autocode`,
                "value": `step9CodeExamplesStatus3`,
                "description": `I wonder if I am able to change the bot's status.`,
                "default": false
              },
              {
                "label": `Other`,
                "value": `step9CodeExamplesStatus4`,
                "description": `None of the above.`,
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
        "type": 1,
        "components": [
          {
            "style": 4,
            "label": `Back`,
            "custom_id": `completedReadingStep9`,
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
        "description": `How was step 9? Would you like help understanding any of those examples?\n`,
        "color": 0x00ff00,
        "image": {
          "url": `https://i.imgur.com/JCNYKBj.png`,
          "height": 256,
          "width": 0
        },
        "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#update-bot-status`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step9CodeExampleAttachment') {
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
            "custom_id": `step9CodeExamplesAttachment`,
            "placeholder": `Select one:`,
            "options": [
              {
                "label": `File format`,
                "value": `step9CodeExamplesAttachment1`,
                "description": `I wonder which file formats are supported.`,
                "default": false
              },
              {
                "label": `URL?`,
                "value": `step9CodeExamplesAttachment2`,
                "description": `I'm not sure whether the image has to be in URL.`,
                "default": false
              },
              {
                "label": `Where?`,
                "value": `step9CodeExamplesAttachment3`,
                "description": `Where in the message do I put the image?`,
                "default": false
              },
              {
                "label": `Other`,
                "value": `step9CodeExamplesAttachment4`,
                "description": `None of the above.`,
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
        "type": 1,
        "components": [
          {
            "style": 4,
            "label": `Back`,
            "custom_id": `completedReadingStep9`,
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
        "description": `How was step 9? Would you like help understanding any of those examples?\n`,
        "color": 0x00ff00,
        "image": {
          "url": `https://i.imgur.com/JCNYKBj.png`,
          "height": 256,
          "width": 0
        },
        "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#attach-images`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step9CodeExampleTranslate') {
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
            "custom_id": `step9CodeExamplesTranslate`,
            "placeholder": `Select one:`,
            "options": [
              {
                "label": `中文`,
                "value": `step9CodeExamplesTranslate1`,
                "description": `我说和读中文。`,
                "default": false
              },
              {
                "label": `Español`,
                "value": `step9CodeExamplesTranslate2`,
                "description": `Hablo y leo Español.`,
                "default": false
              },
              {
                "label": `हिन्दी भाषा`,
                "value": `step9CodeExamplesTranslate3`,
                "description": `मैं हिंदी बोलता और पढ़ता हूं।`,
                "default": false
              },
              {
                "label": `বাংলা`,
                "value": `step9CodeExamplesTranslate4`,
                "description": `আমি বাংলা বলি এবং পড়ি।`,
                "default": false
              },
              {
                "label": `Português`,
                "value": `step9CodeExamplesTranslate5`,
                "description": `Falo e leio Português.`,
                "default": false
              },
              {
                "label": `日本語`,
                "value": `step9CodeExamplesTranslate6`,
                "description": `私は日本語を話し、読みます。`,
                "default": false
              },
              {
                "label": `한국어`,
                "value": `step9CodeExamplesTranslate7`,
                "description": `나는 일본어를 말하고 읽습니다.`,
                "default": false
              },
              {
                "label": `Français`,
                "value": `step9CodeExamplesTranslate8`,
                "description": `Je parle et lis le Français.`,
                "default": false
              },
              {
                "label": `Italiano`,
                "value": `step9CodeExamplesTranslate9`,
                "description": `Parlo e leggo Italiano.`,
                "default": false
              },
              {
                "label": `Nederlands`,
                "value": `step9CodeExamplesTranslate10`,
                "description": `Ik spreek en lees Nederlands.`,
                "default": false
              },
              {
                "label": `...`,
                "value": `step9CodeExamplesTranslate11`,
                "description": `None of the above.`,
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
        "type": 1,
        "components": [
          {
            "style": 4,
            "label": `Back`,
            "custom_id": `completedReadingStep9`,
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
        "description": `How was step 9? Would you like help understanding any of those examples?\n`,
        "color": 0x00ff00,
        "image": {
          "url": `https://i.imgur.com/JCNYKBj.png`,
          "height": 256,
          "width": 0
        },
        "url": `https://translate.google.com/`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step9CodeExample') {
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
            "style": 1,
            "label": `Done`,
            "custom_id": `completedReadingStep10`,
            "disabled": false,
            "type": 2
          },
          {
            "style": 5,
            "label": `Not yet`,
            "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#advanced-command-builder-tips`,
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
                default: false
              },
              {
                label: `Step 10`,
                value: `step10StepsSelection`,
                description: `Step 10: Advanced slash command builder tips`,
                default: true
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
        "title": `Step 10: Advanced slash command builder tips`,
        "description": `Please read step 10.`,
        "color": 0x00ff00,
        "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#advanced-command-builder-tips`
      }
    ]
  });
}