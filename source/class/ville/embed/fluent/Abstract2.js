/* ************************************************************************

   Ville Software (SQville)

   Copyright: 2021 sqville

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Chris Eskew (sqville) chris.eskew@sqville.com

************************************************************************ */

/**
 * NOTE: Instances of this class must be disposed of after use
 *
 */
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" fill="currentColor">
       ${pathtags}
      </svg>`
    }
   }
 });