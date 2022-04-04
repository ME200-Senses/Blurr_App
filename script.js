const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg-image')
const cg = document.querySelector('.change')
const btn = document.querySelector('.btn')


let load = 0
btn.style.display = `none`;
btn.style.position = "absolute";
btn.style.left = "50%";
btn.style.transform = "translateX(-50%)";
let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
    cg.style.visibility=`hidden`;
    btn.style.display = `block`;
 
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}