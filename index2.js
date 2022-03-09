// --------------FUNCTIONS DEFINITION
//------ ARTICLES
async function getWithFetch() {
    const res = await fetch("http://localhost:8000/posts");
    const finalRes = await res.json();
    // finalRes.splice(10);
    // return finalRes;
    console.log(finalRes);

    createPosts(finalRes);
    }    

    const item = document.querySelector(".projects-item");
    //  console.log(item);

    async function createPosts(myData) {
        const myDiv = document.querySelector('.projects-item');
        for (let i = 0; i < myData.length; i++) {
          myDiv.innerHtml += `
              <div class='myCards${i}'>
              img src='${myData[i].image}' />
              <h1>${myData[i].title}<h1/>
              <h2>${myData[i].description}<h2/>
              </div>
          `;
        }
      }

    








        // console.log(item);

// createPosts();
        //  console.log(posts);
        //  const item = document.querySelector(".projects-item");
          //  console.log(item);
        //  let template = '';
        // //  console.log(posts);

        //   posts.forEach(e => {
        //       template += 'manual text';
                          
        //   });
        //   projects-ClipboardItem.innerHTML = template;

      // posts.forEach(element => {
      //   const img = document.createElement('img class="project-image" src="/assets/projects-section/1.jpg" alt="" img');


      //   // <img class="project-image"src="/assets/projects-section/1.jpg" alt=""></img>
      //   const tag = document.createElement("h2");
      //   tag.innerText = element.title;
      //   item.appendChild(tag);
        
      //   const tag2 = document.createElement("p");
      //   tag2.innerText = element.description;
      //   item.appendChild(tag2);  
      // });
          // for (let i = 0; i < posts.length; i++) {
          //     const inner = document.createElement("h2");
          //      inner.innerText = posts[i].title;  
          //      console.log(inner);
          //     //  myDiv.appendChild(inner);
          // }


          // posts.forEach((post) => {
          //     const inner = document.createElement("h2");
          //     inner.innerText = post.title;  
          //     console.log(inner);
          //     myDiv.appendChild(inner);

              //  const inner2 = document.createElement("p");
              //  inner2.innerText = post.description;
              //  myDiv.appendChild(inner2);
          // });

     //}  

  //---------------- FUNCTION CALLS
//   createPosts();
  // postWithFetch();

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