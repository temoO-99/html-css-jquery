/*global $, window*/

$(function(){

    'use strict';
    
    //header resize
    var myHeader = $('.header');
    
    myHeader.height($(window).height());
    
    $(window).resize(function(){
        myHeader.height($(window).height());
    });
    
    //ul
    $('li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    
 //slider

    
    /*smooth scroll to div*/
   
    $('ul li a').click(function(){
        $('html, body').animate({
          scrollTop : $('#' + $(this).data('value')).offset().top+2 
        },1000);
    });
    
    
    //slider in custom
    
    (function call(){
        
        $('.slide .active').each(function(){
           
            if(!$(this).is(':last-child')){
                $(this).delay(2000).fadeOut(1000,function(){   
                        $(this).removeClass('active').next().addClass('active').slideDown(1000);
             call(); });
            }
            
            else{
                $(this).delay(2000).fadeOut(1000,function(){
                        $(this).removeClass('active');
                        $('.slide div').eq(0).addClass('active').slideDown(1000);
             call(); });    
                }
            
            
        });
        
        
    }());




    //shuffle ul
    $('.shu li').click(function () {
        $(this).addClass('le').siblings().removeClass('le');
    });
    
    
    //NiceScroll
    $("body").niceScroll({
        cursorcolor : '#1ABC9B',
        cursorwidth : '10px',
        cursorborder : 'none'
    });
    

    

    
    
    var left = $('.header .fa-arrow-circle-left'),
        right = $('.header .fa-arrow-circle-right');
    
    function check() {
        if($('.slider div:first').hasClass('o')){
            left.fadeOut()
        } else {
            left.fadeIn()
        }
        
        if ($('.slider div:last').hasClass('o')){
            right.fadeOut()
        } else {
            right.fadeIn()
        }
    }
    
    check();
    
    
    $('.header i').click(function () {
        if ($(this).hasClass('fa-arrow-circle-right')){
            $('.slider .o').fadeOut(100 , function () {
                $(this).removeClass('o').next('.slider div').addClass('o').fadeIn();
                check();
            })
        } else {
             $('.slider .o').fadeOut(100 , function () {
                $(this).removeClass('o').prev('.slider div').addClass('o').fadeIn();
                 check();
            })           
        }
    })
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});
