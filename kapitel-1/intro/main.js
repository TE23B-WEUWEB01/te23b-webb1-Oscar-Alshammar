document.querySelector('#random').onmouseover = event => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let timesRun = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {

                if(index  < timesRun) {
                    return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if(timesRun >= event.target.dataset.value.length) clearInterval(interval);
        timesRun += 1 / 3;
    }, 30);
    
}




function textRandom (){
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let timesRun = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {

                if(index  < timesRun) {
                    return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if(timesRun >= event.target.dataset.value.length) clearInterval(interval);
        timesRun += 1 / 3;
    }, 30);
}

var nbDrop = 858;

function randRange( minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

function createRain() {
    for( i=1;i<nbDrop;i++) {
        var dropLeft = randRange(0,1600);
        var dropTop = randRange(-1000,1400);

        $('.rain').append('<div class="drop" id="drop'+i+'"></div>');
        $('#drop'+i).css('left',dropLeft);
        $('#drop'+i).css('top',dropTop);
    }

}
