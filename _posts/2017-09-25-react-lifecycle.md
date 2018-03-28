---
layout: post
title: React component lifecycle
date:   2017-09-25 19:32:10
categories: others
---

<h2>React - Component lifecycle</h2>

<p>In React, as an important part, each component has several "lifecycle methods" which you can override. Methods prefixed with <strong>will</strong> are called right before something happens, and some methods prefixed with <strong>did</strong> are called right after something happens.</p>

<h3>Mounting:</h3>

<p><strong>constructor()</strong></p>
<p>The constructor of a component is called before it's mounted. You need to call <em>super(props)</em> before any other statement. Or <em>this.props</em> will be undefined in this constructor. The constructor is the right place to initialize state. To do so, just need to assign an object to <em>this.state</em>. Do not try to call <em>setState()</em>from the constructor.</p>

<p><strong>componentWillMount()</strong></p>
<p><em>componentWillMount()</em> is invoked just before the mounting occurs. It is called before <em>render()</em>, therefore calling <em>setState()</em> here will not trigger an extra rendering.</p>

<p><strong>render()</strong></p>

<p><strong>componentDidMount()</strong></p>
