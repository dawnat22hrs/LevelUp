let inp = document.querySelector('#tel');

inp.addEventListener('focus', _ => {
  if(!/^\+\d*$/.test(inp.value))
    inp.value = '+';
});

inp.addEventListener('keypress', e => {
  if(!/\d/.test(e.key))
    e.preventDefault();
});