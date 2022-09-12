var target = document.querySelector('#input');
document.querySelectorAll('.calcbutton').forEach(el => el.addEventListener("click", evt => { target.value += evt.target.innerHTML; }));
document.querySelector('.calcpoint').onclick = evt => { if (!target.value.includes('.')) target.value += '.'; };
