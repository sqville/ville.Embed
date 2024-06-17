/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LocationLive",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.53 3.01 9 3a7 7 0 0 1 6.98 7.47.5.5 0 1 0 1 .07L17 10A8 8 0 0 0 8.46 2a.5.5 0 1 0 .07 1ZM8 4.98a.5.5 0 0 1 .52-.47 6.25 6.25 0 0 1 5.97 5.97.5.5 0 1 1-1 .04A5.25 5.25 0 0 0 8.49 5.5.5.5 0 0 1 8 4.98Zm-.5 7.64a1.13 1.13 0 1 0 0-2.25 1.13 1.13 0 0 0 0 2.25Zm-3.18 2.06 2.83 2.83a.5.5 0 0 0 .7 0l2.83-2.83a4.5 4.5 0 1 0-6.36 0Zm.7-.7a3.5 3.5 0 1 1 4.95 0L7.5 16.44l-2.47-2.48Z",
    FILLED : "M8.53 3.01 9 3a7 7 0 0 1 6.98 7.47.5.5 0 1 0 1 .07L17 10A8 8 0 0 0 8.46 2a.5.5 0 1 0 .07 1ZM8 4.98a.5.5 0 0 1 .52-.47 6.25 6.25 0 0 1 5.97 5.97.5.5 0 1 1-1 .04A5.25 5.25 0 0 0 8.49 5.5.5.5 0 0 1 8 4.98ZM6.04 16.4l1.1 1.1c.2.2.52.2.71 0L9 16.37l1.7-1.69a4.5 4.5 0 1 0-6.37 0l1.72 1.72Zm1.46-3.78a1.13 1.13 0 1 1 0-2.25 1.13 1.13 0 0 1 0 2.25Z"
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