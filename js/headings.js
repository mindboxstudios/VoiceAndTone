/*
 * Headings
 */

(function($) {
    var i    = 0,
        data = [];

    $('.main h1, .main h2, .main h3, .main h4, .main h5, .main h6').each(function () {
        var index = i,
            level = parseInt($(this).prop('tagName').substring(1)),
            id    = $(this).attr('id'),
            text  = $(this).text();

        data[i] = {};
        data[i].index = index;
        data[i].level = level;
        data[i].id = id;
        data[i].text = text;

        $('.sidenav__nav').append(
            $('<li>', {}).append(
                $('<a>', { href: '#' + id }).text(text)
            )
        );

        i++;
    });
})(jQuery);
