// ==UserScript==
// @name         Bard Speaks
// @namespace    http://geor9.com
// @version      0.1
// @description  Automatically play synthesized speech of Bards response. Requires Bard for Google extension https://chrome.google.com/webstore/detail/bard-for-google/hnadleianomnjcoeplifgbkiejchjmah
// @author       George
// @match        https://www.google.com/search?q=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
var synth = window.speechSynthesis;

// Chrome loads voices asynchronously.
window.speechSynthesis.onvoiceschanged = function(e) {
loadVoice();
};

function loadVoice() {
var voices = synth.getVoices();
var voice = voices.find(voice => voice.name === "Microsoft Steffan Online (Natural) - English (United States)");
var utterance = new SpeechSynthesisUtterance(document.getElementById("bard_section_div").innerText);
utterance.voice = voice;
utterance.rate = 6;
utterance.pitch = 1.1;
utterance.volume = 1;
synth.speak(utterance);
}

function checkTextLength() {
var textLength = document.getElementById("bard_section_div").innerText.length;
if (textLength >= 20) {
loadVoice();
}
}

var once = false;

setInterval(checkTextLength, 200);

function speak() {
if (!once) {
loadVoice();
once = true;
}
}
})();