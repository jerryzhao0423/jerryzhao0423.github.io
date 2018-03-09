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
<strong><em>Tests make your code more attractive</em></strong><br/>
Many developers will simply refuse to look at it because it lacks tests. Jacob Kaplan-Moss, one of Django’s original developers, says <em>“Code without tests is broken by design.”</em><br/>
<strong><em>Tests help teams work together</em></strong><br/>
Complex applications will be maintained by teams. Tests guarantee that colleagues don’t inadvertently break your code (and that you don’t break theirs without knowing). If you want to make a living as a Django programmer, you must be good at writing tests.<br/>

<h3>Basic testing strategies</h3>
There are many ways to approach writing tests.<br/>
Some programmers follow a discipline called “test-driven development".More often, a newcomer to testing will create some code and later decide that it should have some tests.<br/>
Sometimes it’s difficult to figure out where to get started with writing tests. If you have written several thousand lines of Python, choosing something to test might not be easy. In such a case, it’s fruitful to write your first test the next time you make a change, either when you add a new feature or fix a bug.<br/>

<h3>Writing our first test</h3>
<strong><em>We identify a bug</em></strong><br/>
<strong><em>Create a test to expose the bug</em></strong><br/>
<strong><em>Running tests/em></strong><br/>
<strong><em>Fixing the bug</em></strong><br/>
<strong><em>More comprehensive tests</em></strong><br/>





























