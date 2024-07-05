/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.
   Authors:
     * Chris Eskew (sqville) sqville@gmail.com
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
      check : ["filled", "outlined"],
      init: "filled",
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
 
    _htmlfilled : null,

    _htmloutlined : null,

    _pathit (pathd)
    {
      return `
       <path d="${pathd}"></path>`
    },

    _svgit (pathtags)
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
      switch (value) {
        case 'filled':
          this.setHtml(this._htmlfilled);
          break;
        case 'outlined':
          this.setHtml(this._htmloutlined);
          break;
      }
    },

    // property apply
    _transformTitle(value, old) {
      value = `<title>${value}</title>`;   
      return value;
    }
   }
 });