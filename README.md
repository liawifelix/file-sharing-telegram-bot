# File Sharing Telegram Bot
Telegram Bot for sharing file. Built using [grammY](https://github.com/grammyjs/grammY) as the Telegram Bot Framework and Typescript. 100% suitable for deploying it to [cyclic.sh](https://www.cyclic.sh/) because this repository is originally purposely built for that. 

## Primary Tech Stack
1. grammY
2. TypeScript
3. DynamoDB(hosted in cyclic.sh)

## Setup at Local
1. Clone this repo
2. Create telegram bot using `BotFather`
3. Run `npm ci` to install the dependencies
4. Create account at cyclic.sh if you haven't. The reason is because you need to use DynamoDB hosted in cyclic.sh. And you can only use it when you have deployed your app to cyclic.sh
    - If you have another DynamoDB, feel free to use it but remember to change the codes
5. Push this repo to github so you can host it in cyclic.sh
6. Create `.env` using the template from `.env.sample`
    - `BOT_TOKEN` is the token got from `BotFather`
    - `CYCLIC_DB_NAME` is your `Table Name`. You can check it in `Data/Storage` section after you hosted your app to cyclic.sh
    - `BOT_ID` is your bot username
7. Run `nodemon index.ts` to run your app
8. Do coding :D

## Deployment 
Currently, this repository only support deployment to [cyclic.sh](https://www.cyclic.sh/). It's free :D
1. Forked this repository
2. Create account at cyclic.sh if you haven't
3. Deploy it to cyclic.sh through github repository
4. Fill the secret after deployed it
    - `BOT_TOKEN` is the token got from `BotFather`
    - `CYCLIC_DB_NAME` is your `Table Name`. You can check it in `Data/Storage` section after you host your app in cyclic.sh
    - `NODE_ENV` which is `production`
    - `BOT_ID` is your bot username
5. Connect webhook by running
```
    bash webhook.bash BOT_TOKEN CYCLIC_DEPLOYMENT_URL
```
6. Done :D

## Contributor
Contributor is welcomed! Just open issue or PR 🙌️

## Demo video
TBA
