// region Warning Box analyze
var userLang = navigator.language || navigator.userLanguage;

$(document).ready(function () {
    if (document.cookie.indexOf('education') === -1) {
        $("#WarningBox").modal('show');
        if (userLang === "ru-RU") {
            $("#WarningBox-header").html("Важная информация!");
            $("#WarningBox-body").html("<p>Данный проект создан исключительно в образовательных целях, и не может быть " +
                "использован в целях нарушающих законодательство, в корыстных целях или для получения какой-либо " +
                "выгоды как для самого автора так и лиц его использующих.</p>" +
                "<p>Автор данного проекта не несет " +
                "ответственности за любой возможный вред, причиненный материалами данного проекта.</p>");
            $("#WarningBox-footer").html("<h5>Вы будете использовать материалы этого проекта " +
                "только в образовательных целях?</h5>");
            $("#WarningBox-button-yes").html("Да");
            $("#WarningBox-button-no").html("Нет");
        }
    }
});

function CloseWarning() {
    document.cookie = "education = yes;secure";
}

function CloseWindow() {
    if (userLang === "ru-RU") {
        window.location.href = "https://www.google.com/search?q=наказание+за+киберпреступление";
    }
    else {
        window.location.href = "https://www.google.com/search?q=punishment+for+cybercrime";
    }
}
//endregion
