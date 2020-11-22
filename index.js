// Add your code here
function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    }
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };
      
      
      fetch("http://localhost:3000/users", configObj)
      .then(function(response) {
          return response.json();
        })
        .then(function(object) {
        let body = document.querySelector("body")
          const id = object.id
            body.innerHTML += id
      })
      .catch(function(error) {
        let body = document.querySelector("body")
        const message = error.message
        body.innerHTML += message
      })
}
