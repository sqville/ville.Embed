/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MailCopy",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 5.5A2.5 2.5 0 0 1 6.5 3h9A2.5 2.5 0 0 1 18 5.5v7a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 4 12.5v-7Zm6.75 4.43L5 6.96v5.54c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V6.96l-5.75 2.97-.08.04a.5.5 0 0 1-.42-.04ZM15.5 4h-9C5.67 4 5 4.67 5 5.5v.3l6 3.12 6-3.12v-.3c0-.83-.67-1.5-1.5-1.5Zm-2 13c.82 0 1.54-.4 2-1h-9A3.5 3.5 0 0 1 3 12.5v-7c-.6.46-1 1.18-1 2v5A4.5 4.5 0 0 0 6.5 17h7Z",
    FILLED : "M4 12.5V6.37l6.75 3.56c.15.1.35.1.5 0L18 6.37v6.13a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 4 12.5Zm.02-7.28A2.5 2.5 0 0 1 6.5 3h9a2.5 2.5 0 0 1 2.48 2.22L11 8.92l-6.98-3.7ZM13.5 17c.82 0 1.54-.4 2-1h-9A3.5 3.5 0 0 1 3 12.5v-7c-.6.46-1 1.18-1 2v5A4.5 4.5 0 0 0 6.5 17h7Z"
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