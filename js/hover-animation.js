(function(){
   
    var list = Array.prototype.slice.call(document.querySelectorAll('li'));
    //alernative var list = [].slice.call(document.querySelectorAll('li'));
    console.log(list);
    
    function getDirection(ele,obj){
        var w,h,x,y,d;
        w = obj.offsetWidth;
        h = obj.offsetHeight;
        x = (ele.pageX - obj.offsetLeft - (w/2)*(w > h ? (h/w):1));
        //console.log("x:"+x);
        y = (ele.pageY - obj.offsetTop - (h/2)*(h>w ? (w/h):1));
        //console.log("y:"+y);
        d = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180 ) / 90 ) + 3 )  % 4;

        return d;
    }

    function addClass(ele, obj, state) {
        //console.log(ele); MouseEvent()
        //console.log(obj); 

        var direction, class_suffix;
        
        direction = getDirection(ele, obj);
        class_suffix = "";
        
        if(obj.classList.contains('slide')){
            state = 'slide-'+state;
             obj.className = "slide";
        }
        else if(obj.classList.contains('rotate')){
            state = 'rotate-'+state;
            obj.className = "rotate";
        }
        switch(direction){
            case 0: class_suffix = '-top'; break;
            case 1: class_suffix = '-right'; break;
            case 2: class_suffix = '-bottom'; break;
            case 3: class_suffix = '-left'; break;
        }
        obj.classList.add(state+class_suffix);
    }

    //bind events
    list.forEach(function(ele){
        ele.addEventListener('mouseenter', function(e){
                addClass(e,this,'in');
        },false);

        ele.addEventListener('mouseleave', function(e){
                addClass(e,this,'out');
        },false);
    });

})();