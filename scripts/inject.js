window.addEventListener ("load", main, false);

var show_hide_button = document.createElement('button');
show_hide_button.appendChild(document.createTextNode('Show channels'));
show_hide_button.classList.add('show-hide-button');
show_hide_button.classList.add('c-button-unstyled');

var hidden = true;

function inject_css(str) {
  var node = document.createElement('style');
  node.innerHTML = str;
  document.body.appendChild(node);
}

selectors = {
  'Unread search results header': function(value) {return `div.c-search_autocomplete li[role="presentation"]:first-of-type { display: ${value}; }`},
  'Unread search results': function(value) {return `div.c-search_autocomplete li[role="presentation"]:first-of-type ~ .c-search_autocomplete__suggestion_item { display: ${value}; }`},
  'Other search results': function(value) {return `div.c-search_autocomplete li[role="presentation"]:not(:first-of-type) ~ .c-search_autocomplete__suggestion_item { display: ${value}; }`},
  'Search unread count': function(value) {return `span.c-search_autocomplete__unread_count { visibility: ${value}; }`},
}

function main (evt) {
  var sidebar_node = document.getElementsByClassName('p-channel_sidebar__list')[0];

  show_hide_button.addEventListener('click', function (evt) {
    target_visibility = hidden ? 'visible' : 'hidden';
    target_display = hidden ? 'flex': 'none';

    sidebar_node.style.visibility = target_visibility;
    show_hide_button.innerHTML = hidden ? 'Hide channels' : 'Show channels';

    inject_css(selectors['Unread search results header'](target_display));
    inject_css(selectors['Unread search results'](target_display));
    inject_css(selectors['Other search results']('flex'));
    inject_css(selectors['Search unread count'](target_visibility));

    hidden = !hidden;
  });

  sidebar_node.parentNode.insertBefore(show_hide_button, sidebar_node);
}
