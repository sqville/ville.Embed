/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TabDesktopArrowLeft",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-4.1c.16-.32.3-.65.4-1h3.7c.82 0 1.5-.67 1.5-1.5V7H9.5A1.5 1.5 0 0 1 8 5.5V4H5.5C4.67 4 4 4.67 4 5.5v3.7c-.35.1-.69.24-1 .4V5.5ZM16 6v-.5c0-.83-.68-1.5-1.5-1.5H9v1.5c0 .28.22.5.5.5H16Zm-6 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-6.85-.35a.5.5 0 0 0-.15.35.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L4.71 15H7.5a.5.5 0 0 0 0-1H4.7l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2Z",
    FILLED : "M5.5 3A2.5 2.5 0 0 0 3 5.5v4.1a5.5 5.5 0 0 1 7.4 7.4h4.1a2.5 2.5 0 0 0 2.5-2.5V7H9.5A1.5 1.5 0 0 1 8 5.5V3H5.5ZM9 3v2.5c0 .28.22.5.5.5H17v-.5A2.5 2.5 0 0 0 14.5 3H9Zm1 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-6.85-.35a.5.5 0 0 0-.15.35.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L4.71 15H7.5a.5.5 0 0 0 0-1H4.7l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2Z"
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