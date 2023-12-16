##  Unit 1 Project: Build a Trivia Game

I am creating a two player 20 question trivia game where players can alternate turns and track their score. The game will be about hockey, and using a Headless CMS, I have created 20 objects with my questions and answers, and I will access it through the API on the Contentful website and create a web application for mobile phones and browsers.

## Details about the API

I am using contentful to host the JSON data for my game and I will access via API-Key and the fetch method and render it to the page using a map function to create an are of objects.


##Sample Fetch/Ajax called:

```js
fetch('https://cdn.contentful.com/spaces/f9ludc6g4f0p/environments/master/entries?access_token=eXdjQV-YwAoRMbiHd5NIvIqCZPL_taOIx8xqPve9XMk&hockeyTriviaGame')
.then(response => response.json())
.then(data => {
	questionObjects = data.items.map(item => item.fields);
    populateQuestion(questionObjects[0]);
})
```

The Data I get back:
```json
["fields":{"questions":"If a player is thrown out of an NHL game for being a fight instigator, how many penalty minutes does he get for the flight?","correctAnswers":"17 minutes","wrongAnswers":"10 minutes"}}
]


DEPLYOYED SITE: [Click Here](https://project1-nicholas-murrays-projects.vercel.app/)

