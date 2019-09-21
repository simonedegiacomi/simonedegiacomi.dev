# Introduction

## What is GSoC

Google Summer of Code is a program for university students that brings open source organizations and
young developers together. To participate you need to propose a project to an organization through the GSoC platform. When you're accepted you'll need to decide with your mentors how to work in the following three month. Once a month you and your mentors will submit an evaluation form and, every time you successfully complete a month, you'll get a stipend.

This is a brief description, you can find all the information in the GSoC website. What I strongly suggest is to start to communicate with the organization members before submitting your project, so you can adjust it accordingly to their feedback.

## EV3 as a Storage Device

"EV3 as a Storage Device" is the name of my project for GSoC 2019. I worked with Open Roberta, an
organization that provides a learning platform composed by a graphical programming language to program different robots. One of the robots supported by Open Roberta is the Lego EV3, and it supports it in two main ways, which both require a custom firmware. The problem with this approach is that the process of running a program includes many steps and takes quite a bit of time. A simpler approach is needed, since a faster solution could increase the usage of Open Roberta with EV3, especially in competitions.

### Project goal

The goal of my project is to enable Open Roberta to generate UF2 files, which will then be downloaded by the user and copied over the EV3 running the stock firmware. The user will then be able to start the program as if it were a program created with the official Lego Mindstorm IDE, effectively reducing the setup time.
