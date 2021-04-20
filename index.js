//Navbar DOM
// $(".navbar-item").hover(function(){
//   this.addClass(".hvr-grow");
//
// })

//Remove scroll for home, and just make the event load instead of click button.
// Index DOM Control
$(".btn-outline-secondary").click(function(){

  $("#collapse-div").fadeOut("slow",function(){
    $(".collapser").fadeIn("slow",function(){

      $(".meet-your").fadeIn("slow",function(){

        $(".last").fadeIn("slow", function(){

          $([document.documentElement, document.body]).animate({
        scrollTop: $(".meet-your").offset().top
        })
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




//Home-return
// $(document).load(function{
//   if($("body").hasClass("home-return")){
//     $(".last").fadeIn("slow");
//   }
// })


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

// Form Navigation Complete. 300ms is perfect delay time

// Script conditions for valid form completion when setting up submit button with mailchimp. Probably just make the post request conditional on the form being valid.

// NEST FUNCTIONS so they don't trip over each other!!
// Train/Nutrition (clone) DOM Control
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
  // $("body").stop(true,true);
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


//
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
  // $("body").stop(true,true);
  $("#Get-started-img").promise().done(function(){
  $(this).fadeOut( function(){
    $(".get-started-mouseover").fadeIn()
  })
})
}) ;


$(".get-started-mouseover").mouseleave(function(){
  // $("body").stop(true,true);
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
  // $("body").stop(true,true);
  $(".about-div-1").promise().done(function(){
  $(this).fadeOut( function(){
    $(".mouseover-1").fadeIn()
  })
})
}) ;


$(".mouseover-1").mouseleave(function(){
  // $("body").stop(true,true);
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
  // $("body").stop(true,true);
  $(".about-div-3").promise().done(function(){
  $(this).fadeOut( function(){
    $(".mouseover-3").fadeIn()
  })
})
}) ;


$(".mouseover-3").mouseleave(function(){
  // $("body").stop(true,true);
  $(this).promise().done(function(){
  $(this).fadeOut("fast", function(){
    $(".about-div-3").fadeIn("fast")
  })
})
});

$(".about-btn-4").click(function(){
  // $("body").stop(true,true);
  $(".about-div-4").promise().done(function(){
  $(this).fadeOut( function(){
    $(".mouseover-4").fadeIn()
  })
})
}) ;


$(".mouseover-4").mouseleave(function(){
  // $("body").stop(true,true);
  $(this).promise().done(function(){
  $(this).fadeOut("fast", function(){
    $(".about-div-4").fadeIn("fast")
  })
})
});

//Price booking
