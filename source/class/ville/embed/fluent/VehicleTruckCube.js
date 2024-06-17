/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VehicleTruckCube",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M1.5 7.88V4.12a1 1 0 0 1 .55-.9l3-1.5a1 1 0 0 1 .9 0l3 1.5a1 1 0 0 1 .55.9v3.76a1 1 0 0 1-.55.9l-3 1.5a1 1 0 0 1-.9 0l-3-1.5a1 1 0 0 1-.55-.9Zm1.04-3.57a.5.5 0 0 0 .27.65L5 5.9V8.5a.5.5 0 1 0 1 0V5.89l2.2-.93a.5.5 0 0 0-.4-.92l-2.3.97-2.3-.97a.5.5 0 0 0-.66.27Zm-.5 9.94V9.89l1 .5v3.86c0 .41.34.75.75.75h.26a2.5 2.5 0 0 1 4.9 0h1.1A2.5 2.5 0 0 1 13 13.05v-8.3a.75.75 0 0 0-.75-.75H10.5a2 2 0 0 0-.34-1h2.1c.96 0 1.74.78 1.74 1.75V6h.88c.57 0 1.09.32 1.34.83l1.62 3.24c.1.2.16.43.16.67v3.76c0 .83-.67 1.5-1.5 1.5h-1.55a2.5 2.5 0 0 1-4.9 0h-1.1a2.5 2.5 0 0 1-4.9 0H3.8c-.96 0-1.75-.78-1.75-1.75Zm12.91.75h1.55a.5.5 0 0 0 .5-.5V11h-3v2.5c.48.36.83.89.95 1.5Zm1.74-5-1.36-2.72a.5.5 0 0 0-.45-.28H14v3h2.7ZM5 15.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm7.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
    FILLED : "M2.04 9.89v4.36c0 .97.79 1.75 1.75 1.75h.26a2.5 2.5 0 0 0 4.9 0h1.1a2.5 2.5 0 0 0 4.9 0h1.55c.83 0 1.5-.67 1.5-1.5v-3.76c0-.24-.05-.47-.16-.67l-1.62-3.24A1.5 1.5 0 0 0 14.88 6H14V4.75C14 3.78 13.22 3 12.25 3h-2.1a2 2 0 0 1 .35 1.12v3.76a2 2 0 0 1-1.1 1.8l-3 1.5a2 2 0 0 1-1.8 0l-2.56-1.3ZM14 7h.88c.2 0 .36.1.45.28L16.69 10H14V7Zm-7.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.5 1.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM1.5 4.12v3.76a1 1 0 0 0 .55.9l3 1.5a1 1 0 0 0 .9 0l3-1.5a1 1 0 0 0 .55-.9V4.12a1 1 0 0 0-.55-.9l-3-1.5a1 1 0 0 0-.9 0l-3 1.5a1 1 0 0 0-.55.9Zm1.7-.08 2.3.97 2.3-.97a.5.5 0 0 1 .4.92L6 5.9V8.5a.5.5 0 1 1-1 0V5.89l-2.2-.93a.5.5 0 1 1 .4-.92Z"
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