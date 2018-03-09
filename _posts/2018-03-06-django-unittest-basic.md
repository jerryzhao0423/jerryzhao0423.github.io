---
layout: post
title: Django Unit Test Basic
date:   2018-03-06 23:39:12
categories: others
---

<h2>Django Unit Test Basic</h2>
Recently, I have been told to learn things about the django unit test to write testing files, so that my recently referral system can be tested and make sure it works. I knew nothing about unit test before, and I tried to find my answer on the official website. Fortunately, Django official (<a href="https://docs.djangoproject.com/en/dev/intro/tutorial05">Writing your first Django app, part 5</a>) provide a great tutorial for a beginner. And here is some points I think will be beneficial to someone knows nothing about unit test before. <br/>

<h3>What are automated tests?</h3>
Tests are simple routines that check the operation of your code.<br/>
Testing operates at different levels. Some tests might apply to a tiny while others examine the overall operation of the software.<br/>
What’s different in automated tests is that the testing work is done for you by the system. You create a set of tests once, and then as you make changes to your app, you can check that your code still works as you originally intended, without having to perform time consuming manual testing.<br/>
<h3>Why you need to create tests?</h3>
<strong><em>Tests will save you time</em></strong><br/>
A change in any of those components could have unexpected consequences on the application’s behavior. If something’s gone wrong, tests will assist in identifying the code that’s causing the unexpected behavior in seconds.<br/>
<strong><em>Tests don’t just identify problems, they prevent them</em></strong><br/>
Without tests, the purpose or intended behavior of an application might be rather opaque. 
Tests change that; they light up your code from the inside, and when something goes wrong, they focus light on the part that has gone wrong.<br/>































