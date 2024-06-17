/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DeviceMeetingRoom",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.1 3a2.5 2.5 0 0 0-2.44 1.95l-1.6 7A2.5 2.5 0 0 0 4.5 15h11a2.5 2.5 0 0 0 2.43-3.05l-1.59-7A2.5 2.5 0 0 0 13.9 3H6.1ZM4.63 5.17A1.5 1.5 0 0 1 6.1 4h7.8c.7 0 1.31.48 1.47 1.17l1.59 7A1.5 1.5 0 0 1 15.49 14H4.5a1.5 1.5 0 0 1-1.46-1.83l1.6-7ZM5.5 16a.5.5 0 0 0 0 1h9a.5.5 0 1 0 0-1h-9Z",
    FILLED : "M3.66 4.95A2.5 2.5 0 0 1 6.1 3h7.8c1.17 0 2.18.8 2.44 1.95l1.6 7A2.5 2.5 0 0 1 15.48 15H4.5a2.5 2.5 0 0 1-2.43-3.05l1.59-7ZM5.5 16a.5.5 0 0 0 0 1h9a.5.5 0 1 0 0-1h-9Z"
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