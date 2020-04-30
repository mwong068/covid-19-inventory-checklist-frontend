# COVID-19 Inventory Checklist (Front End)

![GitHub repo size](https://img.shields.io/github/repo-size/mwong068/covid-19-inventory-checklist-frontend)
![GitHub stars](https://img.shields.io/github/stars/mwong068/covid-19-inventory-checklist-frontend)
![GitHub forks](https://img.shields.io/github/forks/mwong068/covid-19-inventory-checklist-frontend)
![Twitter Follow](https://img.shields.io/twitter/follow/mwong068?style=social)

## About

The COVID-19 Inventory Checklist app was created to help people all over the world maintain an inventory of their home items in a time when resources are more difficult to obtain. The app was designed to bring awareness to individuals with excessive amounts of items in hopes that they may donate their unused products to those in need. It was also made available so that individuals who may not have enough can use the app to see what's available in their area and reach out directly to those with excess.

This app was made as part of the Twilio and Dev.to hackathon.

### How it works

This application was built using React.js and Redux for this frontend portion. Please see the below sections on how to run the application on your local environment.
Please ensure that you have downloaded the [backend portion](https://github.com/mwong068/covid-19-inventory-checklist-backend-) of this application, to ensure full functionality of the application as it was designed:

<!--
**TODO: UML Diagram**
We can render UML diagrams using [Mermaid](https://mermaidjs.github.io/).
**TODO: Describe how it works**
-->

## Features

- User interface made using [React.js](https://reactjs.org/)
- Single page application is made possible using [React Routers](https://www.npmjs.com/package/react-router)
- Centralized state using [Redux](https://redux.js.org/)
- Icons and design provided by [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react)

## How to use it

1. Create a clone of this repo using [GitHub's repository cloning](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github) functionality
2. Locate the folder in your system and follow the steps below to run the server

## Set up

### Requirements

- [React.js](https://reactjs.org/)
- [React Routers](https://www.npmjs.com/package/react-router)
- [Redux](https://redux.js.org/)
- [Redux-Thunk](https://github.com/reduxjs/redux-thunk)
- [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react)
- A Twilio account - [sign up](https://www.twilio.com/try-twilio)

### Local development

After the above requirements have been met:

1. Clone this repository and `cd` into it

```bash
git clone https://github.com/mwong068/covid-19-inventory-checklist-frontend.git
cd covid-19-inventory-checklist-frontend
```

2. Install dependencies

```bash
yarn install
```
Ensure that you have also added all of the necessary packages as required above.

4. Run the application

```bash
yarn start
```

5. Navigate to [http://localhost:3001](http://localhost:3001)

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## Resources

- [GitHub's repository cloning](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github)
- Images are all from [Unsplash](https://unsplash.com/s/photos/)

## Contributing

This template is open source and welcomes contributions.

## License

[MIT](http://www.opensource.org/licenses/mit-license.html)

## Disclaimer

No warranty expressed or implied. Software is as is.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).