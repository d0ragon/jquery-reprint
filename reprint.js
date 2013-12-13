(function ($)
{

  $.fn.reprint = function ()
  {
    var selector = 'img, script[src], link, iframe[src]';

    // finds needed children, then
    // adds current element to selection if it itself matches the selector
    $(this).find(selector).addBack(selector).each(function ()
    {
      var el = $(this);
      var attrname = el.is('link') ? 'href' : 'src';
      var src = this.getAttribute(attrname);
      src = (src.replace(/(\?|&)_t=[0-9]+&?/, '$1') + ((src.indexOf('?') === -1) ? '?' : '&') + '_t=' + +new Date()).replace(/&&/, '&').replace(/\?&/, '?');
      el.attr(attrname, src);
    });

    return $(this);
  }

})(jQuery);


