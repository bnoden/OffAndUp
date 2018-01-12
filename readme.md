**For Chrome:** https://chrome.google.com/webstore/detail/offandup/kaihmhnjmocmppfgkpofegmccjfblbik  
**For Firefox:** https://addons.mozilla.org/en-US/firefox/addon/offandup/  

*For the Microsoft Edge version, see the readme file in the [`oau_edge` folder](https://github.com/bnoden/OffAndUp/tree/master/oau_edge).*  

I've been a regular buyer and seller on OfferUp.com for years now. I started OffAndUp  
(originally OfferUpUI) in an attempt to improve the UI/UX on the website for PC, for personal use.  

Any feedback, ideas, or requests to expand or improve this will be thoughtfully considered.  

#### `extendui.min.js`  
This minified file is, at this point, the only necessary JS file.  

This extension functions on the landing page, the query results page, and item and user  
profile pages (assuming the user has items for sale).
___  

##### `IdentifySoldItems`  
Normally, when browsing listings, sold items are mixed in with other results.
So you see something you want, only to discover it's already sold!  
`IdentifySoldItems` lowers the opacity of sold listings to 0.25, so you can still
see them, but aren't fooled by them. That's my preference, but of course it can easily
be adjusted programmatically. Later it will be a configurable user *option*.
___  

##### `ItemContainer`  
This shows the item page without leaving the query results page.  Do this by clicking    
the item picture. Close item page and return to results page by clicking the 'close [x]' button  
OR by clicking the results page, which during this time will be covered by a light  
grayish blue tinted layer.  

A link is provided at the top of the item page, which when clicked, opens the page  
in a new tab.  
___  
 JavaScript modules are bundled for the browser with [Browserify](https://github.com/browserify/browserify), a cli package requiring global install.  
 
___  
### Changelog  

### [0.0.7] - 2017-12-25  
#### Changed  
- Improve speed and reliability by:
 1. Replacing scroll listeners with setIntervals
 2. Refactoring for more compact, DRY code

- Improve usability by opening the itemFrame with a click instead of a hover  
- Update styles  
___  

##### Todo  
Add options  
Debug  
Solve bigger problems  
