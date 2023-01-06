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