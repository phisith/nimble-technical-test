# nimble-technical-test

Let's start with How to run this project:

## Setup

1. Run this command and wait the installation complete:
```
docker-compose -f docker-compose.yml -f docker-compose.build.yml up & build
```
unit you see this ( the 2 lines that got hightlisted ):
![Screenshot 2566-03-03 at 10.19.14.png](..%2F..%2FDesktop%2FScreenshot%202566-03-03%20at%2010.19.14.png)

then you need to exit the terminal.

2. Run this command:

go to backend folder and run "npm run dev"
```
cd backend
npm run build
```

3. Run (there 2 options, I recommend to go with Production Mode)

Production Mode
```
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

Dev mode

```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```

4. Run this command to migrate database:

go in to backend image
```
docker exec -it nimble-technical-test-backend-1 /bin/sh
npx prisma migrate dev --name init
```
after the process finish, exit the terminal then you good to go!

## How to use

1. go to web page, open your browser and go the link below :
```
localhost:3000
```
then you will see this:
![Screenshot 2566-03-03 at 15.05.16.png](..%2F..%2FDesktop%2FScreenshot%202566-03-03%20at%2015.05.16.png)
