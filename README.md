# Todos

A Todo app that allows you to update add and view todoes and authenticates users you can login and test it out.

Link to the application: https://yehan-frontend-assessment-todo.netlify.app/

## Concepts and Areas Covered

- Set up development  environment using React Vite , Intergrate Mui library
- Used Mui Design Concepts and it's theme
- Developed Protected Routes in React Router for Authentication
- Used help of context Api to Help in authentication and authorization 
- Configured and used formik and yup for validations and bscrypt for hashing
- Usage of local storage to save the data
- various array methods to manage todos , save , search , view , 
- Component-Based Architecture: Utilizes React's component structure.
- Set Up a PWA App

## Features

- CRUD functionalities of Todo's
- Display different messages for different todo operations ex: if all todos complete you get congratulations.
- User authentication and authorization using Bcrypt and formik and yup
- Notifies users authentication and actions by alerts
- Sorting by various fields (full name, age, and date)
- Searching todos
- PWA App 
- Fully Mobile Resposive Web App 



## Tools and technologies used
- React
- Material UI
- Vite
- React + Hooks + Context Api
- React Router
- Formik + Yup
- bcrypt

## Get started

Firstly you would need to install npm you can install it from  https://nodejs.org/en/download/package-manager/current from this site by choosing your system requirements , if you have node js then you do not need to install, how ever if your version is outdated it will good to upgrade it. 

Open a terminal and clone this repo:

```bash
# Clone this repository
$ git clone 

# Go into the repository
$ cd yehan-frontend-assessment-irusri-group-ab

# Remove current origin repository
$ git remote remove origin

# If you want, you can add a new remote repository
$ git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git
```

Open the project with your favourite code editor if you have vs code you can type code in your terminal to open it 

```bash
# Terminal for the server
# cd into the rroject folder and open it
# in your text editors terminal or using the shell type

# Install dependencies
$ npm install

# run the server
$ npm run dev
```


```

At this point, you will have the server running locally at http://localhost:5173 or  http://localhost:5174 <br/>.


## Deployment

- This  application is deployed to [Netlify](https://netlify.com/)<br/>

### Deploying the client app to Netlify

First, create a Netlify account if you do not have one already. Log in to your account. If your project is already on GitHub, then you can opt for Netlify's continuous deployment:

- Click `New site from git`, then select `GitHub`
- Select the project repo that you want to link to your Netlify site for continuous deployment
- Apply these settings -> Base Directory: client, Build Command: npm run build, Publish directory: client/build
- Click `Deploy Site`

If you do not have a git repo for your project on GitHub, then you have to manually generate a production build of the client app:

```bash
$ cd client

# create a production build
$ npm run build
```

You can use this `build` folder to deploy the client app to Netlify.
