# DESN 378: Code + Design 2

🔗 **[Learning Log](https://CoolShark-guy.github.io/DESN378-code-design-2)**
🔗 **[DESN368 Portfolio] https://portfolio-fm-368.netlify.app/

---

## About This Repository

This is my workspace for **DESN 378 Code + Design 2** also known as **Web Design 2** (or in the future, **Web Design + Code 2**) at Eastern Washington University. **The question this course asks:** How should things behave? In DESN 368, I learned how to make things look right. Here, I'm learning how to make things behave right — treating code as a design material with properties, behaviors, and constraints, just like paint, paper, or clay. Throughout the quarter, I'll work with four digital materials: CSS systems, SVG, animation libraries, and generative code — learning how each responds to manipulation and what each makes possible. Unlike courses focused on user research or backend engineering, this one asks: How does it feel? By the end, this repo will become my portfolio.


---

## Projects

| # | Project | Focus | Status |
|---|---------|-------|--------|
| 1 | The System | Design tokens + theme switching | 🔲 |

---

## Learning Log

Update this section each week with observations, breakthroughs, and questions.
## Week 0
​
### What I Learned
I learned what the concepts of what the pattern looks like to call back to elements in HTML from Javascript to add them to a function, and event listener. I also learned you can create functions instead of using the preset functions all the time. I understand the concepts of if, else statements, but I just need more practice typing them out and putting them to practice.
​
​
### What Was Hard
Often times it was just two lines of code conflicting with each other, but using AI to clear this stopgap really sped up the process.
​
​
### How I Used AI
I used Claude to help me troubleshoot my code by giving it my behavioral-layer files and having it identify conflictions in my code. I also used to to help me learn the code line by line. (I love Claude for coding)
​
​
### What's Still Unclear
I think I just need more repetition with the concepts taught in week 0 here, i.e. event listener, functions, setting inputs to local storage, or not doing so using "!" and so on.
​
​
### Work Completed (Week 0)
​
**Engage**
- [x] Portfolio Audit
​
**Learn**
- [x] Console Explorer
- [x] Codedex Console Fundamentals
​
**Reflect**
- [x] Visual Notes: Variables and Strings
​
**Build**
- [x] The Setup
- [x] The Behavioral Layer
​
---

### Week 1: Systems That Respond

### What I Learned
I've drilled the concepts of variable declarations in my head and I know what they do and how to use them. I'm also able to parse through JavaScript significantly better than before. I can read it and have an idea of what I'm looking at.

### What Was Hard
Understanding if/else statements and the syntax of other elements in JavaScript. I just need repetition on these bits of code to understand them and be able to write them with some effort.

### How I Used AI
I used Claude Sonnet 4.5 to help me build my story-teller assignment in week 1. It built the HTML and CSS framework under my supervision. If there were elements I didn't understand, I went back and questioned it until I had enough of an understanding to move on, and I would repeat this until I finished the project. Some elements of the JavaScript still elude me, but the more I question the AI and the more I practice typing it out, I will grasp it.

### What's Still Unclear
If/else statements have been my biggest hurdle. I can read them and I understand what they do theoretically, but there is a lot of syntax in them that I do not understand whatsoever.

### Work Completed (Week 1)

**Engage**
- [x] VS Code Theme Setup

**Learn**
- [x] Codedex.io Variables
- [x] HTML Academy 

**Practice**
- [x] The Story Teller

**Build**
- [x] Portfolio Migration
- [x] Portfolio in Figma + Style Tile

**Reflect**
- [x] Visual Notes: Week 1---

---

### Week 2: Remembering Choices
​
### What I Learned
Using Figma I learned how important design systems are to create a cohesive brand system that works across multiple platforms, as well the basics of how to switch a websites themes from light to dark and vice versa. I also practiced conditionals a bit more in codedex.io.
​
​
### What Was Hard
Setting up variables and learning how to organize them efficiently was very tedious as well as drilling conditional statements in my head.
​
​
### How I Used AI
I used Claude to explain elements of conditionals I didn't understand, as well as how to use them, as well as helping me understand how to switch themes.
​
​
### What's Still Unclear
Switching themes are still a bit unclear to me, but once I get more practice with the code itself and learning the syntax, there shouldn't be much trouble.
​
### Work Completed (Week 2)

**Engage**
- [x] VS Code Theme Setup

**Learn**
- [x] Codedex.io Conditionals
- [x] figma variables

**Practice**
- [x] The Switch

**Build**
- [x] The Foundation
- [x] Portfolio in Figma + Style Tile

**Reflect**
- [x] Visual Notes: Week 2---​

## Quick Links

- [My Profile](PROFILE.md)
- [Labs](labs/)

---

## Tools

- **Editor:** VS Code + GitHub Copilot
- **Design:** Figma
- **Hosting:** GitHub Pages
- **Animation:** GSAP (coming Week 5)

---
​
## Week 3 — Signal & State

### What I Learned
I learned what design tokens are in CSS and how to structure them, using primitive tokens (like --cyan) and semantic tokens (like --primary). I also learned how to store themes using localStorage in the browser so that when the user refreshes the page, the theme persists. I've also learned why :root needs fallback values for semantic tokens, just in case JavaScript hasn't run yet.

### What Was Hard
Debugging code like addEventListener, as well as distinguishing the difference between document.documentElement vs document.body, which was difficult for me to grasp at the time.
 - Understanding what variables did wasn't hard, but understanding the underlying code was. Finding out why we use both semantic and primitive tokens was difficult to understand. I found myself wondering why we don't just use primitive tokens instead of both.

### How I Used AI
I used Claude to help track down bugs in the toggle logic and explain why they were bugs, as well as for coaching on data-theme, localStorage, and matchMedia. I also used it to review styles.css for any remaining hardcoded values that should be tokens.

### What's Still Unclear
I understand what code does when I read it, but building it from scratch without a reference or example is still where I'm stuck. The pieces of a function and how to fit them all together is still hard for me to grasp.

### Work Completed (Week 3)

**Design Tokens**
- [x] variables.css exists
- [x] Color tokens defined
- [x] Typography tokens defined
- [x] Spacing tokens defined
- [x] Tokens used in CSS (no hardcoded values)

**Theme System**
- [x] Uses data-theme on <html>
- [x] Toggle feedback is immediate

**Persistence & Preference**
- [x] Theme saved to localStorage
- [x] Theme persists on refresh
- [x] System preference used on first visit

**Deployment**
- [x] Deployed to GitHub Pages
- [x] Repository is public

*This README will evolve. At quarter's end, it transforms into a portfolio landing page.*
