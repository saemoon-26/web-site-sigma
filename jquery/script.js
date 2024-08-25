$(document).ready(function () {
  // console.log($)
  $("#first").click(function () {
    alert("first button clicked");
    $(this).css("background-color", "gray");
    $(this).hide(5000);
  });
  $("#second").mouseleave(function () {
    alert("second button is clicked");
    $(this).hide();
  });
  $("#third").dblclick(function () {
    alert("third button is clicked");
    $(this).hide();
  });

  $("#fourth").mouseenter(function () {
    alert("fourth button is clicked");
    $(this).hide();
  });

  $("#fifth").hover(
    function () {
      $(this).css("background-color", "red");
      console.log("first step");
    },
    function () {
      $(this).css("background-color", "blue");
      console.log("second step");
      $("#para").toggle();
    }
  );

  $("#para").on({
    mouseenter: function () {
      $(this).css("color", "red");
    },
    mouseleave: function () {
      $(this).css("color", "green");
    },
    click: function () {
      $(this).hide(5000);
    },
  });
});

$("#clickme").click(function () {
  $(".slide").slideToggle("slow");
  console.log("click");
});

$("#boxAni").mouseenter(function () {
  $(".box").slideToggle();
  $("#box1").fadeToggle();
  $("#box2").fadeToggle("slow");
  $("#box3").fadeToggle("slow");

  $(".box").animate(
    {
      opacity: "0.5",
      height: "80px",
      width: "80px",
    },
    "slow"
  );
  $("#box1").fadeToggle();
});

$("#submit").click(function () {
  event.preventDefault();
  var a = $("#name").val();
  var b = $("#age").val();
  var c = $("#select").val();
  var values = "NAME:" + a + "<br>Age:" + b + "<br>COUNTRY:" + c;
  $(".getvalue").html(values);
  console.log(values);
});

// });
// $("#submit").click(function(){
//   event.preventDefault();
//   $("#form").each(function(){
//     var formData="";
//  $(".getvalue").html();
// console.log(formData);
//   });
// });

$("#name,#age").click(function () {
  $(this).focus().css("background-color", "green");
});

$("#select").mouseenter(function () {
  $(this).change().css("background-color", "yellow");
});

$("#submit").click(function () {
  $(".getsvalue").text("your values are submitted successfully");
});

$("#name").val("moon");

$("#form").mouseenter(function () {
  $(this).css("background-color", "blue");
});
