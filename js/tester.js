/*
 Responsive Web Design Tester
 Copyright (C) 2014  Luis Enrique Arriojas Catalini

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as
 published by the Free Software Foundation, either version 3 of the
 License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

$("#urlButton").click(function () {
    var urlText = $("#urlText").val();
    $("#webContent").attr('src', urlText);
});

$("#urlText").keypress(function (e) {
    if (e.which == 13) {
        var urlText = $(this).val();
        $("#webContent").attr('src', urlText);
    }
});

$("#modifyButton").click(function () {
    modifyScreen();
});

$(".dimension").click(function () {
    var width = $(this).attr("data-width");
    var height = $(this).attr("data-height");
    $("#width").val(width);
    $("#height").val(height);
    modifyScreen();
});

$("#rotateButton").click(function () {
    var width = $("#width").val();
    var height = $("#height").val();

    $("#width").val(height);
    $("#height").val(width);
    modifyScreen();
});

function modifyScreen() {
    var width = $("#width").val();
    var height = $("#height").val();
    $("#webContent").css('width', width);
    $("#webContent").css('height', height);
    sideReset();
};

$("#refreshButton").click(function () {
    var url = $("#webContent").attr('src');
    $("#webContent").attr('src', url);
    sideReset();
});