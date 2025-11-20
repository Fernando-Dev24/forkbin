# Forkbin App
## Mock api now, use it anywhere

### Getting started
In order to run application in dev, please do the following:

1. Install dependencies `npm install`
2. Clone .template.env and fill with your credentials
3. Run the docker daemon with `docker compose up -d`, please be sure to have your postgres image downloaded
4. Run `npx prisma migrate dev --name init` to init the database
5. OPTIONAL: If you want to work with the database empty please run the command `npm run seed`
6. Run the app in dev mode using `npm run dev`