# Bard Speaks
 Speech synthesis automatically plays for bard output. Requires [Bard for Google](https://chrome.google.com/webstore/detail/bard-for-google/hnadleianomnjcoeplifgbkiejchjmah) browser extension.

 It would be easy to modify to work on the normal Bard website too, but I prefer the extension.

 ## Usage
 
 It automatically plays the speech synthesis at full volume as soon as Bard loads a text answer.

 ## Recommended further work for the user, if they want to go all out
 
 currently use a MacBook dictate key to communicate with an AI. I hold down the key to start speaking, and then release it when I am finished. The key uses the OpenAI Whisper API to transcribe my speech into text, which is then passed to a Google search in an Edge browser background tab. The search results are then spoken aloud by Bard. I use BetterTouchTool to create a hotkey for the dictate key, Apple Shortcuts to communicate with the OpenAI servers, and the Background Tab extension to keep the Google search results in the background. This process is all seamless and automatic, as though the MacBook dictate key is a working intercom for the AI.