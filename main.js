var form = document.querySelector("#mainForm");
var makeInput = document.createElement("input");
var footer = document.querySelector('.footer');
var makeInputSelect = document.createElement("select");


function mainLoop() {
  for (let i = 0; i < formData.length; i++) {
    if (
      formData[i].type == "text" ||
      formData[i].type == "email" ||
      formData[i].type == "tel"
    ) {
      var makeInput = document.createElement("input");
      makeInput.setAttribute = formData[i].type;
      form.appendChild(makeInput);
      makeInput.placeholder = formData[i].label;
      makeInput.id = formData[i].id;
    } else if (formData[i].type == "textarea") {
      var makeInput = document.createElement("textarea");
      makeInput.setAttribute = formData[i].type;
      form.appendChild(makeInput);
      makeInput.placeholder = formData[i].label;
      makeInput.id = formData[i].id;
    } else if (formData[i].type == "select") {
      var makeInputSelect = document.createElement("select");
      makeInputSelect.setAttribute = formData[i].type;
      form.appendChild(makeInputSelect);
      makeInputSelect.placeholder = formData[i].label;
      makeInputSelect.id = formData[i].id;
      newOptionLang = document.createElement("option");
      newOptionLang.textContent = "Select Language...";
      makeInputSelect.appendChild(newOptionLang);
      for (let j = 0; j < formData[i].options.length; j++) {
        newOption = document.createElement("option");
        makeInputSelect.appendChild(newOption);
        newOption.textContent = formData[i].options[j].label;
      }
    }
  }
  var footer = document.createElement("footer");
  form.appendChild(footer);
  button = document.createElement("button");
  footer.appendChild(button);
  button.textContent = "Submit button";
}

mainLoop();
