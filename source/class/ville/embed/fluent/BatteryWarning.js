/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BatteryWarning",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M13.5 5A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-2.26l-.53-1.06h3.04c.65 0 1.18-.5 1.24-1.12l.01-.13V7.2c0-.64-.5-1.17-1.12-1.24H4.5c-.65 0-1.4.5-1.5 1.13v5.46l-.63 1.26A2.49 2.49 0 0 1 2 12.5v-5A2.5 2.5 0 0 1 4.5 5h9ZM5.6 9.55l-3.5 7A1 1 0 0 0 3 18h7a1 1 0 0 0 .9-1.45l-3.5-7a1 1 0 0 0-1.8 0ZM7 11.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0ZM6.5 17a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z",
    FILLED : "M2 7.5A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-2.26L8.29 9.1a2 2 0 0 0-3.58 0l-2.34 4.7A2.49 2.49 0 0 1 2 12.5v-5Zm3.6 2.05-3.5 7A1 1 0 0 0 3 18h7a1 1 0 0 0 .9-1.45l-3.5-7a1 1 0 0 0-1.8 0ZM7 11.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0ZM6.5 17a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z"
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