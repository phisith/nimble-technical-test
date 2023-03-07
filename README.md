# nimble-technical-test

Let's start with How to run this project:

## Setup

### 1. Run this command (for the first time):
```
make build
```
wait the process to be complete.

### 2. Run (there are 2 options, I recommend to go with Production Mode)

### Production Mode
```
make start-prod
```
to stop
```
make down-prod
```

### Dev mode

```
make start-dev
```
to stop
```
make down-dev
```

After the process finish, then you good to go!

## How to use

### 1. Go to web page, open your browser and go the link below :
```
localhost:3000
```
then you will see this:

![signin page.png](image%2Fsignin%20page.png)

### 2. Go register or sign-up by click the sign-up button below :

![signup.png](image%2Fsignup.png)

Fill in your information and click sign up to register, after that just sign up into the main page.

### 3. This is the home page:

![homepage.png](image%2Fhomepage.png)

* In this page you can upload your csv file that include 1 - 100 keywords, you can click on "choose file" and select your csv file to upload.
    - your csv must have "keyword" as the column name. you can look at or use "long_csv.csv" or "short_csv.csv" both are in csv folder at the root of the project file.
* under the "upload" button you can preview your csv file there.
* After that click on "upload" to send data to the backend and start the scraping this process may take about 4-5 minutes (If the process take longer than 4-5 minutes you should refresh the page and upload, the detail of this issues I will explain again below).

![click upload.png](image%2Fclick%20upload.png)

### this is after the upload and scraping data complete on the right of the screen you can see the results over there:

![result.png](image%2Fresult.png)

### at the column name you click on it to sorting the column, and also you can search for the keyword:

![sorting.png](image%2Fsorting.png)

### and also you can click on the list to see the full result:

![full result.png](image%2Ffull%20result.png)

4. This is history page:

* In this page you can see the history of your upload keywords.
* In this page you also can sorting, search, and click on the list to view full result with API.
* And the table is lazyload scrolling with API pagination.

![history.png](image%2Fhistory.png)

## Developer process and thought

###### My background I have start learning web development from the beginning by myself and working as full stack web developer alone in my current company, so sorry if my code style or folder structure or something is different from other professional developer.

After I see the test requirements for the first I was thinking about how to make this project nice and fast,
because I have to work for my company and also need to work on this project at the end of the day.

At my first thought I was going to use my most confident stack such as: JavaScript, Python, ReactJs, Redux, Django to keep thing simple for me,
because I never have an experience on web scraping.

In the end, I was decided to learn new things and improve myself at the time, that make the stack change to TypeScript, React Ts, React hook, Express.
so this project is going to be my first time writing React with TypeScript + new folder structure, React hooks and also Testing, because I have never done testing before,
for the reason behind that I just want to learn and improve myself to be better developer and also work with a team.

### System design
### Frontend:
Below here I will list and reason of use it:

1. ReactTs
2. React hooks
   - React hooks is a nice feature that come with react out of the box that help us to do lightweight state management if compare it to redux. 
3. react-hook-form
   - for help me to manage signUp and signIn form and validation in simple way.
4. react-router-dom
   - the new version react-router-dom v6 is come with simple way to handle routing in react app.
5. Tanstack react table / react virtual
   - this library is an amazing library that help us a lot when we're working on sorting, search or pagination function for both client side and server side.
6. axios
   - simple CRUD library.
7. papaparse
   - this library is help us to parse csv to json in simple way.

### Backend:
Below here I will list and reason of use it:

1. Express
2. Prisma
   - ORMS.
3. nodemon
   - for nodeJs to hot-reloading.
4. cheerio
   - for web scraping.
5. unirest
   - simple CRUD library and lightweight.
6. jsonwebtoken
   - for handle security.

### Testing:

This is my first time of doing the testing, after I go research about testing for React I found that there are 3 ways to test application,
those are Jest, Testing-library both are for unit testing and the other is Cypress which is for End-to-End testing.

But this time I decide to go with Testing-library, due to it simple, lightweight and compatible with Vite react.

### For the first I try to test on component mount in the SignIn page:
![test componet mount.png](image%2Ftest%20componet%20mount.png)

### For the second I try to test on button click:
![btn click.png](image%2Fbtn%20click.png)

After I have done with these 2 testing, I got a feeling that testing is similar to web scraping because you have to select the element in the page and do something with.

However, making this project is quit challenging for me, at the end I was fun on learning new stuff and hope I have an opportunity to learn new things with Nimble again.

Finally, If you have any questions or bugs feel free to open the issues, I will try to repose to it asap.

### Thank you!!.
Phisith Lengsavath




