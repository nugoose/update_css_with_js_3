var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function() {
    var theImage = document.getElementById('mainImage'),
        theImageContainer = document.getElementById('imageContainer'),
        welcomeHeader = document.getElementById('changeMe');
    
    //spacing
    var spacingInfo = document.getElementById('spacingDial');
    spacingInfo.addEventListener('change', spaceChange);
    function spaceChange(){
        theImage.style.top = spacingInfo.value + 'px';
        theImage.style.left = spacingInfo.value + 'px';
    }
    
    //blur
    var blurInfo = document.getElementById('blurDial');
    blurInfo.addEventListener('change', blurChange);
    function blurChange(){
        theImage.style.filter = 'blur(' + blurInfo.value + 'px)';
    }
    
    //base color
    var colorInfo = document.getElementById('colorDial');
    colorInfo.addEventListener('change', colorChange);
    function colorChange(){
        theImageContainer.style.backgroundColor = colorInfo.value;
        welcomeHeader.style.color = colorInfo.value;
    }
    
    //info bubble
    document.getElementById('infoBubble').addEventListener('click', function(e){
        e = document.getElementById('infoBox');
        if(e.style.opacity == 0){
            e.style.display = 'inline';
            setTimeout(function(){
                e.style.opacity = 1;
            }, 1);
        }
        else{
            e.style.opacity = 0;
            setTimeout(function(){
                e.style.display = 'none';
            }, 1000);
        }
    }, false);
});