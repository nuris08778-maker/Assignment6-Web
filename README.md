# Assignment 6. jQuery (Selectors, Effects, Animations)

**Name:** Your Name
**Group:** Your Group

**GitHub repository:** https://github.com/your-username/your-repository
**GitHub Pages:** https://your-username.github.io/your-repository/

## Project Structure

```
index.html
css/style.css
js/script.js
images/ (profile.svg, hobby.svg, travel.svg, project.svg)
screenshots/
README.md
```

---

## Part 1. Getting Started with jQuery

### Task 0. Setup

- Include jQuery from a CDN.
- Write a `$(document).ready(function() { ... })` function.
- Test by printing "jQuery is ready!" in the console.

jQuery 3.7.1 is loaded from the official CDN before my own script. Inside `$(document).ready()` the message "jQuery is ready!" is printed to the console. The same message is also shown on the page in a small label.

<img width="1413" height="557" alt="image" src="https://github.com/user-attachments/assets/8e204e60-c481-416c-8bc2-b004f84e5dad" />


### Task 1. Selectors & CSS

- Display your name, a personal headline, and a short introduction.
- Include a profile section with a title such as "Welcome to My Portfolio."
- Use tag, ID, and class selectors to select different HTML elements.
- Dynamically update your greeting or headline using `.text()` or `.html()`.
- Use `.css()` to change the styling of selected elements.
- Add buttons to switch between light and dark themes.

The header shows my name, headline and introduction. The "Welcome to My Portfolio" section contains the control buttons.

- Tag selector: `$("h1")`
- ID selector: `$("#intro")`, `$("#name")`
- Class selector: `$(".section-title")`, `$(".card")`
- `.text()` changes the headline, `.html()` changes the greeting
- `.css()` styles the name and applies the light and dark themes

Light version after clicking "Change Headline", "Change Greeting" and "Style My Name":

<img width="1415" height="825" alt="image" src="https://github.com/user-attachments/assets/22e471a1-fff9-43a8-9f90-5e9f4c18a3db" />


Dark theme:

<img width="1405" height="826" alt="image" src="https://github.com/user-attachments/assets/7cdf646d-7a00-4955-a0d4-69894d24563d" />


---

## Part 2. jQuery Effects

### Task 2. Visibility Methods

- Create an "About Me" section.
- Add a short biography and a current status message, such as "Currently learning jQuery!"
- Include a few fun facts about yourself, your interests, or your goals.
- Add three buttons: Hide, Show, and Toggle.
- Use the buttons to control the visibility of your status message or fun facts.

The About Me section has a biography, the status message and a list of fun facts. The buttons use `.hide()`, `.show()` and `.toggle()` on the status message and the fun facts.

Before:

<img width="1398" height="551" alt="image" src="https://github.com/user-attachments/assets/093c1b4d-6c74-4388-b91e-bf53614f1cb7" />


After clicking Hide:

<img width="1412" height="336" alt="image" src="https://github.com/user-attachments/assets/fcb67418-8d67-4ef2-b838-514605d58962" />

After clicking Toggle:

<img width="1410" height="549" alt="image" src="https://github.com/user-attachments/assets/8081bcf1-65b3-460b-bd00-80af14a0549d" />

### Task 3. Fade Methods

- Display at least two images (your profile picture, favorite hobby, travel photos, or personal projects).
- Use `.fadeIn()`, `.fadeOut()`, `.fadeToggle()` effects to control the visibility of gallery images.

The gallery has four images: profile picture, favorite hobby, travel photo and personal project. The buttons use `.fadeOut()`, `.fadeIn()` and `.fadeToggle()`. Each image can also be toggled by clicking on it.

Before:

<img width="1405" height="530" alt="image" src="https://github.com/user-attachments/assets/62beb6f4-f78e-470b-944c-e5fd75c5e0fe" />

After clicking Fade Out:

<img width="1418" height="548" alt="image" src="https://github.com/user-attachments/assets/e8857ca9-625e-4eb3-be85-c36c41affa75" />

### Task 4. Slide Methods

- Create at least three clickable headings, such as "My Favorite Music," "My Favorite Movie," and "My Favorite Subject."
- Place related information inside a collapsible panel beneath each heading.
- Use `.slideUp()`, `.slideDown()`, `.slideToggle()` to make the interaction smooth.

There are three clickable headings with a panel under each one. A click on a heading uses `.slideToggle()`. The "Open All" button uses `.slideDown()` and the "Close All" button uses `.slideUp()`.

All panels closed:

<img width="1408" height="495" alt="image" src="https://github.com/user-attachments/assets/b1a08f0e-5d69-4b40-b426-9d4276ef4819" />

