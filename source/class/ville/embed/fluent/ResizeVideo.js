/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ResizeVideo",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5 2a3 3 0 0 0-3 3v3.5a.5.5 0 0 0 1 0V5c0-1.1.9-2 2-2h3.5a.5.5 0 0 0 0-1H5Zm6.5 0a.5.5 0 0 0 0 1H15a2 2 0 0 1 2 2v3.5a.5.5 0 0 0 1 0V5a3 3 0 0 0-3-3h-3.5Zm6.5 9.5a.5.5 0 0 0-1 0V15a2 2 0 0 1-2 2h-3.5a.5.5 0 0 0 0 1H15a3 3 0 0 0 3-3v-3.5ZM3.5 10A2.5 2.5 0 0 0 1 12.5v4A2.5 2.5 0 0 0 3.5 19h4a2.5 2.5 0 0 0 2.5-2.5v-4A2.5 2.5 0 0 0 7.5 10h-4Zm.72 2.55 3 1.5a.5.5 0 0 1 0 .9l-3 1.5A.5.5 0 0 1 3.5 16v-3a.5.5 0 0 1 .72-.45Z",
    FILLED : "M5.25 2A3.25 3.25 0 0 0 2 5.25v3a.75.75 0 0 0 1.5 0v-3c0-.97.78-1.75 1.75-1.75h3a.75.75 0 0 0 0-1.5h-3Zm6.5 0a.75.75 0 0 0 0 1.5h3c.97 0 1.75.78 1.75 1.75v3a.75.75 0 0 0 1.5 0v-3C18 3.45 16.54 2 14.75 2h-3ZM18 11.75a.75.75 0 0 0-1.5 0v3c0 .97-.78 1.75-1.75 1.75h-3a.75.75 0 0 0 0 1.5h3c1.8 0 3.25-1.46 3.25-3.25v-3ZM3.5 10h4a2.5 2.5 0 0 1 2.5 2.5v4A2.5 2.5 0 0 1 7.5 19h-4A2.5 2.5 0 0 1 1 16.5v-4A2.5 2.5 0 0 1 3.5 10Zm.72 2.55a.5.5 0 0 0-.72.45v3a.5.5 0 0 0 .72.45l3-1.5a.5.5 0 0 0 0-.9l-3-1.5Z"
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