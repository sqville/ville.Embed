/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Scales",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3.5 3a.5.5 0 1 0 0 1h.75L2.08 9.22a.95.95 0 0 0-.08.4 3 3 0 0 0 6 0 .95.95 0 0 0-.08-.4L5.75 4H9.5v10H6a2 2 0 1 0 0 4h8a2 2 0 0 0 0-4h-3.5V4h3.75l-2.17 5.22a.96.96 0 0 0-.08.4 3 3 0 0 0 6 0 .96.96 0 0 0-.08-.4L15.75 4h.75a.5.5 0 0 0 0-1h-13ZM5 11.5A2 2 0 0 1 3.06 10h3.88A2 2 0 0 1 5 11.5Zm0-6.7L6.75 9h-3.5L5 4.8ZM6 15h8a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2Zm10.75-6h-3.5L15 4.8 16.75 9Zm-3.69 1h3.88a2 2 0 0 1-3.88 0Z",
    FILLED : "M3.5 3a.5.5 0 1 0 0 1h.75L2.08 9.22a.95.95 0 0 0-.08.4 3 3 0 0 0 6 0 .95.95 0 0 0-.08-.4L5.75 4H9.5v11h-4a1.5 1.5 0 0 0 0 3h9a1.5 1.5 0 0 0 0-3h-4V4h3.75l-2.17 5.22a.96.96 0 0 0-.08.4 3 3 0 0 0 6 0 .96.96 0 0 0-.08-.4L15.75 4h.75a.5.5 0 0 0 0-1h-13ZM5 4.8 6.75 9h-3.5L5 4.8ZM16.75 9h-3.5L15 4.8 16.75 9Z"
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