// // api url
// const api_url = 
//       "http://localhost:3000/chore";
  
// // Defining async function
// const getChoresFromAPI = async (url) => {
//     // Storing response
//     const response = await fetch(url);
//     // Storing data in form of JSON
//     var data = await response.json();
//     console.log(data);
//     if (response) {
//         hideloader();
//     }
//     show(data);
//     // addToSpinner(data);
// }
// // Calling that async function
// getChoresFromAPI(api_url);

// // Function to hide the loader
// function hideloader() {
//     document.getElementById('loading').style.display = 'none';
// }
// // Function to define innerHTML for HTML table
// function show(data) {
//     window.ChoreList = data;
//     let tab = 
//         `<tr>
//           <th>chore</th>
//           <th>area</th>
//          </tr>`;
    
//     // Loop to access all rows 
//     for (let r of data) {
//         tab += `<tr>
//     <td>${r.chore}</td>
//     <td>${r.area}</td> 
// </tr>`;
//     }
//     // Setting innerHTML as tab variable
//     document.getElementById("chore-list").innerHTML = tab;
// }

// function addToSpinner(data) {
//     // Loop to access all rows 
//     let triangles = `<span class="span1"><b>No Chore</b></span>`

//     for (let r = 0;  r < data.length; r++) {
//         if(r % 2 == 0){        
//             triangles += (`<span class="span2"><b>${data[r].chore}</b></span>`);
//         } if(r % 4 == 0){
//             triangles += (`<span class="span4"><b>${data[r].chore}</b></span>`);
//         } if(r % 3 == 0){
//             triangles += (`<span class="span3"><b>${data[r].chore}</b></span>`);
//         } else{
//             triangles += (`<span class="span1"><b>${data[r].chore}</b></span>`);
//         }
//         // document.getElementById("box").innerHTML = (`${r.chore}`);
//     }

//     //IF data.length is divisible by 4, then we
//     // Setting innerHTML as tab variable
//     document.getElementById("box2").innerHTML = triangles;
// }

//http://jsfiddle.net/bramp/94jP6/