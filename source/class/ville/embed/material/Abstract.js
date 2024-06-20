/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.
   Authors:
     * Chris Eskew (sqville) chris.eskew@sqville.com
************************************************************************ */
 qx.Class.define("ville.embed.material.Abstract",
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
      init : "0 0 24 24",
      themeable : true
    },

    iconStyle :
    {
      check : ["filled", "outlined", "round", "twotone", "sharp"],
      init: "filled",
      apply: "_applyIconStyle",
      event: "changeIconStyle",
      nullable : true,
      themeable : true
    }
  },

   members :
   {
 
    _htmlfilled : null,

    _htmloutlined : null,

    _htmlround : null,

    _htmltwotone : null,

    _htmlsharp : null,

    _pathit (pathd)
    {
      if (Array.isArray(pathd))
        return pathd.map(this.__pathit).join("")
      else
        return this.__pathit(pathd)
    },

    _svgit (pathtags)
    {
      var viewbox = this.getViewBox();
      return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewbox}" fill="currentColor">
       ${pathtags}
      </svg>`
    },

    __pathit (pathd)
    {
      return `
       <path d="${pathd}"></path>`
    },

    // property apply
    _applyIconStyle(value, old) {
      switch (value) {
        case 'outlined':
          this.setHtml(this._htmloutlined);
          break;
        case 'round':
          this.setHtml(this._htmlround);
          break;
        case 'twotone':
          this.setHtml(this._htmltwotone);
          break;
        case 'sharp':
          this.setHtml(this._htmlsharp);
          break;
        case 'filled':
          this.setHtml(this._htmlfilled);
          break;
      }
      
      /*if (this._htmlregular != null) {
        if (value == "regular")
          this.setHtml(this._htmlregular);
        else if (value == "filled" & this._htmlfilled != null)
          this.setHtml(this._htmlfilled);
      }*/
    }
   }
 });