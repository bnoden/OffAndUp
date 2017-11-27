UI extensions for PC version of OfferUp.com  

#### `extendui.min.js`  
This minified file contains the combined functionality of all the other components and,  
at this point, is the only necessary JS file.  

This extension functions on the landing page, the query results page, and item and user  
profile pages (assuming the user has multiple items for sale).
___  

##### `IgnoreSoldItems`   
When browsing listings, sold items are mixed in with other results.
This can be frustrating when you see something you want, only to discover it's already
sold.  `IgnoreSoldItems` lowers the opacity of sold listings to 0.25, so you can still
see them, but aren't fooled by them. That's my preference, but of course it can easily
be adjusted.  
___  

##### `PreviewListing`  
At this point, `ShowListing` would be a more accurate title, because it
shows the whole item page. Still debating whether to make it more preview-like or
change the name. This shows the item page without leaving the query results page.
Do this by moving the mouse cursor over the item image for 1.25 seconds. Close item  
page and return to results page by clicking the 'close [x]' button OR by clicking  
the results page, which during this time will be covered by a tinted layer.  

A link is provided at the top, which when clicked, opens the page in a new tab.  
