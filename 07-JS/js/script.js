

// event - click, mousemove
// variable — add a name.
// put it into a form
// loop - add elements to a page
// operator - add two pieces of data together.
// conditionals - return to name

// students: 

//WRITING A CSS RULE
//$('.student').css("background","blue")

//READING A CSS RULE
//let bgColor = $('.student').css("background-color");

//CHANGING THE TEXT IN ELEMENT
//$('title').text("Ali's old timey jQuery jamboree")


//added a simple event
// $(".student").click(function(){
//     $(this).toggleClass("active")
    
// })

//click on an element and affect another element

let studentArray = ["Gabrielle Arguelles", "Kanav Arora", "Huong Bui", "Izel Cevik", "Jody Chow", "Camille Gan", "Renata Hewryk", "Amanda Huynh", "Dharini Kapoor", "Angela Lam", "Krystina Levitski", "Joshua Linton", "Avan Nguyen", "Tyler Nguyen", "Hyunsun Park", "Omar Qureshi", "Paulina Shteiman", "Sebastien Stonely", "Alex Townson", "Daniella Vizelter", "Crystal Wong", "Rachel Woodcock", "Michael Zhang"]



for (let i =0; i<studentArray.length;i++) {
    console.log(studentArray[i]);
    $("<div></div>")
        .addClass("student")
        .html("<h2>"+studentArray[i]+"</h2>")
        .appendTo("#main")
        .click(function(){
            alert("say hi to "+studentArray[i]+" for me")
        })
}



$("#hamburger").click(function(){
    $('header').toggleClass("clicked")
})

$("#name-form").click(function(){
    let name = $("#name").val();
    if (name != "") {
        alert("hello, "+name)
    } else {
        alert("you forgot to add a name")
    }
    
})

// //just showcasing more events.
// $(document).mousemove(function(eventData){
//     console.log("mouse is at: "+eventData.clientX+" on the X axis and mouse is at: "+eventData.clientY+" on the Y axis")
// })