console.log('working')

document.getElementById('contacttt').onclick = function () {

    document.getElementById('contact-fixed').style.display = 'block'

    document.getElementById('bop1').style.animationName = 'bop'
    document.getElementById('bop1').style.animationDuration = '3s'

    document.getElementById('bop2').style.animationName = 'bop'
    document.getElementById('bop2').style.animationDuration = '3s'

    document.getElementById('bop3').style.animationName = 'bop'
    document.getElementById('bop3').style.animationDuration = '3s'

    document.getElementById('bop4').style.animationName = 'bop'
    document.getElementById('bop4').style.animationDuration = '3s'

    document.getElementById('bop5').style.animationName = 'bop'
    document.getElementById('bop5').style.animationDuration = '3s'
}

document.getElementById('close').onclick = function () {
    document.getElementById('contact-fixed').style.display = 'none'
}