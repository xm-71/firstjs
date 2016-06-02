$(document).foundation();

var megaRoster = {
  init: function(){
    this.setupEventListners();

  },

  setupEventListners: function(){

    document.querySelector('form').onsubmit = this.addStudent;

  },

  addStudent: function(ev){
      ev.preventDefault();
      console.log('hello World');
  },


}

megaRoster.init();
