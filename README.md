# nimble-technical-test

Let's start with How to run this project:

## Setup

1. Run this command and wait the installation complete:
```
docker-compose -f docker-compose.yml -f docker-compose.build.yml up & build
```
unit you see this ( the 2 lines that got hightlisted ):
![complete install.png](image%2Fcomplete%20install.png)

then you need to exit the terminal.

2. Run this command:

go to backend folder and run "npm run dev"
```
cd backend
npm run build
```

3. Run (there are 2 options, I recommend to go with Production Mode)

Production Mode
```
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

Dev mode

```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```

4. Run this command to migrate database:

Go in to backend image
```
docker exec -it nimble-technical-test-backend-1 /bin/sh
npx prisma migrate dev --name init
```
After the process finish, exit the terminal then you good to go!

## How to use

1. Go to web page, open your browser and go the link below :
```
localhost:3000
```
then you will see this:
![signin page.png](image%2Fsignin%20page.png)

2. Go register or sign-up by click the sign-up button below :
![signup.png](image%2Fsignup.png)

Fill in your information and click sign up to register, after that just sign up into the main page.

3. This is the home page:
![homepage.png](image%2Fhomepage.png)

* In this page you can upload your csv file that include 1 - 100 keywords, you can click on "choose file" and select your csv file to upload.
    your csv must have "keyword" as the column name. you can look or use at long_csv.csv or short_csv.csv both are in the root of the project file.
* under the "upload" button you can preview your csv file there.
* After that click on "upload" to send data to the backend and start the scraping this process may take about 4-5 minutes (If the process take longer than 4-5 minutes you should refresh the page and upload, the detail of this issues I will explain again below).

![click upload.png](image%2Fclick%20upload.png)

this is after the upload and scraping data complete on the right of the screen you can see the results over there:
![result.png](image%2Fresult.png)

at the column name you click on it to sorting the column, and also you can search for the keyword:
![sorting.png](image%2Fsorting.png)

and also you can click on the list to see the full result:
![full result.png](image%2Ffull%20result.png)

4. This is history page:

* In this page you can see the history of your upload keywords.
* In this page you also can sorting, search, and click on the list to view full result.

![history.png](image%2Fhistory.png)



