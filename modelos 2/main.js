function clock(){
    function getTimeFromSeconds(seconds){
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-Br', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    
    const clock = document.querySelector('.clock');
    let seconds = 0; 
    let timer;
    
    function startClock(){
         timer = setInterval(function(){
            seconds++;
            clock.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);
    }
    
    
    document.addEventListener('click', function(e){
        const el = e.target;
    
        if(el.classList.contains('reset')){
            clearInterval(timer);
            clock.innerHTML = '00:00:00';
            clock.classList.remove('paused');
            seconds = 0;
        }
    
        if(el.classList.contains('start')){
            clock.classList.remove('paused');
            clearInterval(timer);
            startClock();
        }
    
        if(el.classList.contains('pause')){
            clearInterval(timer);
            clock.classList.add('paused')
        }
    });
    
}
clock();