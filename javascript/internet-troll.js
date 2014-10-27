function insertGlyph() {
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).parent().find(".glyphicon, .glyphicon-chevron-right").removeClass("glyphicon, glyphicon-chevron-right").addClass("glyphicon glyphicon-chevron-down");
    }).on('hidden.bs.collapse', function () {
        $(this).parent().find(".glyphicon, .glyphicon-chevron-down").removeClass("glyphicon, glyphicon-chevron-down").addClass("glyphicon glyphicon-chevron-right");
    });
}