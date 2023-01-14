
var subjects = document.querySelectorAll(".study-subjects");

var tabcontent = document.querySelectorAll(".tabcontent");
var tablinks = document.querySelectorAll(".tablinks");

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  if (n > subjects.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = subjects.length}
  for (i = 0; i < subjects.length; i++) {
    subjects[i].style.display = "none";  
  }
  subjects[slideIndex-1].style.display = "block";  
  if(n < subjects.length){
    subjects[slideIndex].style.display = "block";
    console.log("in")
  }
        
    console.log(slideIndex-1 , slideIndex)
    console.log(subjects[slideIndex-1], subjects[slideIndex])

}

function displayContent(evt, tabName) {
    console.log(tabName)
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.querySelector(`#${tabName}`).style.display = "block";
    evt.currentTarget.className += " active";
  }