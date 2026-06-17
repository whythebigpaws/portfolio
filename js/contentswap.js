$('[data-switch]').on('click', function (e) {
    var $page = $('#content'),
        blockToShow = e.currentTarget.getAttribute('data-switch');
    $page.children().hide();
    $page.children(blockToShow).show();
});
