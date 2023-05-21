# Bard Speaks
 Automatic speech synthesis for Bard.

 ## Usage
 
 It automatically plays the speech synthesis as soon as Bard loads a text answer.

 It requires the [Bard for Google](https://chrome.google.com/webstore/detail/bard-for-google/hnadleianomnjcoeplifgbkiejchjmah) and [Tampermonkey](https://www.tampermonkey.net/) browser extensions.

 ## Recommended further work for the user, if they want to go all out
 
I use the MacBook dictate key to talk to the AI. I press and hold the key to speak and release it when done. My speech is transcribed into text using OpenAI Whisper API and searched on Google in an Edge browser background tab. The results are spoken by Bard. I use BetterTouchTool for a hotkey, Apple Shortcuts to connect to OpenAI, and a Background Tab extension to keep search results in the background. It’s all automatic and seamless, like using an intercom for the AI.

Links to the tools I use:

- [BetterTouchtool](https://folivora.ai/) to remap a KeyDown and KeyUp to record a sound clip
- [Whisper Shortcut](https://giacomomelzi.com/transcribe-audio-messages-iphone-ai/) to use OpenAI Whisper speech recognition (it is leagues more accurate than Google/Siri/Alexa)
- [Force Background Tab - Chrome Web Store](https://chrome.google.com/webstore/detail/force-background-tab/gidlfommnbibbmegmgajdbikelkdcmcl)