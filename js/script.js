// Variables I think I'll Need

$(document).ready(function () {

    // Top date and time function.
    moment(Date);
    $("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

    // checking the time for each time block to make sure its currents. 
    function timeColor() {
        var currentHours = moment().hours();
        $(".time-block").each(function () {
            var blockHours = parseInt($(this).attr("id"));


            if (currentHours === blockHours) {
                $(this).addClass("present");
            }
            else if (currentHours > blockHours) {
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }
    timeColor();


    // Listener to hopefully add info to Local Storage. 
    // BROKEN.....
    $(".saveBtn").on("click", function () {
        var timeColor = $(this).siblings('imput').attr('id');
        var value = $(this).siblings('imput').val()
        localStorage.setItem(timeColor, value)
    })

    
    // this is what stores the info from above listener. I think.
    $("#9 .schedule").val(localStorage.getItem("9"));
    $("#10 .schedule").val(localStorage.getItem("10"));
    $("#11 .schedule").val(localStorage.getItem("11"));
    $("#12 .schedule").val(localStorage.getItem("12"));
    $("#13 .schedule").val(localStorage.getItem("13"));
    $("#14 .schedule").val(localStorage.getItem("14"));
    $("#15 .schedule").val(localStorage.getItem("15"));
    $("#16 .schedule").val(localStorage.getItem("16"));
    $("#17 .schedule").val(localStorage.getItem("17"));

});



// Need 8 blocks for the business day
// after selecting the block of time i choose imput what it is im doing for that hour. 
// all that information will be put into local storage. 

// Clock btn text Imput box and Save Btn

// BLOCK DETAIL & Design
    // 8 block total - DONE: just need to duplicate
    // give each box in the HTML a id of 1pm, 2pm ect. 
    // Block will have a commit button to local storage write to save.
    // Block will list the time 
    // Block will have an imput box within form
    // Block will hav a submit button.
    // Block needs to be color coded for past, present and future.

// Save Button
    // you just need one. 

// LOCAL STORAGE
    // Take value of text imput and save to local storage
    // Text should remain on screen



// CAL DISPLAY





// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color - coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist