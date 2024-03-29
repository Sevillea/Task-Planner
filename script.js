// Work Day Scheduler created using jQuery, JavaScript, Moment.js, HTML & CSS. 

// I will need to add a dynamic date at the top of the page to reflect the current date using moment.js. DONE
// Add timeblocks in hourly increments from 9am - 5pm. (HTML) DONE
// Each timeblock will have a text entry box for the user to input a task. (HTML) DONE
// Each box will be color coded.  
// Each inputted task will save to local storage.
// Each timeblock will have a 'SAVE' button on the right hand side. DONE
// Each add event button will use event listener 'click' when the user clicks, using jQuery.  DONE


// Moment JavaScript for  variable 'timeNow' to show present time at top of screen. DONE
// Need a variable for timeblocks. DONE
// Need a variable for current date to display at top of calender. DONE
// Each timeblock will need corresponding HTML for color change relative to event state (below)....


// I will need a function to check each hour block to see if the calendar event is in the past, present or future
// PAs, present of future will be color coded according to what is past, what is present, what is to come. 

// I'll need HTML Bootstrap grid containers for my time and text boxes.  DONE
// I'll need a Bootstrap save button for each time and task. DONE
// Each row, with its own time, will have a <textarea> in HTML to house an id, placeholder, class, rows and columns to style.  DONE

// I'll want to tailor my Bootstrap code to make the app more personable. ....

// Variable for current time and date (Top of page)




//current date & time at top of page. 
var currentTime = moment().format("MMMM [the] Do [,] YYYY");
$("#currentDay").text(currentTime);


var timeBlock = $(".hour");
// var now = parseInt(moment().format("H MM SS"));
$(".timeNow").text(now);
console.log(now);


$(document).ready(function (){
  let timeNow = moment().format("MMMM Do YYYY");
  let displayDate = document.getElementById("#currentDay");
  displayDate.innerHTML = timeNow;
  let currentHour = moment().format("HH");

  console.log(currentHour);
  console.log(timeNow);
  console.log(displayDate);
});


  // Calendar time slot compared with current date & Time. 

  $(".time").each(function (){
    let timeNow = $(this).attr("id").split("-")[1]

    if(timeNow == timeBlock){
      $(this).addClass(".present");
      $(this).children(".planner-item").addClass("text");

    } else if (timeBlock < timeNow){
      $(this).removeClass(".present");
      $(this).addClass(".past");
    }
    else if (timeBlock > timeNow){
      $(this).removeClass(".present");
      $(this).addClass(".future");
    }
;});

 
  // Clear input fields on click.

  function ClearFields() {
    document.getElementsById("planner-item").value = "";
  }
  

  function add_local(){
    window.localStorage["planner-item"] = document.getElementsByClassName("planner-item").value;
  }

  function show_local(){
    document.getElementsByClassName("planner-item").value = window.localStorage["planner-item"];
  }

  // Eventlistener for save buttons when user clicks 'save'.

  $(saveBtn).click(function(event){
    event.preventDefault();
    var calendarItem =
      saveBtn.target.parentElement.previousElementSibling.children[0].value;
      // Commit to local storage
      localStorage.setItem(saveBtn.target.attributes[0].value, textArea);
  },
  console.log(calendarItem)
  );

  $(document).ready(function () {
  if (localStorage["9AM"] !== null && localStorage["9AM"] !== undefined) {
    var nineAm = $("<p>" + localStorage["9AM"] + "</p>");
    $("#nineAM").append(nineAM[0].innerText);
  } else {
    ("");
  }
  if (localStorage["10AM"] !== null && localStorage["10AM"] !== undefined) {
    var tenAm = $("<p>" + localStorage["10AM"] + "</p>");
    $("#tenAM").append(tenAM[0].innerText);
  } else {
    ("");
  }
  if (localStorage["11AM"] !== null && localStorage["11AM"] !== undefined) {
    var elevenAm = $("<p>" + localStorage["11AM"] + "</p>");
    $("#elevenAM").append(elevenAM[0].innerText);
  } else {
    ("");
  }
  if (localStorage["12AM"] !== null && localStorage["12PM"] !== undefined) {
    var twelvePm = $("<p>" + localStorage["12PM"] + "</p>");
    $("#twelvePM").append(twelvePM[0].innerText);
  } else {
    ("");
  }
  if (localStorage["1PM"] !== null && localStorage["1PM"] !== undefined) {
    var onePm = $("<p>" + localStorage["1PM"] + "</p>");
    $("#onePM").append(onePm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["2PM"] !== null && localStorage["2PM"] !== undefined) {
    var twoPm = $("<p>" + localStorage["2PM"] + "</p>");
    $("#twoPM").append(twoPm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["3PM"] !== null && localStorage["3PM"] !== undefined) {
    var threePm = $("<p>" + localStorage["3pm"] + "</p>");
    $("#threePM").append(threePm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["4PM"] !== null && localStorage["4PM"] !== undefined) {
    var fourPm = $("<p>" + localStorage["4PM"] + "</p>");
    $("#fourPM").append(fourPm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["5PM"] !== null && localStorage["5PM"] !== undefined) {
    var fivePm = $("<p>" + localStorage["5PM"] + "</p>");
    $("#fivePM").append(fivePm[0].innerText);
  } else {
    ("");
  }
});




