var updateView = async(button) => {
  switch(button.dataset.querytype){

    case 'by_instructor':
      console.log(button.dataset.querytype);
      let queryName = document.querySelector("#instructorQuery").value;
      //api = `http://localhost:5000/api/by_instructor/${queryName}`;
      api = `https://course-query-project.herokuapp.com/api/by_instructor/${queryName}`;
      break;
    case 'by_code':
      let queryCode = document.querySelector("#codeQuery").value;
      //api = `http://localhost:5000/api/by_course_code/${queryCode}`;
      api = `https://course-query-project.herokuapp.com/api/by_course_code/${queryCode}`;
      break;
    case 'by_level':
      console.log(button.dataset.querytype);
      const choices = document.querySelectorAll('input[name = "level"]');
      let queryLevel;
        for (const choice of choices) {
            if (choice.checked) {
                queryLevel = choice.value;
              }
            }
      //api = `http://localhost:5000/api/by_level/${queryLevel}`
      api = `https://course-query-project.herokuapp.com/api/by_level/${queryLevel}`;
      break;
    case 'dual_query':
      let dual_queryName = document.querySelector("#dual_name").value;
      console.log(button.dataset.querytype);

      console.log(dual_queryName);
      const dual_choices = document.querySelectorAll('input[name = "dual_level"]');
      let dual_queryLevel;
        for (const dual_choice of dual_choices) {
            if (dual_choice.checked) {
                  dual_queryLevel = dual_choice.value;
                  break;
                }
              }
              //api = `http://localhost:5000/api/combined_query/${dual_queryName}/${dual_queryLevel}`
              api = `https://course-query-project.herokuapp.com/api/combined_query/${dual_queryName}/${dual_queryLevel}`;
        break;

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
