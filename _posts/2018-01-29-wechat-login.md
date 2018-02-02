---
layout: post
title: WeChat Login (React.js)
date:   2018-01-29 23:30:00
categories: others
---

<h3><strong>WeChat Login</strong></h3>

<p>&nbsp;&nbsp;Recently, I have been learning about how to realize WeChat login function through React.js. According to the document on <a href="https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419316505&token=&lang=zh_CN">"https://open.weixin.qq.com/"</a>, the basic process is as following:</p>

<h4><strong>Preparing Work</strong></h4>

<p>&nbsp;&nbsp;WeChat login of website application is a WeChat OAuth2.0 login system based on the OAuth2.0 industry-standard protocol. </p>
<p>&nbsp;&nbsp;Before using the WeChat login on your website, you need to resigster on the WeChat open platform as a developer first and own a varified website application as well. After reviewing, you will get an APPID and APPSECRECT. After all the above stuffs done, we can formally start to embedded it into the system.</p> 

<h4><strong>Overall Progress</strong></h4>
<p>&nbsp;&nbsp;WeChat OAuth2.0 login gives the WeChat users permissions to login on the third party application or website. Given authorization from the WeChat user, the third party application can get his wechat api access token(access_token). Through the access token, the third party application can require the WeChat user's basic information.</p>
<p>For now, WeChat OAuth2.0 login system only support the 'authorization_code' mode. The overall progress is:</p>
<ul>
	<li>The third party sends out the require of WeChat login authorization. After the approvement of WeChat user, WeChat will redirect to the third party website and attach a temporary code parameter.</li>
	<li>Get the access_token through API using the code parameter, APPID and APPSECRECT.</li>
	<li>By the access_token, require user's basic information resources or help user to realize some basic operations.</li>
</ul>

<p>&nbsp;&nbsp;Here is the tiem sequence diagram</p>
!(/assets/overall_process.png);

<h5><strong>First step: Require code</strong></h5>
<p>&nbsp;&nbsp;The third party opens the following link: </p>
<blockquote>https://open.weixin.qq.com/connect/qrconnect?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect</blockquote>

<p>If there is a warning showing you cannot get the access, please check whether the parameters are correct. For example, the <em>redirect_uri</em> is different from the one resigstered or the <em>scope</em> is not snsapi_login.</p>
<p><strong>Parameters</strong></p>
<table>
	<tr>
		<th>Parameter</th>
		<th>If Necessary</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>appid</td>
		<td>Yes</td>
		<td>The only application identification</td>
	</tr>
	<tr>
		<td>redirect_uri</td>
		<td>Yes</td>
		<td>Please process the link with urlEncode</td>
	</tr>
</table>
























