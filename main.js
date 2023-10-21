 var courseName = document.querySelector("#courseName");
 var courseCategory = document.querySelector("#courseCategory");
 var coursePrice = document.querySelector("#coursePrice");
 var courseDescription = document.querySelector("#courseDescription");
 var courseCapacity = document.querySelector("#courseCapacity");
 var addbtn = document.querySelector("#click");

 var courses = [];
 var inputs = document.querySelectorAll(".inputs");
 var search = document.querySelector("#search");
 var nameError = document.querySelectorAll(".inputs");
 var isnametrue = false;
 addEventListener("click",function(e){

    e.preventDefault();
    addcourse();
    clear();
    displyData();
    deletecourse();
    
   
 })

 function addcourse(){
    var course = {

        Name : courseName.value.toLowercase(),
        Category : courseCategory.value,
        Price : coursePrice.value,
        Description : courseDescription.value,
        Capacity : courseCapacity.value,

    }
    courses.push(course);
    localStorage.setItem("courses", JSON.stringify(courses));
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })

 }

 function clear(){
    for( var i =0; i<inputs.length;i++){
        inputs[i].value="";
    }
    
 }

 function displyData(){
    var result ='';

    for( var i =0; i<courses.length;i++){
        result += `
        <tr>
        <td>${i}</td>
        <td>${courses[i].name}</td>
        <td>${courses[i].Category}</td>
        <td>${courses[i].Price}</td>
        <td>${courses[i].Description}</td>
        <td>${courses[i].Capacity}</td>
        <td> <button class ='btn btn-outline-info'> update</button></td>
        <td> <button class ='btn btn-outline-danger' onclick="deletecourse(${i})">delete</button></td>
    </tr>
        `;       
    }
    document.getElementById("data").innerHTML=result;
 }

 function deletecourse (id){
courses.splice(id,1);
displyData();
 }

 search.addEventListener("keyup",function(e){
       if(courses[i].name.toLowercase().includes(e.target.value.toLowercase()))
    var result ='';

    for( var i =0; i<courses.length;i++){

        result += `
        <tr>
        <td>${i}</td>
        <td>${courses[i].name}</td>
        <td>${courses[i].Category}</td>
        <td>${courses[i].Price}</td>
        <td>${courses[i].Description}</td>
        <td>${courses[i].Capacity}</td>
        <td> <button class ='btn btn-outline-info'> update</button></td>
        <td> <button class ='btn btn-outline-danger' onclick="deletecourse(${i})">delete</button></td>
    </tr>
        `;       
    }
    document.getElementById("data").innerHTML=result;
 })

 courseName.addEventListener("keyup",function(){
    var pattern = /^[A-Z][a-z]{2,10}$/;
    if(pattern.test(courseName.value)){
        if(courseName.classList.contains('is-invalid')){
            courseName.classList.remove('is-invalid');
            courseName.classList.add('is-valid');
        }
        courseName.classList.add('is-valid');
        nameError.style.cssText="display:none";
        isnametrue=true;
    }
    else{
        if(courseName.classList.contains('is-valid')){
            courseName.classList.remove('is-valid');
            courseName.classList.add('is-invalid');
        }
        courseName.classList.add('is-invalid');
        nameError.style.cssText="display:block";
        isnametrue=flase;
    }

    if(isnametrue){
        addbtn.removeAttribute("displed")
    }
    else{
        addbtn.setAttribute("displed","displed");
    }

 })