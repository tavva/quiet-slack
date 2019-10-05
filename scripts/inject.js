window.addEventListener ("load", main, false);

var show_hide_button = document.createElement('button');
show_hide_button.appendChild(document.createTextNode('Show channels'));
show_hide_button.classList.add('show-hide-button');
show_hide_button.classList.add('c-button-unstyled');

var hidden = true;

function main (evt) {
  var sidebar_node = document.getElementsByClassName('p-channel_sidebar__list')[0];

  show_hide_button.addEventListener('click', function (evt) {
    sidebar_node.style.visibility = hidden ? 'visible' : 'hidden';
    show_hide_button.innerHTML = hidden ? 'Hide channels' : 'Show channels';
    hidden = !hidden;
  });

  sidebar_node.parentNode.insertBefore(show_hide_button, sidebar_node);
}
