# festivalMVP

I was asked to build an MVP of my choice with a two day turnaround. My app makes a playlist for you based on artists at a specific music festival. 

## Motivation

Project to deepen understanding of full-stack development under time contstraints. 

## Built With

![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Spotify](https://img.shields.io/badge/Spotify-1ED760?style=for-the-badge&logo=spotify&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

This article was a huge help to understanding spotify API connections: https://ritvikbiswas.medium.com/connecting-to-the-spotify-api-using-node-js-and-axios-client-credentials-flow-c769e2bee818

## Details 

The app utilized Postgres to save festival lineups and generate a random list of 5 artists. Based on the artists, it utilizes Spotify's API to give the ability to sample songs. You may also remove artists or generate a new random list until you reach a list you are satisfied with. You will then be able to make a spotify playlist (if your Spotify token allows you to). 

![homepage - choose festival](https://user-images.githubusercontent.com/100891819/186767224-02aeab04-b134-4d46-a7b3-0813f96b373f.png)

![make playlist](https://user-images.githubusercontent.com/100891819/186767309-577a03c3-a793-4909-90f2-fc8f3b838ad0.png)

