window.addEventListener ("load", main, false);

var show_hide_button = document.createElement('div');
show_hide_button.appendChild(document.createTextNode('Show channels'));
show_hide_button.classList.add('show-hide-button');

function main (evt) {
  var insert_before_node = document.getElementsByClassName('p-channel_sidebar__list')[0];
  var parent_node = insert_before_node.parentNode;

  parent_node.insertBefore(show_hide_button, insert_before_node);
}
