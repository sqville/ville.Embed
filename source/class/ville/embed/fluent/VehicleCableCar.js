/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VehicleCableCar",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17.43 3a.5.5 0 1 1 .14 1L12 4.74V6c0 .77-.29 1.47-.76 2H13a3 3 0 0 1 3 3v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4a3 3 0 0 1 3-3h2a2 2 0 0 0 2-2V4.87L2.57 6a.5.5 0 1 1-.14-1L11 3.86V3.5a.5.5 0 1 1 1 0v.23L17.43 3ZM15 11a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2h10v-2ZM5 14v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1H5Z",
    FILLED : "M17.43 3a.5.5 0 1 1 .14 1L12 4.74V6c0 .77-.29 1.47-.76 2H13a3 3 0 0 1 3 3v2H4v-2a3 3 0 0 1 3-3h2a2 2 0 0 0 2-2V4.87L2.57 6a.5.5 0 1 1-.14-1L11 3.86V3.5a.5.5 0 1 1 1 0v.23L17.43 3ZM16 14v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1h12Z"
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