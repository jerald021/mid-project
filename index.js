// --------------FUNCTIONS DEFINITION
    async function getWithFetch() {
    const res = await fetch("http://localhost:8000/posts");
    const finalRes = await res.json();
    // finalRes.splice(10);
    return finalRes;
    }    

    async function createPosts() {
        const posts = await getWithFetch();
        console.log(posts);
        const myDiv = document.querySelector(".project-article-content");
        // div container:   manual = imagen y learn more dinamico= title y description
        posts.forEach((post) => {    
            const inner = document.createElement("h2");
            inner.innerText = post.title;
            myDiv.appendChild(inner);

            const inner2 = document.createElement("p");
            inner2.innerText = post.description;
            myDiv.appendChild(inner2);
        });
    }

    async function formHandle() {
        const fname = document.querySelector('#fname');
         const fnameValue = fname.value;
         console.log(fnameValue);
         return fnameValue;
    }

    async function postWithFetch() {
        const info = formHandle();
        console.log(info);
        const data = {
            fullname: info,
            email: "email2@example.com",
            phone: "223456789",
            message: "This is a test message 3"
        };      
        const res = await fetch("http://localhost:8000/messages", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const finalRes = await res.json();
        console.log(finalRes);
      }    
  //---------------- FUNCTION CALLS
//   createPosts();
 postWithFetch();

// window.addEventListener('load', () => {
//     const sendForm = document.getElementById('submit');
//     sendForm.addEventListener('click', formHandle);
//     //... your code goes here
//   });
