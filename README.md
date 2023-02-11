# Password Generator

This application emphasizes the use of Javascript to generate a random, secure password for the user.

This project has been deployed to GitHub Pages. To get this project up and running, you can follow the deployment link.
https://gpaul12.github.io/UNC-VIRT-FSF-PT-01-2023-U-LOLC-MTTH-Mod3-Challenge/

### Features:

- One HTML Pages
  - Index.html (Source Code)
    - Contains basic user input items and buttons with divs and ids
- One CSS Page
  - Styles.css (Source Code)
    - Contains centering and styling for html user input features
- One Javascript Page (Student Code)
  _ Contains:
  _ Variables, including arrays and value placeholders
  _ One event listeners
  _ Two if/if else statements

### This project has script features:

- Variable declaration area
- An event listener (onclick) called generateBtn
  - This will prompt the user for input between 8-128
  - This variable is changed to an interger using ParseInt()
  - This will validate that the input is a number within range, or is a number
  - This then uses the input to determine the types (or options) or letters of characters used, using an if statement
  - This then assigns values to the variables using arrays for character, number or alphabet
- Another variable is created to concatenate the above variables
- A for loop will loop through the enter prompt until it reaches the number entered by user.
- A password variable takes the value from the for loop, and converts it to a string.
- The string value then populates into the text area for the user using a UserInput function.

## Author

- **Gerry Paul** - [GitHub Profile](https://github.com/gpaul12)
