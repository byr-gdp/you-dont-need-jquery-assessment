exports = (typeof window === 'undefined') ? global : window;

exports.answers = {
  // Note: 参数需要与 jQuery 一致

  // Query by selector
  // jQuery: $('selector');
  queryBySelector: function() {
    return document.querySelectorAll('selector');
  },

  // Query by class
  // jQuery: $('.css');
  queryByClass: function() {
    return document.getElementsByClassName('css');
  },

  // Query by id
  // jQuery: $('#id');
  queryById: function() {
    return document.getElementById('test');
  },

  // Query by attribute
  // jQuery: $('a[target=_blank]');
  queryByAttribute: function() {
    return document.querySelectorAll('a[target=_blank]');
  },

  // Find nodes
  // jQuery: $el.find('li');
  findNodes: function() {
    return document.querySelectorAll('li');
  },

  // Find body
  // jQuery: $('body');
  findBody: function() {
    return document.body;    
  },

  // Find Attribute
  // jQuery: $el.attr('foo');
  findAttribute: function() {
    var el = document.getElementById('el-1-4');
    return el.getAttribute('class');
  },


  // Find data attribute
  // jQuery: $el.data('foo');
  findDataAttribute: '',

  // Sibling elements
  // jQuery: $el.siblings();
  siblingElements: '',

  // Previous elements
  // jQuery: $el.prev();
  previousElements: '',

  // Next elements
  // next: $el.next();
  nextElements: '',

  // Closest
  // jQuery: $el.closest(queryString);

  // Parents Until
  // jQuery: $el.parentsUntil(selector, filter);

  // Input/Textarea
  // jQuery: $('#my-input').val();
  inputValue: '',

  // Get index of e.currentTarget between .radio
  // jQuery: $(e.currentTarget).index('.radio');
  getIndexOfCurrentTarget: '',

  // Iframe contents
  // jQuery: $iframe.contents();
  getIframeContents: '',

  // Iframe Query
  // jQuery: $iframe.contents().find('.css');
  iframeQuery: ''
};