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
 
  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
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

    if (title != null)
      this.setTitle(title);

    //prep regular
    this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
    //prep filled
    this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
    
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
      init : "0 0 20 20",
      themeable : true
    },

    iconStyle :
    {
      check : ["regular", "filled", "outlined"],
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
    
    _pathit (pathd)
    {
      return `
       <path d="${pathd}"/>`
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
        case 'regular':
          this.setHtml(this._htmlregular);
          break;
        case 'filled':
          this.setHtml(this._htmlfilled);
          break;
        case 'outlined':
          this.setHtml(this._htmlregular);
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