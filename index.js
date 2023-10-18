const humburgur = document.getElementById('hum-el')
const mFeatuers = document.getElementById('m-featuers-el')

let listItems = '<li> Hello world </li>'
humburgur.addEventListener('click' ,function(){
    let menuIcon = document.getElementById('menu-ic')
    let closeIcon = document.getElementById('close-ic')



    if (mFeatuers.className === ''){
        mFeatuers.className = 'hidden'
        menuIcon.className = 'w-6'
        closeIcon.className = 'hidden'

    }
    else if(mFeatuers.className = 'hidden'){
        mFeatuers.className = ''
        closeIcon.className = 'w-6'
        menuIcon.className = 'hidden'
    }
    

})

