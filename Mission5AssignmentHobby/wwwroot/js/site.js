// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
function CalculateTotal() {
    var hours = $('#hours').val();
    var rate = 100;

    if (hours <= 0 || isNaN(hours)) {
        alert("Please enter a valid positive number of hours.");
        return;
    }

    var total = hours * rate;

    $('#result').html("Total Price: $" + total);
}