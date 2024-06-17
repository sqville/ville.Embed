/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BuildingBankToolbox",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9 5.87a.83.83 0 1 0 0-1.66.83.83 0 0 0 0 1.66ZM2.5 17H9v-1H3v-.83c0-.65.52-1.17 1.17-1.17H9v-.5c0-.56.19-1.08.5-1.5V8H11v3.05h.04A2.5 2.5 0 0 1 12 9.5V8h2v1h1V8h.1a.92.92 0 0 0 .52-1.67L9.77 2.18a1.33 1.33 0 0 0-1.54 0L2.38 6.33A.92.92 0 0 0 2.9 8H3v5.34c-.6.38-1 1.06-1 1.83v1.33c0 .28.22.5.5.5ZM8.8 3a.33.33 0 0 1 .4 0l5.63 4H3.17L8.8 3ZM4 13V8h2v5H4Zm4.5 0H7V8h1.5v5Zm3.5-1v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 1 0-1 0v.5h-3v-.5a.5.5 0 1 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 1 0 1 0V16h3v.5a.5.5 0 1 0 1 0V16Z",
    FILLED : "M8.23 2.18a1.33 1.33 0 0 1 1.54 0l5.85 4.15A.92.92 0 0 1 15.1 8H2.9a.92.92 0 0 1-.52-1.67l5.85-4.15ZM9 5.88A.83.83 0 1 0 9 4.2a.83.83 0 0 0 0 1.66ZM3.5 9v4h2V9h-2Zm.67 5C2.97 14 2 14.97 2 16.17v.33c0 .28.22.5.5.5H9v-3H4.17Zm7.33-4V9h-2v3c.37-.5.91-.84 1.54-.96.07-.38.23-.74.46-1.04Zm-3 3V9h-2v4h2Zm3.5-1v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 1 0 1 0V16h3v.5a.5.5 0 1 0 1 0V16Z"
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