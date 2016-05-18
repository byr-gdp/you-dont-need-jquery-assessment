// 用于判断是否在 Node.js 环境
if ( typeof window === 'undefined' ) {
  var answers = require('../answer');
  var should = require('chai').should();
  var sinon = require('sinon');
}

describe('Query Selector', function() {
  beforeEach(function() {

  });

  it('should query by selector', function () {
    answers.queryBySelector().length.should.equal($('selector').length);
    for (var i = 0, len = answers.queryBySelector().length; i < len; i++) {
      answers.queryBySelector()[i].should.equal($('selector')[i]);
    }
  });

  it('should query by class', function() {
    answers.queryByClass().length.should.equal($('.css').length);
    for (var i = 0, len = answers.queryByClass().length; i < len; i++) {
      answers.queryByClass()[i].should.equal($('.css')[i]);
    }
  });

  it('should query by id', function() {
    answers.queryById().should.equal($('#test')[0]);
  });

  it('should query by attribute', function() {
    answers.queryByAttribute().length.should.equal($('a[target=_blank]').length);
    for (var i = 0, len = answers.queryByAttribute().length; i < len; i++) {
      answers.queryByAttribute()[i].should.equal($('a[target=_blank]')[i]);
    }
  });

  describe('Find sth.', function() {
    it('should find nodes', function() {
      answers.findNodes().length.should.equal($('li').length);
      for (var i = 0, len = answers.findNodes().length; i < len; i++) {
        answers.findNodes()[i].should.equal($('li')[i]);
      }
    });

    it('should find body', function() {
      answers.findBody().should.equal($('body')[0]);
    });

    it('should find attribute', function() {
      answers.findAttribute().should.equal($('#el-1-4').attr('class'));
    });

    it('should find data attribute', function() {
      ['el.getAttribute("data-foo")', 'el.dataset["foo"]'].should.include(answers.findDataAttribute);
    });
  });

  describe('Sibling/Previous/Next Elements', function() {
    // FIXME
    it('should find sibling elements', function() {
      ['[].filter.call(el.parentNode.children, function(child) { return child !== el; })'].should.include(answers.siblingElements);
    });

    it('should find previous element', function() {
      ['el.previousElementSibling'].should.include(answers.previousElement);
    });

    it('should find next element', function() {
      ['el.nextElementSibling'].should.include(answers.nextElementSibling);
    });
  });

  it('should find the closest', function() {
    // TODO
    var flag = true;
    true.should.not.be.ok;
  });

  it('should find parents until', function() {
    // TODO
    var flag = true;
    true.should.not.be.ok;
  });

  describe('Form', function() {
    it('should get form value', function() {
      ['document.querySelector("#my-input").value'].include(answers.inputValue);
    });

    it('should get index of e.currentTarget between .radio', function() {
      ['[].indexOf.call(document.querySelectorAll(".radio", e.currentTarget)'].should.include(answers.getIndexOfCurrentTarget);
    });
  });

  describe('Iframe Contents', function() {
    it('should get iframe contents', function() {
      ['iframe.contentDocument'].should.include(answers.getIframeContents);
    });

    it('should iframe query', function() {
      ['iframe.contentDocument.querySelectorAll(".css")'].should.include(answers.iframeQuery);
    });
  });

});