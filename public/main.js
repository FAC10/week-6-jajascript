// xhr request
function request (url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      cb(null, xhr.responseText);
    } else {
      cb("error" + xhr.responseType);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}


function populateDom (err, data) {
  if (err) {
    console.log(err);
  } else {
    var companies = JSON.parse(data);
    var table = document.getElementById("companies-table");
    // create a row in the table for each user input returned from the Database
    companies.forEach(function(userInput) {
      var row = document.createElement("tr");

      // create the value for the name of the inputter
      var name = document.createElement("td");
      name.innerHTML = userInput.username;
      row.appendChild(name);

      // create the value for the name of the company
      var company = document.createElement("td");
      company.innerHTML = userInput.company;
      row.appendChild(company);
      table.appendChild(row);

      // create the value for the reason why the company is interesting
      var reason = document.createElement("td");
      company.innerHTML = userInput.reason;
      row.appendChild(reason);
      table.appendChild(row);
    });
  }
}

request('/companies', populateDom);
