/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PhoneChat",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9.42 17H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5.02a5.57 5.57 0 0 1 1 0V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h2.12l.3-1Zm5.08 2a4.5 4.5 0 1 0-3.94-2.32l-.54 1.8c-.1.3.2.6.5.5l1.8-.54c.64.36 1.39.56 2.18.56ZM12 13.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1h-2Z",
    FILLED : "M6.5 2C5.67 2 5 2.67 5 3.5v13c0 .83.67 1.5 1.5 1.5h2.62l.37-1.23A5.48 5.48 0 0 1 15 9.02V3.5c0-.83-.67-1.5-1.5-1.5h-7Zm8 17a4.5 4.5 0 1 0-3.94-2.32l-.54 1.8c-.1.3.2.6.5.5l1.8-.54c.64.36 1.39.56 2.18.56ZM12 13.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1h-2Z"
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