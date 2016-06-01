$(document).foundation();

(function () {

  var buildColorDiv = function(color) {
    if (color === undefined) {
      color = 'red';
    }
    return '<div style="height: 100px; width: 100px; background-color: ' + color + '"></div>'
  };

  var buildList = function(listValues) {
    var dl = document.createElement('dl');
    dl.style.border = '1px solid #ff0033';
    dl.appendChild(buildListItem('Name', listValues.name));
    dl.appendChild(buildListItem('Hair Color', listValues.hairColor));
    dl.appendChild(buildListItem('Age', listValues.age));
    dl.appendChild(buildListItem('Birthplace', listValues.birthplace));
    return dl;
  };

  var buildListItem = function(term, definition) {
    var li = document.createElement('li');
    var dt = document.createElement('dt');
    var dd = document.createElement('dd');
    dt.innerHTML = term;
    dd.innerHTML = definition;
    li.appendChild(dt);
    li.appendChild(dd);
    return li;
  };

  var addValuesToDetails = function(ev) {
    ev.preventDefault();
    var details = document.querySelector('.details');
    var formValues = {
      name: this.name.value,
      age: this.age.value,
      birthplace: this.birthplace.value,
      hairColor: buildColorDiv(this.hairColor.value)
    };

    details.appendChild(buildList(formValues));
  };

  document.querySelector('form').onsubmit = addValuesToDetails;
})();



//var buildColorDiv = function(color){

//return var colorDiv = '<div style="height: 100px; width: 100px; background-color: ' + color + '"></div>';

//}

//var buildList = function(values = []){
//return
//details.innerHTML += ' \
    //<dl> \
      //<dt>Name</dt> \
      //<dd>' + name.value + '</dd> \
          //\
      //<dt>Hair Color</dt> \
      //<dd>' + hairColor.value + '</dd> \
        //\
     //<dt>Age</dt> \
    //  <dd>' + age.value + '</dd> \
        //\
      //<dt>Birthplace</dt> \
      //<dd>' + birthplace.value + '</dd> \
    //</dl>';
//}

//var addValuesToDetails = function(ev) {

//document.querySelector('form').onsubmit = function(ev) {
        //ev.preventDefault();

        //var name = document.getElementsByName('name');
        //var hairColor = '<div id="react" style="width: 100px; height: 100px;"></div>';
        //var age = document.getElementsByName('birthplace');

        //var details =



      //}

      //function update(jscolor) {

    //document.getElementById('react').style.backgroundColor = '#' + jscolor
//};


    //document.querySelector('form').onsubmit = addValuesToDetails;

    //document.querySelector('input[type="text"]').onblur = addValuesToDetails;




// his way of setting up the form

//document.querySelector('form').onsubmit = function(ev) {
//  ev.preventDefault();
//  var details = document.querySelector('.details');
//  var name = this.name;
//  var hairColor = this.hair_color;
//  var age = this.age;
//  var birthplace = this.birthplace;

//var colorDiv = '<div style="height: 100px; width: 100px; background-color: ' + hairColor.value + '"></div>';


//  details.innerHTML += ' \
    //<dl> \
    //  <dt>Name</dt> \
      //<dd>' + name.value + '</dd> \
          //\
    //  <dt>Hair Color</dt> \
      //<dd>' + hairColor.value + '</dd> \
        //\
    //  <dt>Age</dt> \
    //  <dd>' + age.value + '</dd> \
        //\
      //<dt>Birthplace</dt> \
      //<dd>' + birthplace.value + '</dd> \
    //</dl>';
//};
