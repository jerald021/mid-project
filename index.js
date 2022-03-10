async function getWithFetch() {
    const res = await fetch("https://marketplace.freelancewebdesign.online/wp-json/wp/v2/projects");
    const finalRes = await res.json();  
     createPosts(finalRes);
    }

    async function createPosts(myData) {
        const myDiv = document.querySelector('.projects-item');
        myData.forEach(data => {
             myDiv.innerHTML += `
             <div class="project-article service">  
             <img class="project-image" src="${data.better_featured_image.source_url}" alt="image">
             <h1 class="body-medium project-title">${data.title.rendered}<h1/>
             <p class="headline-regular project-title">${data.acf.description}<p/>  
             <a class="learn-more learn-more-text" href="project.html">Learn more</a>
             </div>
             `                 
        });
      }
  
getWithFetch();

//----------------------- SEND FORM DATA
let form = document.querySelector('#form-input');
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

form.addEventListener('submit', saveData);