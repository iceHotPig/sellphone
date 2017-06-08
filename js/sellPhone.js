$(function(){
    var index=1;
    var length=$('.mBson').length;
    var time;
    var width=$('.mBson').width();
    function showDiv(){
        $('.mBpic').stop().animate({left: -width*index + 'px'},1000)
}
    showDiv();
    setTime()
    function setTime(){
            time=setInterval(function (){
            index++;
            if (index>length-1) {
                index=0
            }
            showDiv()
     },2000)
    }
     $('.mBfather').mouseover(function() {
         clearInterval(time);
     })
     $('.mBfather').mouseleave(function() {
            setTime()
     })
})
$(function(){
            var scr;
            var hei;
            var index1;
            var num=$('#top').height()+$('.cBanner').height()+$('.cNav').height()+$('.mainson').height()+$('.mBanner').height()-200;
     $(window).scroll(function(){
         scr=$(this).scrollTop()-num;
                hei=$('.mainson').height();
                index1=Math.ceil(scr/hei);
                if(index1<0||index1 == -0){
                   index1 = 0;
                }
                show()
     })
     function show(){
        $('.main .mainSon7 li').eq(index1).css({background:'green'}).siblings().css({background:'white'});
     }
     $('.main .mainSon7 li').click(function(){
        var index1=$(this).index();
            show()
        $(document.body).animate({scrollTop:hei*index1 +1500+ 'px'}, 'slow')
     })
})
$(function(){
    $('.son').mouseover(function() {
        $('.son ul li').css('display', 'block');
    })
    $('.son').mouseleave(function() {
        $('.son ul li').css('display', 'none');
    })
})
$(function(){
        $('.sonBox1').mouseover(function() {
             $(this).stop().animate({top: -100+'px'},'slow')
        })
        $('.sonBox1').mouseleave(function() {
             $(this).stop().animate({top:0+'px'},'slow')
        })
    })
$(function(){
    $('.iconfontyyy').mouseover(function() {
       $('.list li').css({'display':'block','background':'transparent'})
    })
    $('.iconfontyyy').mouseleave(function() {
       $('.list li').css({'display':'none'})
    })
})
$(function(){
    var wid=$('body').width();
     $(window).resize(function() {
        wid=$('body').width();
        console.log(wid);
        if (wid>993) {
        $('.list li').fadeIn();
        }
     })
})