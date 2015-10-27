function contacts(data){
  return data.map(function(item){
    return `
    <li class='names' data-todo-id="${item.objectId}">Name: ${item.lastName}, ${item.firstName}</li>`
    }).join('');
  return data;
};  

function contactsTemplate(data){
  return `
     <ul> ${contacts(data)}</ul>
  `
};

export default contactsTemplate;