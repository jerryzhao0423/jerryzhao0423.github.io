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
<p>The constructor of a component is called before it's mounted. You need to call <em><strong>super(props)</strong></em> before any other statement. Or <em><strong>this.props</strong></em> will be undefined in this constructor. The constructor is the right place to initialize state. To do so, just need to assign an object to <em><strong>this.state</strong></em>. Do not try to call <em><strong>setState()</strong></em>from the constructor.</p>

<p><strong>componentWillMount()</strong></p>
<p><em><strong>componentWillMount()</strong></em> is invoked just before the mounting occurs. It is called before <em><strong>render()</strong></em>, therefore calling <em><strong>setState()</strong></em> here will not trigger an extra rendering.</p>

<p><strong>render()</strong></p>
<p>When called, it should examine this.props and this.state and return one of the following types: <strong>React Element, Strings and Numbers, Portals, Null, Booleans</strong>. The component should be pure, which means you do not modify any component state, it returns the same result each time it revokes.</p>

<p><strong>componentDidMount()</strong></p>
<p><em><strong>componentDidMount()</strong></em> is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Calling <em><strong>setState()</strong></em> here will trigger an extra rendering, but it will happen before the browser updates the screen.</p>
