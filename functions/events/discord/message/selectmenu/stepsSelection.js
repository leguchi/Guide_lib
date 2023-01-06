const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.data.values[0] === 'step1StepsSelection') {
  await lib.discord.channels['@0.2.0'].messages.update({
    message_id: context.params.event.message.id,
    channel_id: `${context.params.event.channel_id}`,
    content: ``,
    tts: false,
    components: [
      {
        type: 1,
        components: [
          {
            style: 1,
            label: `Done`,
            custom_id: `completedReadingStep1`,
            disabled: false,
            type: 2
          },
          {
            style: 5,
            label: `Not yet`,
            url: `https://autocode.com/guides/how-to-build-a-discord-bot/#install-bot`,
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
                default: true
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
        title: `Create Your Bot`,
        description: `Please read step 1.`,
        color: 0x00FF00,
        url: `https://autocode.com/guides/how-to-build-a-discord-bot/#install-bot`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step2StepsSelection') {
  await lib.discord.channels['@0.2.0'].messages.update({
    message_id: context.params.event.message.id,
    channel_id: `${context.params.event.channel_id}`,
    content: ``,
    tts: false,
    components: [
      {
        type: 1,
        components: [
          {
            style: 1,
            label: `Done`,
            custom_id: `completedReadingStep2`,
            disabled: false,
            type: 2
          },
          {
            style: 5,
            label: `Not yet`,
            url: `https://autocode.com/guides/how-to-build-a-discord-bot/#new-autocode-project`,
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
        title: `Create Your Bot`,
        description: `Please read step 2.`,
        color: 0x00FF00,
        url: `https://autocode.com/guides/how-to-build-a-discord-bot/#new-autocode-project`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step3StepsSelection') {
  await lib.discord.channels['@0.2.0'].messages.update({
    message_id: context.params.event.message.id,
    channel_id: `${context.params.event.channel_id}`,
    content: ``,
    tts: false,
    components: [
      {
        type: 1,
        components: [
          {
            style: 1,
            label: `Done`,
            custom_id: `completedReadingStep3`,
            disabled: false,
            type: 2
          },
          {
            style: 5,
            label: `Not yet`,
            url: `https://autocode.com/guides/how-to-build-a-discord-bot/#link-accounts`,
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
                default: true
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
        title: `Create Your Bot`,
        description: `Please read step 3.`,
        color: 0x00FF00,
        url: `https://autocode.com/guides/how-to-build-a-discord-bot/#link-accounts`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step4StepsSelection') {
  await lib.discord.channels['@0.2.0'].messages.update({
    message_id: context.params.event.message.id,
    channel_id: `${context.params.event.channel_id}`,
    content: ``,
    tts: false,
    components: [
      {
        type: 1,
        components: [
          {
            style: 1,
            label: `Done`,
            custom_id: `completedReadingStep4`,
            disabled: false,
            type: 2
          },
          {
            style: 5,
            label: `Not yet`,
            url: `https://autocode.com/guides/how-to-build-a-discord-bot/#slash-commands`,
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
                default: true
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
        title: `Create Your Bot`,
        description: `Please read step 4.`,
        color: 0x00FF00,
        url: `https://autocode.com/guides/how-to-build-a-discord-bot/#slash-commands`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step5StepsSelection') {
  await lib.discord.channels['@0.2.0'].messages.update({
    message_id: context.params.event.message.id,
    channel_id: `${context.params.event.channel_id}`,
    content: ``,
    tts: false,
    components: [
      {
        type: 1,
        components: [
          {
            style: 1,
            label: `Done`,
            custom_id: `completedReadingStep5`,
            disabled: false,
            type: 2
          },
          {
            style: 5,
            label: `Not yet`,
            url: `https://autocode.com/guides/how-to-build-a-discord-bot/#prefix-commands`,
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
    embeds: [
      {
        type: `rich`,
        title: `Create Your Bot`,
        description: `Please read step 5.`,
        color: 0x00FF00,
        url: `https://autocode.com/guides/how-to-build-a-discord-bot/#prefix-commands`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step6StepsSelection') {
  await lib.discord.channels['@0.2.0'].messages.update({
    message_id: context.params.event.message.id,
    channel_id: `${context.params.event.channel_id}`,
    content: ``,
    tts: false,
    components: [
      {
        type: 1,
        components: [
          {
            style: 1,
            label: `Done`,
            custom_id: `completedReadingStep6`,
            disabled: false,
            type: 2
          },
          {
            style: 5,
            label: `Not yet`,
            url: `https://autocode.com/guides/how-to-build-a-discord-bot/#command-responses`,
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
                default: true
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
        title: `Create Your Bot`,
        description: `Please read step 6.`,
        color: 0x00FF00,
        url: `https://autocode.com/guides/how-to-build-a-discord-bot/#command-responses`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step7StepsSelection') {
  await lib.discord.channels['@0.2.0'].messages.update({
    message_id: context.params.event.message.id,
    channel_id: `${context.params.event.channel_id}`,
    content: ``,
    tts: false,
    components: [
      {
        type: 1,
        components: [
          {
            style: 1,
            label: `Done`,
            custom_id: `completedReadingStep7`,
            disabled: false,
            type: 2
          },
          {
            style: 5,
            label: `Not yet`,
            url: `https://autocode.com/guides/how-to-build-a-discord-bot/#formatting-messages`,
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
                default: true
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
        title: `Create Your Bot`,
        description: `Please read step 7.`,
        color: 0x00FF00,
        url: `https://autocode.com/guides/how-to-build-a-discord-bot/#formatting-messages`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step8StepsSelection') {
  await lib.discord.channels['@0.2.0'].messages.update({
    message_id: context.params.event.message.id,
    channel_id: `${context.params.event.channel_id}`,
    content: ``,
    tts: false,
    components: [
      {
        type: 1,
        components: [
          {
            style: 1,
            label: `Done`,
            custom_id: `completedReadingStep8`,
            disabled: false,
            type: 2
          },
          {
            style: 5,
            label: `Not yet`,
            url: `https://autocode.com/guides/how-to-build-a-discord-bot/#testing-commands`,
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
                default: true
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
        title: `Create Your Bot`,
        description: `Please read step 8.`,
        color: 0x00FF00,
        url: `https://autocode.com/guides/how-to-build-a-discord-bot/#testing-commands`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step9StepsSelection') {
  await lib.discord.channels['@0.2.0'].messages.update({
    message_id: context.params.event.message.id,
    channel_id: `${context.params.event.channel_id}`,
    content: ``,
    tts: false,
    components: [
      {
        type: 1,
        components: [
          {
            style: 1,
            label: `Done`,
            custom_id: `completedReadingStep9`,
            disabled: false,
            type: 2
          },
          {
            style: 5,
            label: `Not yet`,
            url: `https://autocode.com/guides/how-to-build-a-discord-bot/#code-examples`,
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
    embeds: [
      {
        type: `rich`,
        title: `Create Your Bot`,
        description: `Please read step 9.`,
        color: 0x00FF00,
        url: `https://autocode.com/guides/how-to-build-a-discord-bot/#code-examples`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'step10StepsSelection') {
  await lib.discord.channels['@0.2.0'].messages.update({
    message_id: context.params.event.message.id,
    channel_id: `${context.params.event.channel_id}`,
    content: ``,
    tts: false,
    components: [
      {
        type: 1,
        components: [
          {
            style: 1,
            label: `Done`,
            custom_id: `completedReadingStep10`,
            disabled: false,
            type: 2
          },
          {
            style: 5,
            label: `Not yet`,
            url: `https://autocode.com/guides/how-to-build-a-discord-bot/#advanced-command-builder-tips`,
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
    embeds: [
      {
        type: `rich`,
        title: `Create Your Bot`,
        description: `Please read step 10.`,
        color: 0x00FF00,
        url: `https://autocode.com/guides/how-to-build-a-discord-bot/#advanced-command-builder-tips`
      }
    ]
  });
} else if (context.params.event.data.values[0] === 'faqStepsSelection') {
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
          "custom_id": `completedReadingStep10`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 3,
          "label": `Next`,
          "custom_id": `nextFinal`,
          "disabled": false,
          "type": 2
        }
      ]
    },
    {
      "type": 1,
      "components": [
        {
          "custom_id": `stepsSelection`,
          "placeholder": `Select one`,
          "options": [
            {
              "label": `Step 1`,
              "value": `step1StepsSelection`,
              "description": `Step 1: Create your Discord bot`,
              "default": false
            },
            {
              "label": `Step 2`,
              "value": `step2StepsSelection`,
              "description": `Step 2: Create your Autocode project`,
              "default": false
            },
            {
              "label": `Step 3`,
              "value": `step3StepsSelection`,
              "description": `Step 3: Link your Discord account to Autocode`,
              "default": false
            },
            {
              "label": `Step 4`,
              "value": `step4StepsSelection`,
              "description": `Step 4: Create your slash command`,
              "default": false
            },
            {
              "label": `Step 5`,
              "value": `step5StepsSelection`,
              "description": `Step 5: Make a prefix command`,
              "default": false
            },
            {
              "label": `Step 6`,
              "value": `step6StepsSelection`,
              "description": `Step 6: Customize your bot`,
              "default": false
            },
            {
              "label": `Step 7`,
              "value": `step7StepsSelection`,
              "description": `Step 7: Format your bot messages and embeds`,
              "default": false
            },
            {
              "label": `Step 8`,
              "value": `step8StepsSelection`,
              "description": `Step 8: Test your commands`,
              "default": false
            },
            {
              "label": `Step 9`,
              "value": `step9StepsSelection`,
              "description": `Step 9: Code examples for bot actions`,
              "default": false
            },
            {
              "label": `Step 10`,
              "value": `step10StepsSelection`,
              "description": `Step 10: Advanced slash command builder tips`,
              "default": false
            },
            {
              "label": `FAQ`,
              "value": `faqStepsSelection`,
              "description": `Frequently Asked Questions`,
              "default": true
            }
          ],
          "min_values": 1,
          "max_values": 1,
          "type": 3
        }
      ]
    }
  ],
  "embeds": [
    {
      "type": "rich",
      "title": `FAQ`,
      "description": `Sorry, we are under maintenance.`,
      "color": 0x00ff00,
      "url": `https://autocode.com/guides/how-to-build-a-discord-bot/#faq`
    }
  ]
});
}