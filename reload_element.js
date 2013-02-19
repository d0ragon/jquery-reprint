(function ($)
{

  $.fn.reOutput = function ()
  {
    $(this).replaceWith(function ()
    {
      return $(this)
        .clone()
        .wrap('<p class="temp_wrapper">')
        .parent()
        .find('img, script, link, iframe[src]')
        .each(function ()
          {
            var el = $(this);
            var attrname = $(el).is('link') ? 'href' : 'src';
            var src = el.attr(attrname);
            src = (src.replace(/(\?|&)_t=[0-9]+&?/, '$1') + ((src.indexOf('?') === -1) ? '?' : '&') + '_t=' + +new Date()).replace(/&&/, '&').replace(/\?&/, '?');
            el.attr(attrname, src);
          })
        .closest('p.temp_wrapper')
        .html();
    });
    return $(this);
  }

})(jQuery);
