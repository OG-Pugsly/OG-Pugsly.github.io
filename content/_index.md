---
title: The Programming Pug — Dev Portfolio
summary: "Ashley’s portfolio showcasing Game Programming, Software Engineering, and QA Testing projects."
date: 2026-08-01
type: landing
sections:
  - block: hero
    content:
        eyebrow: The Programming Pug
        title: "Hi, I’m Ashley — Your [Game Programmer], Software Engineer & QA Tester"
        text: "Crafting immersive gaming experiences, robust software solutions, and quality assurance excellence. Welcome to my professional portfolio."
        primary_action:
          text: See My Work
          url: "#projects"
          icon: hero/rocket-launch
          style: gradient
        secondary_action:
          text: Contact Me
          url: "#contact"
          icon: hero/envelope
          style: ghost
    design:
        background:
          gradient:
            type: radial
            start: primary-500/50
            end: transparent
            position: center
            shape: ellipse
            size: "80% 70%"
        text_color_light: true
        css_class: relative overflow-hidden
        spacing:
          padding:
            - 4rem
            - 0
            - 5rem
            - 0
  - block: portfolio
    content:
        id: projects
        title: Projects
        description: "A selection of my work across game programming, software engineering, and QA testing."
        featured_only: false
    design:
        spacing:
          padding:
            - 3rem
            - 0
            - 3rem
            - 0
  - block: contact-info
    content:
        id: contact
        title: Get in Touch
        text: "I'm open to new opportunities and collaborations. Reach out to discuss projects or just say hello!"
        email: "contact@programmingpug.com"
        phone: ""
        location: ""
        socials:
          - icon: brands/github
            url: "https://github.com/yourgithubusername"
          - icon: brands/linkedin
            url: "https://linkedin.com/in/yourlinkedin"
    design:
        spacing:
          padding:
            - 3rem
            - 0
            - 5rem
            - 0
---
