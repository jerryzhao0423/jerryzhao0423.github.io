---
layout: post
title: Simple Django Unit Test
date:   2018-03-08 13:52:39
categories: others
---

<h2>Simple Django Unit Test</h2>
Something thing more about Django unit test, including how to write and how to run.<br/>

<h3>A simple example</h3>
{% highlight python %}
from django.test import TestCase
from myapp.models import Animal

# Django unittest based on .unittest
class StudentTestCase(TestCase):
    # Execute before the test
    def setUp(self):
        print("======in setUp")

    # Contents need to be tested
    def test_add(self):
        student = Student(name='aaa')
        student.save()
        self.assertEqual(student.name, 'aaa')
    
    # Contents need to be tested
    def test_check_exit(self):
        self.assertEqual(0,  Student.objects.count())

     # Execute after the test
    def tearDown(self):
        print("======in tearDown")
{% endhighlight %}

<strong>Some points about django unit test:</strong>
<ul>
	<li>For every test method, setUp() and tearDown() will be executed.</li>
	<li>A test database will be set up only used for testing and it will be destroyed right after the test by default.</li>
	<li>The test database operations in each method will be erased when the method is done. For example, the data added in the <em>test_add</em> will be cleaned up when finished and not be able to use in the <em>test_check_exit</em>.</li>
	<li>When doing unit test, some variables in <em>.settings</em> will be changed. For example, DEBUG will be changed to True, and ALLOWED_HOSTS will be changed to [*].</li>
</ul>
























