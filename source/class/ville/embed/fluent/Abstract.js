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
 * NOTE: None
 *
 */
 qx.Class.define("ville.embed.fluent.Abstract",
 {
  type: "abstract", 
  
  extend : qx.ui.embed.Html,
 
  construct ()
  {
    super();
  },

  properties :
  {
    // overridden
    appearance: 
    {
      refine: true,
      init: "icon"
    },
    
    viewBox :
    {
      check : "String",
      init : "0 0 20 20",
      themeable : true
    },

    iconStyle :
    {
      check : ["regular", "filled"],
      init: "regular",
      apply: "_applyIconStyle",
      event: "changeIconStyle",
      nullable : true,
      themeable : true
    },
  	
  },

   members :
   {
    _htmlregular : null,

    _htmlfilled : null,
    
    pathit (pathd)
    {
      return `
       <path d="${pathd}"></path>`
    },

    svgit (pathtags)
    {
      var viewbox = this.getViewBox();
      return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewbox}" fill="currentColor">
       ${pathtags}
      </svg>`
    },

    // property apply
    _applyIconStyle(value, old) {
      if (this._htmlregular != null) {
        if (value == "regular")
          this.setHtml(this._htmlregular);
        else if (value == "filled" & this._htmlfilled != null)
          this.setHtml(this._htmlfilled);
      }
    }
   }
 });