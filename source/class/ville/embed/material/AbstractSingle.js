/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.
   Authors:
     * Chris Eskew (sqville) sqville@gmail.com
************************************************************************ */
 qx.Class.define("ville.embed.material.AbstractSingle",
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
   * @param title {String} If included, adds a title tag to the svg root tag. 
   */
  construct (size, color, title)
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
   
   //prep icon markup
   this.setHtml(this._svgit(this._pathit(this.constructor.PATH)));
 },

  properties :
  {
    viewBox :
    {
      check : "String",
      init : "0 0 24 24",
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
    /**
     * Create and return the path tag for the svg embed
     *
     * @param {string} pathd - Path value from the embed object's static value
     * @return {string} svg path tag with one d attribute populated
     */
    _pathit (pathd)
    {
      return `
       <path d="${pathd}"></path>`
    },

    /**
     * Create and return the fully formed svg tag for the embed
     *
     * @param {string} pathtags - Path value from the embed object's static value
     * @return {string} a fully formed svg embed
     */
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
    _transformTitle(value, old) {
      value = `<title>${value}</title>`;   
      return value;
    }
   }
 });