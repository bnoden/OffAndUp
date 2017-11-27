UI extensions for the PC version of OfferUp.com  

I've been a regular buyer and seller on OfferUp.com for years now. I started OfferUpUI  
in an attempt to improve the UI/UX on the website for PC, for personal use.  

Any ideas or requests to expand or improve this will be strongly considered.  

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
the mouse cursor over the item image for 1.25 seconds. Close item page and return  
to results page by clicking the 'close [x]' button OR by clicking the results page,  
which during this time will be covered by a light grayish blue tinted layer.  

A link is provided at the top of the item page, which when clicked, opens the page  
in a new tab.  
___  

##### Todo  
Publish for Chrome, Firefox, and if Edge behaves...! Then Edge, too.  
Look into publishing for other browsers.  
Add options  
Debug  
Solve bigger problems  
___  

<sub>This app does not collect any data or install hidden software, and there is absolutely no charge for its download or use.</sub>
