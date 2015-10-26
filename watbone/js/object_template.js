function ObjectTemplate(data){
  return `<div class='items' id='meow'>
    <h1>${data.name} </h1>
    <img src='${data.pic}'>
    <h2>${data.description} </h2>
    <h2>${data.quantity} </h2> 
    </div>
  `;
}

export default ObjectTemplate;