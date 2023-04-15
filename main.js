// JavaScript
// Filter skills based on search input
document.getElementById('searchInput').addEventListener('input', function() {
    var searchValue = this.value.toLowerCase();
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
      var skillsList = card.querySelector('.skills-list');
      var skills = skillsList.getElementsByTagName('li');
      for (var i = 0; i < skills.length; i++) {
        var skill = skills[i].querySelector('.skill-name').textContent.toLowerCase();
        if (skill.indexOf(searchValue) === -1) {
          skills[i].style.display = 'none';
        } else {
          skills[i].style.display = 'block';
        }
      }
    });
  });

  /*<!-- JavaScript code to close the Navbar toggle menu once a link is clicked -->*/
  function closeNavbar() {
    $(".navbar-collapse").collapse('hide');
  }