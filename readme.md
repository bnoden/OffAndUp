**Note:** This information needs to be updated, due to a recent, drastic restructuring. See Changelog below.  

**For Chrome:** https://chrome.google.com/webstore/detail/offandup/kaihmhnjmocmppfgkpofegmccjfblbik  
**For Firefox:** https://addons.mozilla.org/en-US/firefox/addon/offandup/  

*For the Microsoft Edge version, see the readme file in the [`oau_edge` folder](https://github.com/bnoden/OffAndUp/tree/master/oau_edge).*  

OffAndUp (originally OfferUpUI, Google rejected the name) is an attempt to improve the UI/UX
for OfferUp.com on the PC.  

Any feedback, ideas, or requests to expand or improve this will be thoughtfully considered.  

#### `oau.min.js`  
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
JavaScript modules are bundled for the browser with [Browserify](https://github.com/browserify/browserify).  
To access the cli, it should be installed globally. (`npm install -g browserify`)  

`gulp-cli` should also be installed globally for the same reasons. (`npm install -g gulp-cli`)  
  
`gulpfile.js` takes care of mundane tasks, such as:  
* `gulp change`: change version number in all `manifest.json` files and `package.json`  
* `gulp bundle`: bundle main source files with `browserify`, send to `dist/oau.js`
* `gulp min`: minify `oau.js`, creating `oau.min.js`
* `gulp zip`: files are added to `.zip` archive for distribution as required by Chrome Web Store and Firefox Add-ons.  
                Deletes previous `.zip` files. Must `change` version number first (lest I forget).  
                Zip file names are exactly the version number + '.zip' (ie, `1.1.1.zip`) and placed in a folder  
                named 'zip' for each browser. Zip file contents vary slightly between browsers.  

___  
### Changelog  

### [1.1.1] - 2018-01-16  
#### Changed  
- Everything
  1. Project converted from pure JavaScript to modular Node.js app
  2. Starting to automate tedious tasks with Gulp.
  3. Code refactored to drastically reduce the frequency of DOM manipulation.

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
