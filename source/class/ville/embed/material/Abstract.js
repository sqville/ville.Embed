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

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"filled"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
   */
  construct (size, color, iconstyle, title)
  {
   super();

   this.setAllowStretchX(false);
   this.setAllowStretchY(false);

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);
   
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   //prep outlined
   this._htmloutlined = this._svgit(this._pathit(this.constructor.OUTLINED));
   
   
   if (iconstyle != null)
    this.setIconStyle(iconstyle);
   else
    this.initIconStyle();
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