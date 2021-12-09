var updateView = async(button) => {
  if (button.dataset.querytype == 'by_instructor') {
    console.log(button.dataset.querytype);
    let queryName = document.querySelector("#instructorQuery").value;
    api = `http://localhost:3000/api/by_instructor/${queryName}`;
  }

  else if (button.dataset.querytype == 'by_code') {
    let queryCode = document.querySelector("#codeQuery").value;
    api = `http://localhost:3000/api/by_course_code/${queryCode}`;
  }

  else if (button.dataset.querytype = 'by_level') {
    console.log(button.dataset.querytype);
    const choices = document.querySelectorAll('input[name = "level"]');
    let queryLevel;
    for (const choice of choices) {
          if (choice.checked) {
                queryLevel = choice.value;
                break;
          }
    }
    api = `http://localhost:3000/api/by_level/${queryLevel}`;
  }

  else if (button.dataset.querytype = 'dual_query') {
  let dual_queryName = document.querySelector("#dual_name").value;
  console.log(button.dataset.querytype);

  console.log(dual_queryName);
  const dual_choices = document.querySelectorAll('input[name = "dual_level"]');
  let dual_queryLevel;
    for (const dual_choice of dual_choices) {
        if (choice.checked) {
              dual_queryLevel = dual_choice.value;
              break;
          }
      }
  api = `http://localhost:3000/api/combined_query/${dual_queryName}/${dual_queryLevel}`;
  }
  console.log(api);
  const data = await fetch(api);
  const model = await data.json();
  render_view (model);
}


var render_view = (model) => {
  var source = document.querySelector("#update_results").innerHTML;
  var template = Handlebars.compile(source);
  var html = template(model);

  document.querySelector("#results").innerHTML = html;
}
