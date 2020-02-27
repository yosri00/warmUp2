function new_element() {
        $("#header ul").append('<li>Java</li>');
}
$(document).ready(function () {
        $("#hide").click(function () {
                $("p").hide();
        });
        $("#show").click(function () {
                $("p").show();
        });
});