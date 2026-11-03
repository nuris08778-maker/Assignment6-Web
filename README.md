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

![Task 0](screenshots/task0-setup.png)

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

![Task 1 light](screenshots/task1-selectors-light.png)

Dark theme:

![Task 1 dark](screenshots/task1-theme-dark.png)

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

![Task 2 visible](screenshots/task2-about-visible.png)

After clicking Hide:

![Task 2 hidden](screenshots/task2-about-hidden.png)

After clicking Toggle:

![Task 2 toggled](screenshots/task2-about-toggled.png)

### Task 3. Fade Methods

- Display at least two images (your profile picture, favorite hobby, travel photos, or personal projects).
- Use `.fadeIn()`, `.fadeOut()`, `.fadeToggle()` effects to control the visibility of gallery images.

The gallery has four images: profile picture, favorite hobby, travel photo and personal project. The buttons use `.fadeOut()`, `.fadeIn()` and `.fadeToggle()`. Each image can also be toggled by clicking on it.

Before:

![Task 3 visible](screenshots/task3-gallery-visible.png)

After clicking Fade Out:

![Task 3 faded out](screenshots/task3-gallery-faded-out.png)

### Task 4. Slide Methods

- Create at least three clickable headings, such as "My Favorite Music," "My Favorite Movie," and "My Favorite Subject."
- Place related information inside a collapsible panel beneath each heading.
- Use `.slideUp()`, `.slideDown()`, `.slideToggle()` to make the interaction smooth.

There are three clickable headings with a panel under each one. A click on a heading uses `.slideToggle()`. The "Open All" button uses `.slideDown()` and the "Close All" button uses `.slideUp()`.

All panels closed:

![Task 4 closed](screenshots/task4-favorites-closed.png)

Two panels opened by clicking the headings:

![Task 4 open](screenshots/task4-favorites-open.png)

All panels opened with "Open All":

![Task 4 all open](screenshots/task4-favorites-all-open.png)

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

![Task 5 initial](screenshots/task5-skills-initial.png)

Empty input validation:

![Task 5 validation](screenshots/task5-empty-validation.png)

After adding "React" (append) and "TypeScript" (prepend):

![Task 5 added](screenshots/task5-skills-added.png)

After clicking Remove Skill:

![Task 5 removed](screenshots/task5-skills-removed.png)

### Task 6. Modifying Attributes

- Add a social media link, such as GitHub, LinkedIn, or a personal website.
- Create a button that dynamically changes the link's destination using `.attr()`.

The page has a GitHub link. The "Change Link" button uses `.attr()` to change the `href` and `title` and switches between GitHub, LinkedIn and a personal website.

Before:

![Task 6 before](screenshots/task6-link-before.png)

After clicking Change Link:

![Task 6 after](screenshots/task6-link-after.png)

### Task 7. Form Interaction

- Create a form with inputs for Name and Email.
- When the user types, display their input live below the form using `.val()` and `.text()`.

The form has Name and Email inputs. On every keystroke the `input` event reads the value with `.val()` and shows it below the form with `.text()`.

![Task 7](screenshots/task7-form-live.png)

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

![Task 8 zero](screenshots/task8-bars-zero.png)

During the animation:

![Task 8 animating](screenshots/task8-bars-animating.png)

After the animation:

![Task 8 full](screenshots/task8-bars-full.png)

After the second click:

![Task 8 reset](screenshots/task8-bars-reset.png)

---

## Summary of My Work

I started with the structure of the page in `index.html` and connected jQuery from the CDN together with my own `script.js`. Then I went through the tasks one by one: first selectors and `.css()` with the theme switcher, then the effects (show/hide, fade and slide), then DOM manipulation (adding and removing skills, changing the link, live form), and finally the animated skill bars with `.animate()`. I tested every button in the browser, checked that the console has no errors and made screenshots for each task. Finally I uploaded the project to a public GitHub repository and published it with GitHub Pages.
