$(document).foundation()

document.querySelector('form').onsubmit = function(ev) {
        ev.preventDefault();

        var name = document.getElementsByName('name');
        var hair_color = document.getElementsByName('hair_color');
        var age = document.getElementsByName('birthplace');

        var details = document.querySelector('.details');
        details.innerHTML += '<dl>' +  '<dt> Name </dt>' + '<dd>' + this.name.value + '</dd>' +
          '<dt> Hair Color </dt>' + '<dd>' + '<div id="react" style="width: 100px; height: 100px;"></div>' + '</dd>' +'<dt> Age </dt>' + '<dd>' + this.age.value + '</dd>' 
        + '<dt> Birthplace </dt>' + '<dd>' + this.birthplace.value + '</dd>' +  '</dl>';



      }

      function update(jscolor) {

    document.getElementById('react').style.backgroundColor = '#' + jscolor
}



// his way of setting up the form
//document.querySelector('form').onsubmit = function(ev) {
//  ev.preventDefault();
//  var details = document.querySelector('.details');
//  var name = this.name;
//  var hairColor = this.hair_color;
//  var age = this.age;
//  var birthplace = this.birthplace;

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