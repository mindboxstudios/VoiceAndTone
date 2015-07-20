/*
 * Active
 */

(function($) {
    var remember = {};

    function inViewPort (element_rect) {
        return(
            element_rect.top    >= 0 &&
            element_rect.left   >= 0 &&
            element_rect.bottom <= $(this).height() &&
            element_rect.right  <= $(this).width()
        )
    }

    function addIdClass (id, type) {
        if(type == 'add') {
            return($('a[href="#' + id + '"]').addClass('active'));
        }
        else {
            return($('a[href="#' + id + '"]').removeClass('active'));
        }
    }

    $(window).on('DOMContentLoaded load resize scroll', function() {

        var item_showing = null;

        $('.main h1, .main h2').each(function (element, i) {
            var element = $(this)[0],
                rect = element.getBoundingClientRect(),
                id   = $(this).attr('id');

            var in_view = inViewPort(rect);

            if(in_view && item_showing == null) {
                addIdClass(id, 'add');
                item_showing = true;
                remember.id = id;
            }
            else if(remember.id == id) {
                addIdClass(id, 'add');
            }
            else {
                addIdClass(id, 'remove');
            }
        });

    });
})(jQuery);
