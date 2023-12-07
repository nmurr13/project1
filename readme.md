##  Unit 1 Project: Build a Trivia Game

I am creating a two player 20 question trivia game where players can alternate turns and track their score. The game will be about hockey, and using a Headless CMS, I have created a custom dataset with my questions and answers, and I will access it through the API on the Contentful website and create a web application for mobile phones and browsers.

## Details about the API

I am using contentful to host the data for my game and I will access it via API-Key and render it to the page using JS.

- `https://cdn.contentful.com/`: This returns a json array with all the different ingedients.

Sample Fetch/Ajax called:

```js
const url = "https://cdn.contentful.com/spaces/f9ludc6g4f0p/environments/master/entries/1TH00D0RqYW0BoSmfJusZP?access_token=zvuk1r8PGmzjJxJn6UqY-NhSv2uaYbM4aPj46yiJGQI"
fetch(url)
.then((res) => res.json())
.then((data) => console.log(data))
```

The Data I get back:
```json
[{
  metadata: { tags: [] },
  sys: {
    space: { sys: [Object] },
    id: '1TH00D0RqYW0BoSmfJusZP',
    type: 'Entry',
    createdAt: '2023-12-06T23:41:43.748Z',
    updatedAt: '2023-12-06T23:41:43.748Z',
    environment: { sys: [Object] },
    revision: 1,
    contentType: { sys: [Object] },
    locale: 'en-US'
  },
  fields: { questions: 'What year was the first NHL Season?' }
]

## Mockup

#### Desktop View

![My Desktop View] visual mockup coming soon

#### Mobile View

![My Mobile View] visual mockup coming soon.

DEPLYOYED SITE: [Click Here](https://project1-kwk9calwz-nicholas-murrays-projects.vercel.app)

## Schedule of Work

|Day | Goal | What I did accomplish |
|----|------|-----------------------|
| Sat | Create Readme, Deploy, Get Approval | | Tested various public API's to no avail. 
| Sun | Build fetch of data in JS file || Watched many of Alex's videos and planned my project. 
| Mon | Render data from API on screen || Watched many of Alex's videos and planned my project. 
| Tues| Build form for user to interact with || Signed up for contentful and wrote my trivia questions.
| Wed | wrap up functionality || Sent read me, Deployed website, built a fetch of data and rendered it in node and the brower. Building interactive form now.
|Thurs| mobile layout styling ||
| Fri | Desktop layout styling ||
| Sat | Present Project ||