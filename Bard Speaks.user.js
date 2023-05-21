// ==UserScript==
// @name         Bard Speaks
// @namespace    http://geor9.com
// @version      0.1
// @description  Automatically play synthesized speech of Bards response. Requires Bard for Google extension https://chrome.google.com/webstore/detail/bard-for-google/hnadleianomnjcoeplifgbkiejchjmah . You'll need to delete *bardo=1* from the URL match line if you want it to run by default.
// @author       George
// @match        https://www.google.com/search?*bardo=1*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

var synth = window.speechSynthesis;

// Chrome loads voices asynchronously.
window.speechSynthesis.onvoiceschanged = function(e) {
setInterval(checkTextLength, 200);
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

//speak one time only (rather than again at setInterval)
var once = false;

//wait for bard response of at least 2 characters
function checkTextLength() {
var textLength = document.getElementById("bard_section_div").innerText.length;
if (textLength >= 2 && !once) {
loadVoice();
once = true; }}
}

)();