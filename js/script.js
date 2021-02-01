// Variables I think I'll Need

// MIGHT BE NEEDED FOR LOCAL STORAGE? 
var workHours = [9, 10, 11, 12, 1, 2, 3, 4, 5,]


// var currentTime = moment();
// currentTime = currentTime.startOf("hour");

// Top date
moment(Date);
$("#currentTimeAndDate").text(moment().format('dddd MMMM Do YYYY, h:mm a'));







//  MY ATTEMPT TO POPULATE THE BLOCKS DYNAMICLY
// var currentTime = moment();

// function workHours() {
//     var hours = [];
//     var workHoursInADay = 8;
//     for (let i = 0; i < workHoursInADay; i++) {
//         var html =
//         '<div class="row time-block">'+
//         '<div class="input-group input-group-sm mb-3">' +
//         '<div class="input-group-prepend">' +
//         '<span class="input-group-text" id="inputGroup-sizing-sm">9000 AM </span>' +
//         '</div>'+
//         '<input type = "text" class="form-control" aria - label="Sizing example input"' +
//         ' aria - describedby="inputGroup-sizing-sm">'+
//         '<div><button class="saveBtn"><i class="fas fa-code"></i></button></div>' +
//         '</div >'+
//         '</div >';
//     hours.push(html)




//         console.log(i);
//     }
//     document.getElementById("container").innerHTML = html;
//     console.log(hours);
// }
// workHours();


















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