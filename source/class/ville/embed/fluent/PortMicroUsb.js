/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PortMicroUsb",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.43 8.3c.26-.2.58-.3.9-.3h5.34c.32 0 .64.1.9.3l1.33 1A1.5 1.5 0 0 1 14 12H6a1.5 1.5 0 0 1-.9-2.7l1.33-1Zm.9.7a.5.5 0 0 0-.3.1l-1.33 1a.5.5 0 0 0 .3.9h8a.5.5 0 0 0 .3-.9l-1.33-1a.5.5 0 0 0-.3-.1H7.33Z",
    FILLED : "M6.43 8.3c.26-.2.58-.3.9-.3h5.34c.32 0 .64.1.9.3l1.33 1A1.5 1.5 0 0 1 14 12H6a1.5 1.5 0 0 1-.9-2.7l1.33-1Z"
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