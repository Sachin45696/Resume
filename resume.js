
// function addnewworkexperipence() {
    
    
//     let newnode = document.createElement('textarea');
//     newnode.classList.add('inpu1');
//     newnode.classList.add('weaddbutton');

//     let weaddbuttonobj = document.getElementById("weaddbutton");
//     let weobj = document.getElementById("we");

//     weaddbuttonobj.insertBefore(newnode, weobj);
// }

// Generating cv



function generateCV(){


  // for namefield
 let namefield= document.getElementById('namefield').value;
 let nametemplate1= document.getElementById('nametemplate1');
 nametemplate1.innerHTML=namefield      // values ko dynamically change karne ke liye inner html ka use kiya h 
 let nametemplate2= document.getElementById('nametemplate2');
 nametemplate2.innerHTML=namefield     // values ko dynamically change karne ke liye inner html ka use kiya h 

 // for contactfield
 //document.getElementById('contacttemplate').innerHTML=document.getElementById('contactfield').value

 let contactfield= document.getElementById('contactfield').value
 let contacttemplate=document.getElementById('contacttemplate');
 if (contactfield.length !== 10 || isNaN(contactfield)) {
  alert('Contact number should be a 10-digit numeric value.');
  return;
}

 contacttemplate.innerHTML=contactfield

// for Addressfield
let Addressfield=document.getElementById('Addressfield').value
let addtemplate= document.getElementById('addtemplate')
addtemplate.innerHTML=Addressfield

//linkdlnfield
let linkdlnfield=document.getElementById('linkdlnfield').value
let linktemplate= document.getElementById('linktemplate')
linktemplate.innerHTML=linkdlnfield

//GITfield
let GitHubnfield=document.getElementById('GitHubnfield').value
let gittemplate= document.getElementById('gittemplate')
gittemplate.innerHTML=GitHubnfield

//objectives
let ObjectiveorSummaryfield= document.getElementById('ObjectiveorSummaryfield').value
let objectivetemplate=document.getElementById('objectivetemplate')
objectivetemplate.innerHTML=ObjectiveorSummaryfield


//------------------------------------------------------------------//

//education
let edufield=document.getElementById('edufield').value
let  Universitytemplate= document.getElementById('Universitytemplate')
Universitytemplate.innerHTML=edufield

//field of study
let FieldofStudyfield=document.getElementById('FieldofStudyfield').value
let  Studytemplate= document.getElementById('Studytemplate')
Studytemplate.innerHTML=FieldofStudyfield

//Year of passout
let yearofpassoutfield=document.getElementById('yearofpassoutfield').value
let  Passouttemplate= document.getElementById('Passouttemplate')
Passouttemplate.innerHTML=yearofpassoutfield

//pecentage
let Percentagefield=document.getElementById('Percentagefield').value
let  percentagetemplate= document.getElementById('percentagetemplate')
const percentageRegex = /^(\d{1,2}(\.\d{1,2})?%)$/; // Regular expression 

if (!percentageRegex.test(Percentagefield)) {
  alert('Percentage should be in the format like "%".');
  return;
}
percentagetemplate.innerHTML=Percentagefield



//internship
let Intenshipfield=document.getElementById('Intenshipfield').value
let  Intenshiptemplate= document.getElementById('Intenshiptemplate')
Intenshiptemplate.innerHTML=Intenshipfield

//------------------------------------------------------------------//
//professional work

//job Title
let JobTitlefield=document.getElementById('JobTitlefield').value
let  JobTitletemplate= document.getElementById('JobTitletemplate')
JobTitletemplate.innerHTML=JobTitlefield

//Company name field

let CompanyNamefield=document.getElementById('CompanyNamefield').value
let  CompanyNametemplate= document.getElementById('CompanyNametemplate')
CompanyNametemplate.innerHTML=CompanyNamefield

//Company name years of experience in year's
let workfield= document.getElementById('workfield').value
let workfieldtemplate= document.getElementById('workfieldtemplate')
workfieldtemplate.innerHTML=workfield

//company location

let LocationNamefield=document.getElementById('LocationNamefield').value
let  Locationtemplate= document.getElementById('Locationtemplate')
Locationtemplate.innerHTML=LocationNamefield

//Joiningdatefield
let Joiningdatefield=document.getElementById('Joiningdatefield').value
let  joiningDatetemplate= document.getElementById('joiningDatetemplate')
joiningDatetemplate.innerHTML=Joiningdatefield

//Leavingdatefield
let Leavingdatefield=document.getElementById('Leavingdatefield').value
let  Leavingdatetemplate=document.getElementById('Leavingdatetemplate')
Leavingdatetemplate.innerHTML=Leavingdatefield




//responsibilitypfield
let responsibilitypfield=document.getElementById('responsibilitypfield').value
let responsibilityptemplate= document.getElementById('responsibilityptemplate')
responsibilityptemplate.innerHTML=responsibilitypfield

// Toggle the 'active' class for each screen to control their visibility
document.getElementById('cv-reqform').style.display='none';
document.getElementById('cv-template').style.display='block';
}

function EditCV(){

// iss edit wale function me bhi me sabhi ko intialize kar sakta hu for eg 
//see the line number 146 

  /* Reset the fields to their initial values
        document.getElementById('namefield').value=nametemplate1.innerHTML;
*/
 // afterclick the edit page it will navigate to the cv-reqform
 

 document.getElementById('cv-template').style.display='none';
 document.getElementById('cv-reqform').style.display='block';
}



//printCV

function printCV(){
  window.print();
  
  }

  // The below code is the live image functionality  153-193

// function captureImage() {
//   // Getting  the video element and canvas

//   const video = document.getElementById('video');
//   const canvas = document.createElement('canvas');
//   const context = canvas.getContext('2d');

//   // Set the canvas dimensions to match the video
//   canvas.width = video.videoWidth;
//   canvas.height = video.videoHeight;

//   // drawing  the current video frame onto the canvas
//   context.drawImage(video, 0, 0, canvas.width, canvas.height);

//   // convert the canvas to a data URL representing a PNG image
//   const imageDataURL = canvas.toDataURL('image/png');

//   // Create an image element and set its source to the captured frame
//   const imageElement = document.createElement('img');
//   imageElement.src = imageDataURL;

//   // Append the image to the document or use it as needed
//   document.body.appendChild(imageElement);
// }

// async function startVideo() {
//   try {
//     //navigator.mediaDevices.getUserMedia is a JavaScript API that allows web applications to access a user's media devices, such as their camera and microphone, directly from a web browser.
//     const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//     const video = document.getElementById('video');
//     //video.srcObject = stream; is used to set the media stream obtained from the getUserMedia() API to a <video> element in HTML. This enables real-time video streaming from the user's camera 
//     video.srcObject = stream;
//   } catch (error) {
//     console.error('Error accessing the camera:', error);
//   }
// }
// startVideo();

