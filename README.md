This is a pokémon finder app
The app description is:

The software used for searching pokémons by name or listing 20 of them with the use of the
https://pokeapi.co/ 3rd party API. After listing one or more pokémons, we are able to click on the ‘Visit
Profile’ link, which will take us to the ‘Profile’ screen, where we can find detailed information about the
selected pokémon. Such as height, weight and base experience, and an image of the pokémon.
If during the search we spelled wrong the pokémon, we will go to the ‘404 not found’ screen.
To manage global state I used the React context api with reducers.


INPUT:

Input 1:

    The search field is empty

Input 2:

    Search after a specific pokémon for example 'pikachu'

Input 3:

    After listing one or more pokémon(s) we can click on the 'Visit Profile' link

OUTPUT

Output 1:

    After hitting the 'GO' button, 20 pokemons will appear
    We can arrange the order of the pokemons by dragging them

Output 2:

    After hitting the 'GO' button, the desired pokémon will appear
    If we spelled the name incorrectly the '404 not found' page will appear

Output 3:

    We will be taken on the 'Profile' page where the picked pokémons hight, weight, base experience and a nice picture of of it are shown

Getting Started with the App

After downloading the code, in the project directory, you can run:

npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

Deployment

The app have been deployed on Vercel under the url of: https://pokemon-finder-pi.vercel.app/

Used frameworks and libraries:

- Tailwind CSS
- Daisy UI
- react-testing-library
- react-dnd/kit
- react-router-dom
- react-icons
