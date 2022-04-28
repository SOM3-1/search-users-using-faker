# search-users-using-faker
## To resolve issues
- Force download the dependencies (npm install something --force)
- semantic ui has some issue with webpack so here is a workaround
- npm install --dev @semantic-ui-react/css-patch
- add this in scripts
```
{
 "scripts": {
   "postinstall": "semantic-ui-css-patch"
 }
}
```
