btn.onclick = function() {
    btn.querySelector('.circle').classList.add('active')
}
btn.querySelector('.circle').addEventListener('transitionend', function() {
    btn.querySelector('.circle').classList.remove('active')
})