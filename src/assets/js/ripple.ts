export function rippleffect(el: any, renderer: any) {
  const btnElements = el.nativeElement.querySelectorAll('.btn-ripple');

  for (let btnElement of btnElements) {
    renderer.listen(btnElement, 'click', (e: any) => {
      let ripple = renderer.createElement('span');
      ripple.classList.add('rippleSpan');

      const diameter = Math.max(
        btnElement?.clientWidth as number,
        btnElement?.clientHeight as number
      );
      const radius = diameter / 2;

      ripple.style.width = ripple.style.height = `${diameter}px`;
      ripple.style.left = `${e.clientX - btnElement.offsetLeft - radius}px`;
      ripple.style.top = `${e.clientY - btnElement.offsetTop - radius}px`;
      ripple.classList.add('ripple');

      const last = btnElement.getElementsByClassName('ripple')[0];
      if (last) last.remove;
      renderer.appendChild(btnElement, ripple);

      setTimeout(() => {
        ripple.remove();
      }, 500);
    });
  }
}