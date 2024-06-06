/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.
   Authors:
     * Chris Eskew (sqville) sqville@gmail.com
************************************************************************ */
 qx.Class.define("ville.embed.carbon.Abstract",
 {
  type: "abstract", 
  
  extend : qx.ui.embed.Html,
 
  construct ()
  {
    super();
    this.setAllowStretchX(false);
    this.setAllowStretchY(false);
  },

  properties :
  {
    viewBox :
    {
      check : "String",
      init : "0 0 32 32",
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
    }
  },

   members :
   {
    _htmlregular : null,

    _htmlfilled : null,
    
    pathit (pathd)
    {
      return pathd.map(this._pathit).join("")
    },

    svgit (pathtags)
    {
      var viewbox = this.getViewBox();
      return `
      <svg viewBox="${viewbox}" fill="currentColor">
       ${pathtags}
      </svg>`
    },

    // property apply
    _applyIconStyle(value, old) 
    {
      if (this._htmlregular != null) {
        if (value == "regular")
          this.setHtml(this._htmlregular);
        else if (value == "filled" && this._htmlfilled != null)
          this.setHtml(this._htmlfilled);
      }
    },

    _pathit (pathd)
    {
      return `
       <path d="${pathd}"></path>`
    }
   }
 });