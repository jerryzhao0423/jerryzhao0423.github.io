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
<p>The constructor of a component is called before it's mounted. You need to call <code>super(props)</code> before any other statement. Or <code>this.props</code> will be undefined in this constructor. The constructor is the right place to initialize state. To do so, just need to assign an object to <code>this.state</code>. Do not try to call <code>setState()</code>from the constructor.</p>

<p><strong>componentWillMount()</strong></p>
<p><code>componentWillMount()</code> is invoked just before the mounting occurs. It is called before <code>render()</code>, therefore calling <code>setState()</code> here will not trigger an extra rendering.</p>

<p><strong>render()</strong></p>
<p>When called, it should examine this.props and this.state and return one of the following types: <strong>React Element, Strings and Numbers, Portals, Null, Booleans</strong>. The component should be pure, which means you do not modify any component state, it returns the same result each time it revokes.</p>

<p><strong>componentDidMount()</strong></p>
<p><code>componentDidMount()</code> is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Calling <code>setState()</code> here will trigger an extra rendering, but it will happen before the browser updates the screen.</p>

<h3>Updating:</h3>

<p><strong>componentWillReveiveProps()</strong></p>
<p><code>componentWillReceiveProps()</code> is invoked before a mounted component receives new props. If you need to update the state in response to prop changes (for example, to reset it), you may compare this.props and nextProps and perform state transitions using <code>this.setState()</code> in this method.</p>

<p><strong>shouldComponentUpdate()</strong></p>
<p><code>shouldComponentUpdate()</code> is invoked before rendering when new props or state are being received. Defaults to true. Currently, if <code>shouldComponentUpdate()</code> returns false, then <code>componentWillUpdate(), render()</code>, and <code>componentDidUpdate()</code> will not be invoked. </p>

<p><strong>componentWillUpdate()</strong></p>
<p><code>componentWillUpdate()</code> is invoked just before rendering when new props or state are being received. Use this as an opportunity to perform preparation before an update occurs. This method is not called for the initial render.</p>
<p>Note that you cannot call <code>this.setState()</code> here; nor should you do anything else (e.g. dispatch a Redux action) that would trigger an update to a React component before <code>componentWillUpdate()</code> returns.</p>

<p><strong>componentDidUpdate()</strong></p>
<p><code>componentDidUpdate()</code> is invoked immediately after updating occurs. This method is not called for the initial render. Use this as an opportunity to operate on the DOM when the component has been updated. This is also a good place to do network requests as long as you compare the current props to previous props </p>

<h3>Unmounting:</h3>

<p><strong>componentWillUnmount()</strong></p>
<p><code>componentWillUnmount()</code> is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in <code>componentDidMount().</code></p>




















