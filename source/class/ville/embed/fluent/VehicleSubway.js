/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VehicleSubway",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8.5 5a.5.5 0 0 0 0 1h3a.5.5 0 1 0 0-1h-3ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-2.68 2.98l2.38 1.06a.5.5 0 1 1-.4.92L11.9 17H8.1l-4.4 1.96a.5.5 0 1 1-.4-.92l2.38-1.06A3 3 0 0 1 3 14V6Zm9.01 10H14a2 2 0 0 0 2-2v-2H4v2c0 1.1.9 2 2 2h6.01ZM4 6v5h12V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Z",
    FILLED : "M8.5 5a.5.5 0 0 0 0 1h3a.5.5 0 1 0 0-1h-3ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-2.68 2.98l2.38 1.06a.5.5 0 1 1-.4.92L11.9 17H8.1l-4.4 1.96a.5.5 0 1 1-.4-.92l2.38-1.06A3 3 0 0 1 3 14V6Zm1 0v5h12V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm4 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
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