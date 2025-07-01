function playVrai() {
    let vrai = new Audio('./Sound/vrai.mp3')
    vrai.play()
}
function playFaux() {
    let faux = new Audio('./Sound/False.mp3')
    faux.play()
}
export {playVrai, playFaux};