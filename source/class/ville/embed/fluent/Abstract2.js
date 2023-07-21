/* ************************************************************************

   SQville

   Authors:
     * Chris Eskew (sqville) sqville@gmail.com

************************************************************************ */

 qx.Class.define("ville.embed.fluent.Abstract2",
 {
   extend : qx.ui.embed.Html,
 
   construct ()
   {
    super();
   },

   members :
   {
    pathit (pathd)
    {
      return `
       <path d="${pathd}"></path>`
    },

    svgit (pathtags)
    {
      return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
       ${pathtags}
      </svg>`
    }
   }
 });