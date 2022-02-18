# Kasa
## Develop a web application with React and React Router

---  


## Table of Contents
  - [Description](#description)
  - [How to install the project](#how-to-install-the-project)
    - [Front](#front)
    - [Back](#back)
  - [Tech](#tech)
---

## Description
![Legend](./readMe/logo.png)

__*Kasa*__ is the eleventh project I made during this training. As a freelance front-end developer, the goal 🎯 was to  to develop a new web platform for renting apartments between individuals in France by using React and React Router.

to start the project, I had at my disposal :
- A [Json file](https://github.com/Roy-Framery-s-Openclassrooms-projects/RoyFramery_11_31012022/blob/main/kasa/src/__mocks__/data.json)
- A [coding guidelines](./readMe/coding_guidelines_Kasa.pdf)
- A [mockup](https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=4%3A1)
- And some Functional constraints about carrousel and dropdonws elements :

  - For scrolling through the pictures in the gallery (Gallery component):
    - If the user is at the first image and clicks on "previous image", the gallery displays the last image. 
    - Conversely, when the displayed image is the last one in the gallery, if the user clicks on "next image", the gallery displays the first image. 
    - If there is only one image, the "next" and "previous" buttons do not appear.
    - The gallery must always remain at the same height, as indicated on the Figma model. The images will therefore be collapsed and centered in the image frame.
  - Collapse: By default, collapses are closed when the page is initialized. 
    - If the Collapse is open, the user's click will close it.
    - Conversely, if the Collapse is closed, a click opens it.


[Back to the top](#kasa)

---


## How to install the project

💽 **Kasa** requires [Node.js](https://nodejs.org/en/) to run.

Clone repository
```sh
git clone https://github.com/Roy-Framery-s-Openclassrooms-projects/RoyFramery_11_31012022.git
```

Access to the project directory
```sh
cd RoyFramery_11_31012022/kasa/
```

Install dependencies
```sh
npm i
```

### Front :
Access to the project directory
```sh
cd RoyFramery_11_31012022/kasa/
```

launch the server
```sh
npm run start
```
Reach to your localhost server : [http://localhost:3000](http://localhost:3000) 

### Back :
Access to the project directory
```sh
cd RoyFramery_11_31012022/kasa/
```

launch the data server
```sh
npx json-server -p 8080 -w src/__mocks__/data.json
```

---

## Tech


🕹️ __*Kasa*__ use open source projects to work properly:

- [React](https://reactjs.org/) - to build the user interface
- [Create React App](https://create-react-app.dev/) - to launch the project
- [React Router v6](https://reactrouter.com/) - to manage routing
- [Sass](https://sass-lang.com/) - CSS enhanced for web apps!

[Back to the top](#kasa)

---
## Author info 
🧑‍🎓 Roy Framery
- [LinkedIn](https://www.linkedin.com/in/roy-framery/)

[Back to the top](#kasa)
