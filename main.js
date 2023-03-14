
let subjects = document.querySelectorAll(".study-subjects");
let tabcontent = document.querySelectorAll(".tabcontent");
let tablinks = document.querySelectorAll(".tablinks");
let slideIndex = 1;
let data = [];


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  if (n > subjects.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = subjects.length}
  for (i = 0; i < subjects.length; i++) {
    subjects[i].classList.add( "d-none");  
  }
  subjects[slideIndex-1].classList.remove( "d-none");  
  subjects[slideIndex-1].classList.add( "d-block");  

  if(n < subjects.length){
    subjects[slideIndex].classList.remove( "d-none");
    subjects[slideIndex].classList.add( "d-block");  
  }
}

function displayContent(event, tabName) {
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.add( "d-none");  
    }
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].classList.add("text-decoration-underline");  
    }
    document.querySelector(`#${tabName}`).classList.remove( "d-none"); 
    document.querySelector(`#${tabName}`).classList.add( "d-block");  
    // evt.currentTarget.className += " active";
  }

function fetchStudentData(func){

    fetch("data.json").then(response => response.json()).then(result=> {
      data = JSON.parse(JSON.stringify(result)).students;
      func();
    });
  }

  function profile(){
    const details = data[Number(sessionStorage.getItem("studentID"))-1];
    console.log(details)
    const name = document.querySelector("#fullName");
    const fathersName = document.querySelector("#fathersName");
    const dob = document.querySelector("#dob");
    const address = document.querySelector("#address");
    const phone = document.querySelector("#phone");

    name.innerText = details.fullName;
    fathersName.innerText = details.fatherName;
    dob.innerText = details.dob;
    address.innerText = details.Address;
    phone.innerText = details.phoneNumber;
  }

  function result(){
    // const marks = JSON.parse(JSON.stringify(result)).students;
    findMarks(data[Number(sessionStorage.getItem("studentID"))-1].marks[0])
      // findMarks()
  }
  // displayContent(event, 'upcoming')
