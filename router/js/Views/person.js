import underscore from 'underscore';


function processData(data){
  console.log(data.objectId);
  return `<h2>${data.firstName} ${data.lastName}</h2>`
  // return data.objectId{
  //   return `
  //   <li>Name: ${item.lastName}, ${item.firstName}</li>
  //   <li>Phone: ${item.phone}</li>
  //   <li>Email: ${item.email}</li>`

  
  // .join('');
}


function personTemplate(data){
  return `
    
    <div> ${processData(data)}</div>
  `
}

export default personTemplate;       