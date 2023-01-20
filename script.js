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
var timeNow = moment().format("MMMM Do YYYY");
$("#currentDay").text(timeNow)

// Variable for timeblocks. 
var timeBlock = $(".hour");
var now = parseInt(moment().format("H"));

// Function for past present and future timeblock:

$.each(timeBlock, function (i, time) {
    var timeId = parseInt($(this).attr("id"));
    if (timeId === now) {
      $(this).next().addClass("present"); 
    } else if (timeId > now) {
      $(this).next().addClass("future");
    } else if (timeId < now) {
        $(this).next().addClass("past");
  });

  // Eventlistener for save buttons when user clicks 'save'.

  $(".saveButton").on("click", function (saveBtn) {
    var calendarItem =
      saveBtn.target.parentElement.previousElementSibling.children[0].value;
    localStorage.setItem(saveBtn.target.attributes[0].value, calendarItem);
  });

// FOR loops OR IF statement ??? 
