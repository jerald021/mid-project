async function getWithFetch() {
    const res = await fetch("http://localhost:3000/posts");
    const finalRes = await res.json();
    // finalRes.splice(10);
    // return finalRes;
    // console.log(finalRes);   
    createPosts(finalRes);
    }   

    async function createPosts(myData) {
        const myDiv = document.querySelector('.projects-item');

        myData.forEach(data => {
            // console.log(myData);
            // console.log(myDiv);
            // console.log(myDiv);
            myDiv.innerHtml += `
               <div class=" 1">              
               <h1>${data.title}<h1/>
               <h2>${data.description}<h2/>
               </div>
            `                   
        });
         myDiv.innerHTML = myDiv;
         console.log(myDiv);

      }
    getWithFetch();
    //  window.addEventListener("DOMContentLoaded", ()=>createPosts());