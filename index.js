$(document).ready(function(){

//Button - setTimeout vs click event on load
// Index DOM Control
$(window).resize(function(){
  if($(window).width()<=576){
$(".bmenu").fadeOut("fast")
}
})
$(window).resize(function(){
  if($(window).width()>576){
$(".bmenu").fadeIn("fast")
}
})

$(".btn-outline-secondary").click(function(){

  $("#collapse-div").fadeOut("slow",function(){
    $(".meet-your-slider").fadeIn("fast") //added slider event
    setTimeout(function(){
    $(".meet-your-slider").animate({
      paddingTop:"100vh",
      opacity:"0",
      display:"none"
    },"slow")
  },800)
  setTimeout(function(){
    if($(window).width()>576){
  $(".bmenu").fadeIn("slow")
}
},1500)
//END Slider Add-on
    $(".collapser").fadeIn("slow",function(){

      $(".meet-your").fadeIn("slow",function(){

        $(".last").fadeIn("slow", function(){

        setTimeout(function(){
          $(".navbar").removeClass("inviso")
        },3000)

        // Meet Your animation effect
        setTimeout(function(){
          $(".meet-your").animate({opacity: "15%"})
        },10)

        setTimeout(function(){
          $(".meet-your").animate({opacity: "20%"})
        },15)
        setTimeout(function(){
          $(".meet-your").animate({opacity: "30%"})
        },20)

        setTimeout(function(){
          $(".meet-your").animate({opacity: "40%"})
        },25)
        setTimeout(function(){
          $(".meet-your").animate({opacity: "50%"})
        },75)

        setTimeout(function(){
          $(".meet-your").animate({opacity: "65%"})
        },125)
        setTimeout(function(){
          $(".meet-your").animate({opacity: "70%"})
        },175)

        setTimeout(function(){
          $(".meet-your").animate({opacity: "80%"})
        },225)
        setTimeout(function(){
          $(".meet-your").animate({opacity: "90%"})
        },275)
        setTimeout(function(){
          $(".meet-your").animate({opacity: "90%"}
        )},300)

        setTimeout(function(){
          $(".meet-your").animate({color: "#fff"}
        )},470)
        setTimeout(function(){
          $(".meet-your").animate({textShadow: "30px"}
        )},470)
        setTimeout(function(){
          $(".meet-your").animate({textShadow: "100px"}
        )},490)
        setTimeout(function(){
          $(".meet-your").animate({textShadow: "50px"}
        )},500)
        setTimeout(function(){
          $(".meet-your").animate({textShadow: "40px"}
        )},510)
        setTimeout(function(){
          $(".meet-your").animate({textShadow: "30px"}
        )},530)
        setTimeout(function(){
          $(".meet-your").animate({textShadow: "20px"}
        )},560)
        setTimeout(function(){
          $(".meet-your").animate({textShadow: "0px 0px 4px #fff;"}
        )},590)

// green banner opacity
setTimeout(function(){
  $(".meet").animate({opacity: "15%"})
},10)
setTimeout(function(){
  $(".meet").animate({opacity: "40%"})
},60)

setTimeout(function(){
  $(".meet").animate({opacity: "84%"})
},75)


        })
      });
    });
  })
})

// Booking DOM control
$(".btn-next").click(function(){
 if($(".form-1").is(":visible")){
  $(".form-2").delay("300").fadeIn("slow");
  $(".btn-back").delay("300").fadeIn("slow");
  $(".form-1").fadeOut();
}

else if($(".form-2").is(":visible")){
  $(".form-2").fadeOut();
  $(".form-3").delay("300").fadeIn("slow");
  $(".btn-next").fadeOut();
}
})

$(".btn-back").click(function(){
if($(".form-2").is(":visible")){
  $(".form-1").delay("300").fadeIn("slow");
  $(".form-2").fadeOut();
  $(".btn-back").fadeOut();
  $(".btn-next").delay("300").fadeIn("slow");
}

  else if($(".form-3").is(":visible")){
    $(".form-2").delay("300").fadeIn("slow");
    $(".form-3").fadeOut();
$(".btn-next").delay("300").fadeIn("slow");
}
})

// Form Navigation Complete.

// hover for description in person
$(".fade-btn-1").click(function(){
  // $("body").stop(true,true);
  $(".train-img-index,.train-img").promise().done(function(){
  $(this).fadeOut( function(){
    $(".train-img-mouseover").fadeIn()
  })
})
}) ;


$(".train-img-mouseover").mouseleave(function(){
  $(this).promise().done(function(){
  $(this).fadeOut("fast", function(){
    $(".train-img-index,.train-img").fadeIn("fast")
  })
})
});

// VIRTUAL click transition (same as above but for virtual column)
$(".fade-btn-2").click(function(){
$(".virtual-img").promise().done(function(){
  $(this).fadeOut(/*"fast",*/ function(){
    $(".virtual-img-mouseover").fadeIn("fast")
  });
})
}) ;

$(".virtual-img-mouseover").mouseleave(function(){
  $(this).promise().done(function(){
  $(this).fadeOut("fast", function(){
    $(".virtual-img").fadeIn()
  });
})
})

$(".fade-btn-2").click(function(){
$(".nutrition-img-index").promise().done(function(){
  $(this).fadeOut(/*"fast",*/ function(){
    $(".virtual-img-mouseover").fadeIn("fast")
  });
})
}) ;
$(".virtual-img-mouseover").mouseleave(function(){
  $(this).promise().done(function(){
  $(this).fadeOut("fast", function(){
    $(".nutrition-img-index").fadeIn()
  });
})
})

$(".fade-btn-3").click(function(){
  $("#Get-started-img").promise().done(function(){
  $(this).fadeOut( function(){
    $(".get-started-mouseover").fadeIn()
  })
})
}) ;

$(".get-started-mouseover").mouseleave(function(){
  $(this).promise().done(function(){
  $(this).fadeOut("fast", function(){
    $("#Get-started-img").fadeIn("fast")
  })
})
});
// hover for description VIRTUAL

//Accreditation Homepage
$(".credit-img").hover(function(){
  $(this).addClass("glowy")
})
$(".credit-img").mouseleave(function(){
  $(this).removeClass("glowy")
})

//About Page D O M
$(".about-btn-1").click(function(){
  $(".about-div-1").promise().done(function(){
  $(this).fadeOut( function(){
    $(".mouseover-1").fadeIn()
  })
})
}) ;

$(".mouseover-1").mouseleave(function(){
  $(this).promise().done(function(){
  $(this).fadeOut("fast", function(){
    $(".about-div-1").fadeIn("fast")
  })
})
});

// VIRTUAL hover transition (same as above but for virtual column)
$(".about-btn-2").click(function(){
$(".about-div-2").promise().done(function(){
  $(this).fadeOut(/*"fast",*/ function(){
    $(".mouseover-2").fadeIn("fast")
  });
})
}) ;

$(".mouseover-2").mouseleave(function(){
  $(this).promise().done(function(){
  $(this).fadeOut("fast", function(){
    $(".about-div-2").fadeIn()
  });
})
})

//
$(".about-btn-3").click(function(){
  $(".about-div-3").promise().done(function(){
  $(this).fadeOut( function(){
    $(".mouseover-3").fadeIn()
  })
})
}) ;

$(".mouseover-3").mouseleave(function(){
  $(this).promise().done(function(){
  $(this).fadeOut("fast", function(){
    $(".about-div-3").fadeIn("fast")
  })
})
});

$(".about-btn-4").click(function(){
  $(".about-div-4").promise().done(function(){
  $(this).fadeOut( function(){
    $(".mouseover-4").fadeIn()
  })
})
}) ;


$(".mouseover-4").mouseleave(function(){
  $(this).promise().done(function(){
  $(this).fadeOut("fast", function(){
    $(".about-div-4").fadeIn("fast")
  })
})
});


})
// End Wrap- document ready
