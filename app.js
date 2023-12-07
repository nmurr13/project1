const url = "https://cdn.contentful.com/spaces/f9ludc6g4f0p/environments/master/entries/1TH00D0RqYW0BoSmfJusZP?access_token=zvuk1r8PGmzjJxJn6UqY-NhSv2uaYbM4aPj46yiJGQI"
fetch(url)
.then((res) => res.json())
.then((data) => console.log(data))