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




// Selectors:
const clearBtn = $("#clear-cal");
const timeBlock = $(".time");
const textArea = $(".planner-item");
const saveBtn = $(".btn-secondary");


//MOMENT JS for current date & time

$(document).ready(function (){
  let timeNow = moment().format("MMMM Do YYYY");
  let displayDate = document.getElementById("#currentDay");
  displayDate.innerHTML = timeNow;
  let currentHour = moment().format("HH");
})

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

 // Eventlistener for save buttons when user clicks 'save'.

  $(".btn-secondary").click(function(event){
    event.preventDefault();
    var calendarItem =
      saveBtn.target.parentElement.previousElementSibling.children[0].value;
      // Commit to local storage
      localStorage.setItem(saveBtn.target.attributes[0].value, textArea);
  });

  // Event listener to clear contents of schedule:
  $(".clear-cal").click(function(event) {
    event.preventDefault;
    $(".clear-cal").val("");
    localStorage.clear(event);
  });
    


