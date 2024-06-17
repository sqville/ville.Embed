/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BuildingBank",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 5.87a.83.83 0 1 0 0-1.66.83.83 0 0 0 0 1.66Zm6 7.47V8h.1a.92.92 0 0 0 .52-1.67l-5.85-4.15a1.33 1.33 0 0 0-1.54 0L3.38 6.33A.92.92 0 0 0 3.9 8H4v5.34c-.6.38-1 1.06-1 1.83v1.33c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-1.33c0-.77-.4-1.45-1-1.83ZM9.8 3a.33.33 0 0 1 .4 0l5.63 4H4.17L9.8 3ZM15 8v5h-2V8h2ZM5 13V8h2v5H5Zm.17 1h9.66c.65 0 1.17.52 1.17 1.17V16H4v-.83c0-.65.52-1.17 1.17-1.17Zm4.33-1H8V8h1.5v5Zm1 0V8H12v5h-1.5Z",
    FILLED : "M9.23 2.18a1.33 1.33 0 0 1 1.54 0l5.85 4.15A.92.92 0 0 1 16.1 8H3.9a.92.92 0 0 1-.52-1.67l5.85-4.15Zm.77 3.7a.83.83 0 1 0 0-1.67.83.83 0 0 0 0 1.66ZM4.5 9v4h2V9h-2ZM3 16.17c0-1.2.97-2.17 2.17-2.17h9.66c1.2 0 2.17.97 2.17 2.17v.33a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-.33ZM15.5 9v4h-2V9h2Zm-3 0v4h-2V9h2Zm-3 0v4h-2V9h2Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
   */
  construct (size, color, iconstyle, title)
  {
   super();

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
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});