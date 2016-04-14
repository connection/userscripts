// ==UserScript==
// @name         Themeforce
// @namespace    http://blacksunhackers.club
// @version      1.0
// @description  My default Google Sites theme sucks. I'm gonna make it less suck.
// @author       Luis "noncetonic" Santana
// @match        https://sites.google.com/a/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==
​
// Don't mess with this unless we are modifying the main template
​
var style = {
    "h2": {
        "color": "rgb(230, 145, 56)"
    },
    "h3": {
        "color": "#b45f06"
    },
    "h4": {
        "color": "#f9cb9c"
    },
    "i": {
        "color": "#6fa8dc"
    },
    "b": {
        "color": "#f6b26b"
    }
};
​
$(function() {
    'use strict';
​
    // Store a copy of our current document in variable 'html'
    var html = $('#sites-tile-name-content-1-editing-editable-content').html();
    // Let's set a 2 second check on the page
    setInterval(function(){
        // If there is a change between current and previous doucment
        if($('#sites-tile-name-content-1-editing-editable-content').html() != html) {
            // Update h2, h3, h4, i, and b tags
            $('#sites-tile-name-content-1-editing-editable-content h2').css(style.h2);
            $('#sites-tile-name-content-1-editing-editable-content h3').css(style.h3);
            $('#sites-tile-name-content-1-editing-editable-content h4').css(style.h4);
            $('#sites-tile-name-content-1-editing-editable-content i').css(style.i);
            $('#sites-tile-name-content-1-editing-editable-content b').css(style.b);
            // Update 'html' variable
            html = $('#sites-tile-name-content-1-editing-editable-content').html();
        }
    }, 2000);
});
