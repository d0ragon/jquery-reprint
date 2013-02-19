(function ($)
{

  $.fn.reloadElement = function ()
  {
    $(this).each(function (i, e)
    {
      var el = $(e);

      var wrapper = el.clone().wrap('<p>').parent();
      wrapper.find('img, script, link').each(function (i, e)
      {
        var el = $(e);
        var attrname = $(el).is('link') ? 'href' : 'src';
        var src = el.attr(attrname);
        src = (src.replace(/(\?|&)_t=[0-9]+&?/, '$1') + ((src.indexOf('?') === -1) ? '?' : '&') + '_t=' + +new Date()).replace(/&&/, '&').replace(/?&/, '?');
        el.removeAttr(attrname).attr(attrname, src);
      });

      el.replaceWith(wrapper.html());
    });
    return $(this);
  }

})(jQuery);
