/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MailMultiple",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16 5.5A2.5 2.5 0 0 0 13.5 3h-9A2.5 2.5 0 0 0 2 5.5v7A2.5 2.5 0 0 0 4.5 15h9a2.5 2.5 0 0 0 2.5-2.5v-7ZM9.25 9.93 15 6.96v5.54c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 3 12.5V6.96l5.75 2.97.08.04c.14.05.3.04.42-.04ZM4.5 4h9c.83 0 1.5.67 1.5 1.5v.3L9 8.92 3 5.8v-.3C3 4.67 3.67 4 4.5 4Zm2 13a2.5 2.5 0 0 1-2-1h9a3.5 3.5 0 0 0 3.5-3.5v-7c.6.46 1 1.18 1 2v5a4.5 4.5 0 0 1-4.5 4.5h-7Z",
    FILLED : "M16 12.5V6.37L9.25 9.93a.5.5 0 0 1-.5 0L2 6.37v6.13A2.5 2.5 0 0 0 4.5 15h9a2.5 2.5 0 0 0 2.5-2.5Zm-.02-7.28A2.5 2.5 0 0 0 13.5 3h-9a2.5 2.5 0 0 0-2.48 2.22L9 8.92l6.98-3.7ZM6.5 17a2.5 2.5 0 0 1-2-1h9a3.5 3.5 0 0 0 3.5-3.5v-7c.6.46 1 1.18 1 2v5a4.5 4.5 0 0 1-4.5 4.5h-7Z"
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