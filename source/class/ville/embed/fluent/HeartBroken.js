/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HeartBroken",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m16.74 10.5-6.24 6.3a.66.66 0 0 1-.95 0l-6.27-6.34a4.4 4.4 0 0 1-.02-6.19 4.3 4.3 0 0 1 6.13.02l.6.61.06-.06.54-.54.1-.1a4.3 4.3 0 0 1 6.03.11 4.4 4.4 0 0 1 .02 6.19Zm-5.76-5.18-.03.03-.2.2-.4.41a.5.5 0 0 1-.05.04l-1 1 2.32 2.31c.2.2.2.52 0 .71l-2 2a.5.5 0 0 1-.7-.7l1.64-1.65-2.31-2.32a.5.5 0 0 1 0-.7L9.29 5.6l-.61-.62a3.3 3.3 0 0 0-4.7-.01 3.4 3.4 0 0 0 0 4.78l6.05 6.1 6-6.06A3.4 3.4 0 0 0 16 5.02 3.3 3.3 0 0 0 11.3 5l-.32.32Z",
    FILLED : "M9.27 4.18a4.3 4.3 0 0 0-6 .1 4.4 4.4 0 0 0 0 6.18l6.28 6.34c.26.27.69.27.95 0l6.24-6.3a4.4 4.4 0 0 0-.02-6.19 4.3 4.3 0 0 0-6.13-.01l-.59.59-1.34 2.06 3 2.53a.5.5 0 0 1 .03.73l-2 2a.5.5 0 1 1-.71-.7l1.62-1.62-2.92-2.46a.5.5 0 0 1-.1-.66l1.7-2.6Z"
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