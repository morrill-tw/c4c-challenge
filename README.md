## Startup Instructions

To run the app, a few things need to be installed, and then some additional steps must be taken. (The startup instructions for this application are identical to those for the starter code).

- Install Node.js/NPM at https://nodejs.org/en/download/package-manager and Git at https://git-scm.com/downloads.

- Once both are installed, clone this repo onto your computer by executing the following command in a terminal: 'git clone https://github.com/morrill-tw/c4c-challenge.git'. Once cloned, run the command 'npm install' at the root of this project. At this point, the app is now ready to open. To open the application, run the command 'npm run dev' at the root of this project, and visit https://localhost:3000 to view the site.

## Overview

This application allows for the management of partner information for Code4Community. Partner information includes a partner's name, logo, a short description of the organization, and whether or not they are currently working with Code4Community. Features include:

- The ability to add partner tiles to the site that include all of the partner information listed above. This is done through a form at the top of the page that can be expanded or collapsed by pressing the green 'Add Partner Info' button.

- The ability to delete partner tiles from the site by pressing the red 'Delete' button on the undesired tile.

## Design Decisions

- Visually, my application stays mostly loyal to the provided example. I kept many of the previously defined CSS attributes, and when creating new pieces like the 'Add Partner Info' form, I copied over a lot of these attributes. This was to ensure that the style of the form and the partner tiles did not clash. My form does look somewhat different than that in the example however. I went for a sleeker, more modern design.

- Functionally, I also stayed mostly loyal to the provided example. I noticed that there was an 'Add Partner Info' button at the top of the provided example which inspired me to make the form both expandable and collapsible. It's nice to have the ability to remove the partner form from the screen so that it doesn't distract from the partner tiles when the user is not actively adding a new tile. I also added an error message that appears when the user tries to submit information for a new partner tile without having filled out all fields. In this case, in addition to the pop-up message, a new partner tile is not added to the page. I chose to add this feature to prevent the addition of incomplete tiles. This contributes to an overall cleaner look for the page. The pop-up error message serves as a reminder to the user to fill out any fields that they may have overlooked or forgotten.

## Reflection

To preface, I had very minimal knowledge coming into this project. I had only scratched the surface of javascript, HTML, and CSS, and had never dabbled in React or Express previously.

- What did I learn? I learned a lot. I learned how to create and use React components to display different pieces of information on the screen. I appreciate their reusability and the ease with which I was able to render each partner tile on the screen. I learned how to add state variables to my functional components to manage features like the opening and collapsing of the 'Add Partner' form. I also learned about routing through Express. I learned how to use methods like get, post, and delete to manage information in the backend of my application, specifically, the list of partners. Moreover, I refreshed my memory on how to create functions and represent data in javascript, and learned some new things like a shortcut for writing conditionals. 

- What would I do differently knowing what I know now? It's hard to say because my knowledge does not extend very far past that which I was able to produce for this challenge (at least in terms of web app development). One thing that I will say, is that I think I could have made better use of react components. In the 'Add Partner Info' form of my application, there is a bit of redundant code regarding the creation of the input text boxes. There would be a great spot to make use of a react component to not only reduce the amount of redundant code that I have now, but also to use in the future if I would ever like to expand on the number of fields in the form.

- What challenges did I encounter? Most of the issues that I ran into in the development of this application were knowledge barrier problems. I was able to get over these hurdles by utilizing the resources provided in the project guidelines, and seeking out others. Youtube videos, StackOverflow, and some of the lessons on W3schools were all helpful in surpassing some of these challenges.

- Did I add any bonus features? One bonus feature that I implemented was the error that appears when the 'Add Partner' form is not fully completed. I chose to implement this because it prevents the user from producing tiles that are lacking information, which not only keeps things cleaner but serves as a reminder to the user to fill out any fields that may have been forgotten. Although small, adding a bonus feature like this was a win for me! It was proof to myself that I was not just able to complete this daunting task in its entirety, but to even add something extra to showcase some of the things that I had learned along the way.