Two panels opened by clicking the headings:

<img width="1408" height="562" alt="image" src="https://github.com/user-attachments/assets/4f60ad0f-00ce-4962-ab42-2d11fd0eeaaa" />

All panels opened with "Open All":

<img width="1410" height="709" alt="image" src="https://github.com/user-attachments/assets/13fbf5e5-f1de-459c-a52f-265635cf70c5" />

---

## Part 3. DOM Manipulation with jQuery

### Task 5. Add & Remove Elements

- Display an initial list containing at least four technical skills.
- Add a text input where visitors can enter a new skill.
- Create three buttons: "Add Skill," "Prepend Skill," and "Remove Skill."
- Use `.append()`, `.prepend()`, `.remove()`.
- Prevent empty skills from being added.

The initial list has five skills. The input and three buttons work with `.append()`, `.prepend()` and `.remove()`. The value is checked with `.trim()`, so an empty skill is never added and an error message is shown instead. "Remove Skill" removes the last skill from the list.

Initial list:

<img width="1409" height="379" alt="image" src="https://github.com/user-attachments/assets/27ba7e11-1bc3-4420-80c1-7957494b3b9f" />

Empty input validation:

<img width="1409" height="423" alt="image" src="https://github.com/user-attachments/assets/3d1747cd-ebb8-4479-9879-e1f023a2a733" />

After adding "React" (append) and "TypeScript" (prepend):

<img width="1409" height="423" alt="image" src="https://github.com/user-attachments/assets/4d943176-8034-4e07-bee1-3932c01f8fe3" />

After clicking Remove Skill:

<img width="1393" height="320" alt="image" src="https://github.com/user-attachments/assets/77410b0a-4a65-401d-b51b-3618071077a4" />

### Task 6. Modifying Attributes

- Add a social media link, such as GitHub, LinkedIn, or a personal website.
- Create a button that dynamically changes the link's destination using `.attr()`.

The page has a GitHub link. The "Change Link" button uses `.attr()` to change the `href` and `title` and switches between GitHub, LinkedIn and a personal website.

Before:

<img width="1393" height="330" alt="image" src="https://github.com/user-attachments/assets/37a6c7c5-08b3-412a-8653-10c30045bc23" />

After clicking Change Link:

<img width="1431" height="887" alt="image" src="https://github.com/user-attachments/assets/6412bd91-a3b1-4850-a8a7-e231a128a96a" />

### Task 7. Form Interaction

- Create a form with inputs for Name and Email.
- When the user types, display their input live below the form using `.val()` and `.text()`.

The form has Name and Email inputs. On every keystroke the `input` event reads the value with `.val()` and shows it below the form with `.text()`.

<img width="1387" height="511" alt="image" src="https://github.com/user-attachments/assets/3ab966df-09f3-433b-acf2-f43258be7647" />

---

## Part 4. Animations

### Task 8. Basic Animation

- Extend Task 5 by creating a visual representation of at least three technical skills using skill bars.
- Add an "Animate My Skills" button.
- Initially, the skill bars should have zero width.
- When the button is clicked, use jQuery's `.animate()` method to increase the width of each skill bar.
- Use different target widths to represent different skill levels.
- When the button is clicked again, animate the skill bars back to zero width.

Skill bars are built from the skill list of Task 5, so every new skill gets its own bar too. All bars start with zero width. The "Animate My Skills" button uses `.animate()` to grow every bar to its own level (HTML5 90%, CSS3 85%, JavaScript 75%, jQuery 60%, Git 70%). A second click animates all bars back to zero. The percentage labels are updated during the animation.

Initial state (zero width):

<img width="1339" height="637" alt="image" src="https://github.com/user-attachments/assets/fb89ebe2-5e9d-4acb-b8b2-c3fc7508d314" />

During the animation:

<img width="1393" height="634" alt="image" src="https://github.com/user-attachments/assets/25c4f1b3-678e-40af-9bb5-01d51d29469d" />

After the animation:

<img width="1393" height="634" alt="image" src="https://github.com/user-attachments/assets/ae14994d-5319-438d-80a2-54b82c53411a" />

After the second click:


---

## Summary of My Work

I started with the structure of the page in `index.html` and connected jQuery from the CDN together with my own `script.js`. Then I went through the tasks one by one: first selectors and `.css()` with the theme switcher, then the effects (show/hide, fade and slide), then DOM manipulation (adding and removing skills, changing the link, live form), and finally the animated skill bars with `.animate()`. I tested every button in the browser, checked that the console has no errors and made screenshots for each task. Finally I uploaded the project to a public GitHub repository and published it with GitHub Pages.
