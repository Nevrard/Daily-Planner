//stores Today date
var  currentTime=moment().format("dddd,MMMM,Do")

console.log(currentTime)
// displays the date on the Screen
$("#currentDay").text(currentTime);
var saveEl=$(".saveBtn")
var descriptionEl= $(".description")
var clearEl=$('.clearBtn')

//function that saves user inputs from textarea in the LocalStorage
var Save= function(event){
    //var
    var hour = $(this).siblings('.hour').text().trim()
    console.log(hour)
    var ToDo = $(this).siblings('.description').val()
    console.log(ToDo)
    localStorage.setItem(hour,ToDo)

}

saveEl.on('click',Save)
//Function that get data from localStorage and displays on HTML
function displayTask(){

$('#9').val(localStorage.getItem('9AM'))
$('#10').val(localStorage.getItem('10AM'))
$('#11').val(localStorage.getItem('11AM'))
$('#12').val(localStorage.getItem('12AM'))
$('#13').val(localStorage.getItem('1PM'))
$('#14').val(localStorage.getItem('2PM'))
$('#15').val(localStorage.getItem('3PM'))
$('#16').val(localStorage.getItem('4PM'))
$('#17').val(localStorage.getItem('5PM'))

}
//Fucntion that gives colors to timeblocks according to the current Hour

function displayTimeBlocks(){
    var nowTime= parseInt(moment().format("HH"))
    console.log(nowTime)
    var hash="#"
    for (time = 9; time <= 17; time++) {
        var idEl=hash+time
         if (time < nowTime) {
            $(idEl).addClass("past");
        } else if (time == nowTime) {
            $(idEl).addClass("present");
        } else if (time > nowTime) {
            $(idEl).addClass("future");
        }
    }  
}
// defining function that is executed when Clear button is clicked
function clearStorage()
{
   localStorage.clear();
   displayTask()
}

displayTask();
displayTimeBlocks();

//associate eventlistener to Button Clear
clearEl.on('click',clearStorage)