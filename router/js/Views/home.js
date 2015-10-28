function contacts(data){
  return data.map(function(item){
    return `
      <li class='names' data-todo-id="${item.objectId}">${item.lastName}, ${item.firstName}</li>`
        }).join('');
  
};

function contactsTemplate(data){
  return `
     <ul> ${contacts(data)}</ul>
  `
};

export default contactsTemplate;