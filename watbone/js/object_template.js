function ObjectTemplate(data){
  return `<div class='items'>
    <h1>${data.name} </h1>
    <h2>${data.description} </h2>
    <h2>${data.quantity} </h2>
    </div>
  `;
}

export default ObjectTemplate;