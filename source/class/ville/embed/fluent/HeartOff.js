/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HeartOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.85 2.15a.5.5 0 1 0-.7.7l1.27 1.27a4.4 4.4 0 0 0-.14 6.34l6.27 6.34c.26.27.69.27.95 0L13.28 14l3.87 3.86a.5.5 0 0 0 .7-.7l-15-15Zm9.73 11.13-2.55 2.58-6.04-6.1a3.4 3.4 0 0 1 .14-4.93l8.45 8.45Zm3.45-3.48-2.05 2.06.71.7 2.05-2.06a4.4 4.4 0 0 0-.02-6.19 4.3 4.3 0 0 0-6.13-.01l-.6.6-.6-.61a4.32 4.32 0 0 0-4.14-1.16l.88.88c.91-.06 1.84.27 2.55.98l.96.97c.2.2.51.2.7 0L11.3 5a3.3 3.3 0 0 1 4.71.02 3.4 3.4 0 0 1 .02 4.78Z",
    FILLED : "M2.85 2.15a.5.5 0 1 0-.7.7l1.27 1.27a4.4 4.4 0 0 0-.14 6.34l6.27 6.34c.26.27.69.27.95 0L13.28 14l3.87 3.86a.5.5 0 0 0 .7-.7l-15-15Zm13.9 8.35-2.06 2.07-9.44-9.44A4.32 4.32 0 0 1 9.4 4.3l.6.61.6-.6a4.3 4.3 0 0 1 6.13.01 4.4 4.4 0 0 1 .02 6.19Z"
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