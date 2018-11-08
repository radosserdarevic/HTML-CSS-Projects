$(function () {

    var $gallery = $('<div>').addClass('gallery');
    $body = $('body').append($gallery);

    var links = ['./images/download (1).jpg', './images/download (2).jpg', './images/download (3).jpg', './images/download (4).jpg', './images/download (5).jpg', './images/download (6).jpg'];
    var $image;

    for (var i = 0; i < links.length; i++) {

        $image = $('<img>').attr('src', links[i]);
        $image.css('width', (500 - 10) * Math.random() + 10 + 'px');

        $gallery.append($image);
    };

    var $title = $('<h2>').text('Amazing Gallery');
    $gallery.prepend($title);

    $('img').each(function (index, element) {

        if ($(element).width() < 300) {
            $(element).css('border', '2px solid green');
        } else {
            return false;
        };
    });

});