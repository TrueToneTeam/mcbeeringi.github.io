var header = document.createElement('header');
header.insertAdjacentHTML('beforeend',`
	<a href="https://mcbeeringi.github.io">McbeEringi</a>
	<nav>
		<div id="hnavd">
			<a href="https://mcbeeringi.github.io/sky">Sky</a>
			<a href="https://mcbeeringi.github.io/apps">Apps</a>
			<a class="lang"></a>
		</div>
		<input type="checkbox" id="hnavmcb"><label for="hnavmcb"></label><div id="hnavm"></div>
	</nav>
`);
document.body.insertBefore(header,document.body.firstChild);
hnavm.insertAdjacentHTML('beforeend',hnavd.innerHTML);
const setstyle=()=>{
	var footer = document.createElement('footer');
	footer.insertAdjacentHTML('beforeend',`
		© 2018~ @McbeEringi.｡:+*<br><br>
		<a href="https://twitter.com/mcbeeringi">Twitter</a>
		<a href="https://www.youtube.com/channel/UC7KFkUaWgpmdHViToV1wCAA">YouTube</a>
		<a href="https://github.com/mcbeeringi">GitHub</a>
	`);
	document.body.appendChild(footer);
	document.querySelectorAll('.lang').forEach(e=>e.href='https://translate.google.com/translate?sl=ja&tl=en&u='+location.href);
	document.querySelectorAll('a').forEach(e=>{if(e.ontouchstart==undefined)e.ontouchstart=()=>{};});
	document.querySelectorAll('.stuff img,.pad img').forEach(e=>e.width="512px");
};
if(document.readyState=='loading')window.addEventListener('DOMContentLoaded',setstyle,{once:true});else setstyle();
document.body.insertAdjacentHTML('afterbegin',`<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet">
<style></style>
<link href="https://mcbeeringi.github.io/src/style.css" rel="stylesheet">
`);
