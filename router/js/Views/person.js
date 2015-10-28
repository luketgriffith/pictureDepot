import underscore from 'underscore';


function processData(data){

  return `<h2>${data.firstName} ${data.lastName}</h2>
          <h3>Phone: ${data.phone}</h3>
          <h3>Email: ${data.email}</h3>
  `
}


function personTemplate(data){
  return `
    
    <div> ${processData(data)}</div>
  `
}

export default personTemplate;       