---
layout: post
title: Some points about redux
date:   2017-10-16 23:33:10
categories: others
---

<h2>Some points about redux</h2>

<p>Lately, I have been coding using react/redux. When I read an article about redux, I found some interesting points I should notice earlier.</p>

<h3>You might not need redux</h3>

<p>Redux is a pretty useful framework, but you don't have to use it. In fact, most of the time you just need React. Someone used to say this:</p>

```markdown
If you don't know whether you need Redux, then you don't need it.
```

<p>Also, the author of Redux, Dan Abramov once said:</p>

```markdown
You might not need Redux.
Don’t use Redux unless you *tried* local component state and were dissatisfied. 
```

<p>Sometimes your app is relatively simple. If your UI layer is simple and there are not many interactions between users or between user and server, then Redux may seem unnecessary</p>

<h3>What is state management</h3>

<p>The whole point of React is that data only ever flows in one direction. Your components have data available to them (somehow), and they use it in their presentation logic, and pass some of it to child components.</p>
<p>However, data does of course need to change. For example, in our child widget there might be a button the user presses, causing a change in the data. So where does this changeable data go? React provides a place for it that you can use, which is the “state” of any component. In the above case, the data storage in question could be in the state object of the parent. Any component can have state, but not everything component should. Some important rules of thumb are:</p>
<ul>
	<li>If you component has a bunch of state logic and a bunch of rendering logic, split it into two components. This lets you use the presentational (dumb) component in new situations (and also in tests).</li>
	<li>Don’t put state in every single component, if you do use this system, put state at important parts of the component hierarchy.</li>
</ul>