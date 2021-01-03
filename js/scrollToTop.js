let a = document.getElementById('testbtn');
let b = document.children[0]; // html
let timer = null;


let scrollTop = (e) => {
    let sTop = b.scrollTop;
    b.scrollTop = sTop - sTop / 8;
    if(b.scrollTop > 10) {
        window.requestAnimationFrame(scrollTop)
    }else {
        b.scrollTop = 0;
    }
}

a.onclick = (e) => {
    window.requestAnimationFrame(scrollTop)
}
