/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LaptopDismiss",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10.98 6H15a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1.2c-.35-.1-.68-.24-1-.4V12c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4.02a5.59 5.59 0 0 1 0 1ZM2.5 15a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Zm3-5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm1.85-6.35c.2.2.2.5 0 .7L6.21 5.5l1.14 1.15a.5.5 0 1 1-.7.7L5.5 6.21 4.35 7.35a.5.5 0 1 1-.7-.7L4.79 5.5 3.65 4.35a.5.5 0 1 1 .7-.7L5.5 4.79l1.15-1.14c.2-.2.5-.2.7 0Z",
    FILLED : "M11 5.5a5.5 5.5 0 0 1-8 4.9v2.1c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5h-4.52l.02.5Zm-9 10c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5ZM5.5 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm1.85-6.35c.2.2.2.5 0 .7L6.21 5.5l1.14 1.15a.5.5 0 1 1-.7.7L5.5 6.21 4.35 7.35a.5.5 0 1 1-.7-.7L4.79 5.5 3.65 4.35a.5.5 0 1 1 .7-.7L5.5 4.79l1.15-1.14c.2-.2.5-.2.7 0Z"
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