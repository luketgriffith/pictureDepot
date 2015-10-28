function contacts(data){
  return data.map(function(item){
    return `
      <li class='names' data-todo-id="${item.objectId}"><i class="fa fa-user"></i> ${item.lastName}, ${item.firstName}</li>`
        }).sort().join('');

};

function contactsTemplate(data){
  return `
     <ul> ${contacts(data)}</ul>
  `
};

export default contactsTemplate;