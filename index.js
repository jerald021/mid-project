async function getWithFetch() {
    const res = await fetch("https://marketplace.freelancewebdesign.online/wp-json/wp/v2/projects");
    const finalRes = await res.json();
    // finalRes.splice(10);
    // return finalRes;
    //  console.log(finalRes);   
     createPosts(finalRes);
    }

    async function createPosts(myData) {
        const myDiv = document.querySelector('.projects-item');
        myData.forEach(data => {
             myDiv.innerHTML += `
             <div class="project-article">  
             <img class="project-image" src="${data.image}" alt="">
             <h1 class="body-medium project-title">${data.title.rendered}<h1/>
             <p class="headline-regular project-title">${data.description}<p/>  
             <a class="learn-more learn-more-text" href="project.html">Learn more</a>
             </div>
             `                 
        });
      }
  
getWithFetch();


//----------------------- SEND FORM DATA
// let form = document.querySelector('form');
let fetchUrlForm = "http://localhost:8000/messages";
async function saveData(event) {
    event.preventDefault(); 
    let data = {
        fullname: document.querySelector('#fname').value,
        email: document.querySelector('#email').value,
        phone: document.querySelector('#phone').value,
        message: document.querySelector('#message').value        
    }
    await fetch(fetchUrlForm, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })        
}

document.addEventListener('submit', saveData);