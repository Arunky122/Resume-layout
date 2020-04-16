var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
//console.log(navMenuAnchorTags);//total 14 links
 var intervalN;
for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
                        event.preventDefault();    //ab default click kaam nahi karegi...
            var targetSectionID =this.textContent.trim().toLowerCase();
            var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        // interval =setInterval(scrollVertially,20,targetSection);
        
        
        intervalN =setInterval(function(){
            scrollVertially(targetSection);
        },20);
        
   });
}


function scrollVertially(targetSection){
     var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top<=0){
                clearInterval(intervalN);
                return;
            }
            window.scrollBy(0,50);
}

/*************************************************************************************/
           /*skill section*/


var progressBars =document.querySelectorAll('.skill-progress > div');


function initialiseBars(bar){
    bar.setAttribute("data-visited",false);
    bar.style.width=0+"%";
}

for(var bar of progressBars){
    initialiseBars(bar);
}

function fillBars(bar){
    var currentWidth=0;
    var targetWidth=bar.getAttribute("data-bar-width");
    var interval=setInterval(function(){
        if(currentWidth>=targetWidth){
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    },5);
}

function checkScroll(){
    for(let bar of progressBars){
        var barCoordinates=bar.getBoundingClientRect();
        if((bar.getAttribute("data-visited")=="false")&&(barCoordinates.top<=(window.innerHeight-barCoordinates.height))){
            bar.setAttribute("data-visited",true);
            fillBars(bar);
        }
        else if(barCoordinates.top>window.innerHeight){
            bar.setAttribute("data-visited",false);
            initialiseBars(bar);
        }
    }
}
window.addEventListener("scroll",checkScroll);