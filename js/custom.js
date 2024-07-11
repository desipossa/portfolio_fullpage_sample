IndexMove();
MainFullpage();

function MainFullpage() {
    const nav = document.querySelectorAll('.gnb li');
    const portFolio = new fullpage('.content', {
        anchors: ['intro', 'pt01', 'pt02', 'pt03', 'profile'],
        onLeave: function (origin, destination, direction) {
            let idx = destination.index;
            nav.forEach(it => it.classList.remove('on'))
            nav[idx].classList.add('on');
        }
    });
}

function IndexMove() {

}



