/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CalendarMention",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M14.5 3A2.5 2.5 0 0 1 17 5.5v4.92a4.96 4.96 0 0 0-1-.32V7H4v7.5c0 .83.67 1.5 1.5 1.5h4.6c.07.35.18.68.32 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5Zm.5 8a3 3 0 1 0 1.28 5.71.5.5 0 1 1 .44.9A4 4 0 1 1 19 15v.51a1.5 1.5 0 0 1-2.65.97A2 2 0 0 1 13 15a2 2 0 0 1 3.17-1.62.5.5 0 0 1 .83.37v1.75a.5.5 0 1 0 1 0V15a3 3 0 0 0-3-3Zm-1 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z",
    FILLED : "M17 7v3.42A4.98 4.98 0 0 0 10 15c0 .71.15 1.39.42 2H5.5A2.5 2.5 0 0 1 3 14.5V7h14Zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9Zm.5 9a3 3 0 1 0 1.28 5.71.5.5 0 1 1 .44.9A4 4 0 1 1 19 15v.51a1.5 1.5 0 0 1-2.65.97A2 2 0 0 1 13 15a2 2 0 0 1 3.17-1.62.5.5 0 0 1 .83.37v1.75a.5.5 0 1 0 1 0V15a3 3 0 0 0-3-3Zm-1 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
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