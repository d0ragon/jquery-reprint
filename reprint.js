(function ($)
{

  $.fn.reprint = function ()
  {
    $(this).replaceWith(function ()
    {
      return $(this).clone().wrap('<div class="temp_wrapper">').parent().find('img, script, link, iframe[src]').each(function ()
      {
        var el = $(this);
        var attrname = $(el).is('link') ? 'href' : 'src';
        var src = el.attr(attrname);
        src = (src.replace(/(\?|&)_t=[0-9]+&?/, '$1') + ((src.indexOf('?') === -1) ? '?' : '&') + '_t=' + +new Date()).replace(/&&/, '&').replace(/\?&/, '?');
        el.attr(attrname, src);
      })
      .end()
      .html();
    });
    return $(this);
  }

})(jQuery);


/*

$.expr[':'].test = function(obj, index, meta, stack){
    // obj - is a current DOM element
    // index - the current loop index in stack
    // meta - meta data about your selector
    // stack - stack of all elements to loop
   
    // Return true to include current element
    // Return false to explude current element
};

// Usage:
$('.someClasses:test').doSomething();

*/
