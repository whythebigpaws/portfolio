$('[data-switch]').on('click', function (e) {
    var $page = $('#page-2'),
        blockToShow = e.currentTarget.getAttribute('data-switch');
    $page.children().hide();
    $page.children(blockToShow).show();
});
