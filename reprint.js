(function ($)
{

  $.fn.reprint = function ()
  {
    $(this).replaceWith(function ()
    {
      var wrapper = $(this).clone().wrap('<div class="temp_wrapper">').parent();

      wrapper.find('img, script, link, iframe[src]').each(function ()
      {
        var el = $(this);
        var attrname = $(el).is('link') ? 'href' : 'src';
        var src = el.attr(attrname);
        src = (src.replace(/(\?|&)_t=[0-9]+&?/, '$1') + ((src.indexOf('?') === -1) ? '?' : '&') + '_t=' + +new Date()).replace(/&&/, '&').replace(/\?&/, '?');
        el.attr(attrname, src);
      })

      return wrapper.html();
    });
    return $(this);
  }

})(jQuery);
