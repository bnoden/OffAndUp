Cross-browser UI/UX extension for OfferUp.com  
*Chrome: https://chrome.google.com/webstore/detail/offandup/kaihmhnjmocmppfgkpofegmccjfblbik*  
*Firefox: https://addons.mozilla.org/en-US/firefox/addon/offandup/*  
  
*For the Microsoft Edge version, see the readme file in the `_edge` folder.*  
  
I've been a regular buyer and seller on OfferUp.com for years now. I started OffAndUp  
in an attempt to improve the UI/UX on the website for PC, for personal use.  

Any feedback, ideas, or requests to expand or improve this will be thoughtfully considered.  

#### `extendui.min.js`  
This minified file contains the combined functionality of all the other modules and,  
at this point, is the only necessary JS file.  

This extension functions on the landing page, the query results page, and item and user  
profile pages (assuming the user has items for sale).
___  

##### `IgnoreSoldItems`  
Normally, when browsing listings, sold items are mixed in with other results.
So you see something you want, only to discover it's already sold!  
`IgnoreSoldItems` lowers the opacity of sold listings to 0.25, so you can still
see them, but aren't fooled by them. That's my preference, but of course it can easily
be adjusted programmatically. Later it will be a configurable user *option*.
___  

##### `ShowItemPage`  
This shows the item page without leaving the query results page.  Do this by moving  
the mouse cursor over the item image for 1.25 seconds (will be a configurable user  
*option*). Close item page and return to results page by clicking the 'close [x]' button  
OR by clicking the results page, which during this time will be covered by a light  
grayish blue tinted layer.  

A link is provided at the top of the item page, which when clicked, opens the page  
in a new tab.  
___  

##### Todo  
Add options  
Debug  
Solve bigger problems  
___  

<sup><sub><sup><sub>**Legal disclaimer:** This application does not collect any data or install hidden software, and there is absolutely no charge for its download or use. The author of this application and the accompanying documentation, Brandon R Oden (herein referred to as "bnoden") is in no way affiliated with OfferUp, Inc. (herein referenced as the "company") or any of its properties or interests<sup>1</sup>. </sub></sup></sub></sup>

<sup><sub><sub><sup>1. bnoden is a user of software and services provided by the company. The two parties have agreed to abide by the Terms of Service as stipulated within the contents of the publicly accessible web address, https://offerup.com/terms/. This agreement comprises the entirety of any existing relationship between the two parties, past or present, legal or otherwise, at any official capacity, as recognized by each party. Any party who shall acknowledge and provide sufficient evidence that they have read this disclaimer in its entirety shall be awarded three (3) gold stars upon a satisfactory evaluation of the merit of such acknowledgment and evidence thereby which in it shall be unequivocal by the standards, as yet undetermined, by the majority-controlling party, who therein shall make such acknowledgments at no time before and at no time beyond that which has been agreed upon as the official deadline, hitherto fore an agreement at such time as yet to be determined and albeit unlikely to reach such an agreement at such time and if it shall be recognized by any or all stake-holder(s) then said stake-holder(s) shall be compelled by the powers that be thusly to forfeit any and all future claims to any and all entitlement(s) of recompense, however negligible and forthwith shall eagerly issue an offering of mea culpa strictly under the most sincere terms imaginable by the court of law. This document shall not be treated as a legal document under any jurisdiction and shall be non-binding.</sup></sub></sub></sup>
