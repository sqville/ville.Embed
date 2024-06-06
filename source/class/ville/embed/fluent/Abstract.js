/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Chris Eskew (sqville) sqville@gmail.com
************************************************************************ */
 qx.Class.define("ville.embed.fluent.Abstract",
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

    title :
    {
      check : "String",
      init : "",
      transform: "_transformTitle",
      themeable : true
    }
  },

   members :
   {
    _htmlregular : null,

    _htmlfilled : null,
    
    pathit (pathd)
    {
      return `
       <path d="${pathd}"/>`
    },

    svgit (pathtags)
    {
      var viewbox = this.getViewBox();
      var title = this.getTitle();
      return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewbox}" fill="currentColor">${title}
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
    },

    // property apply
    _transformTitle(value, old) {
      value = `<title>${value}</title>`;   
      return value;
    }
   }
 });