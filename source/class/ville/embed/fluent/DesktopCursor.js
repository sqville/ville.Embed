/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DesktopCursor",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 2a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h3v2H5.5a.5.5 0 0 0 0 1H11v-1H8v-2h3v-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8.84l.87.87A2 2 0 0 0 18 13V4a2 2 0 0 0-2-2H4Zm8.86 8.15a.5.5 0 0 0-.86.35v8a.5.5 0 0 0 .9.3l2-2.65 3.5.78a.5.5 0 0 0 .45-.84l-6-5.94Z",
    FILLED : "M3.5 2C2.67 2 2 2.67 2 3.5v10c0 .83.67 1.5 1.5 1.5H7v2H5.5a.5.5 0 0 0 0 1H11v-1H8v-2h3v-4.5a1.5 1.5 0 0 1 2.56-1.07l4.4 4.37c.03-.1.04-.2.04-.3v-10c0-.83-.67-1.5-1.5-1.5h-13Zm9.36 8.14a.5.5 0 0 0-.86.36v8a.5.5 0 0 0 .9.3l2-2.65 3.5.78a.5.5 0 0 0 .45-.84l-6-5.95Z"
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