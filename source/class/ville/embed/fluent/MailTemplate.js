/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MailTemplate",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2 4.5A2.5 2.5 0 0 1 4.5 2h9A2.5 2.5 0 0 1 16 4.5v3.54a3.53 3.53 0 0 0-.5-.04H15V4.5c0-.83-.67-1.5-1.5-1.5h-9C3.67 3 3 3.67 3 4.5v9c0 .83.67 1.5 1.5 1.5H6v.5c0 .17.01.34.04.5H4.5A2.5 2.5 0 0 1 2 13.5v-9Zm11 3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5c.28 0 .5.22.5.5Zm-8-2c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm2 6A2.5 2.5 0 0 1 9.5 9h6a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 7 15.5v-4ZM9.5 10a1.5 1.5 0 0 0-1.48 1.23l4.48 2.69 4.48-2.69A1.5 1.5 0 0 0 15.5 10h-6ZM8 15.5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-3.12l-4.24 2.55a.5.5 0 0 1-.52 0L8 12.38v3.12Z",
    FILLED : "M4.5 2A2.5 2.5 0 0 0 2 4.5v9A2.5 2.5 0 0 0 4.5 16h1.54a3.53 3.53 0 0 1-.04-.5v-4A3.5 3.5 0 0 1 9.5 8h6c.17 0 .34.01.5.04V4.5A2.5 2.5 0 0 0 13.5 2h-9ZM5 4.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm2 2c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm5.5 7.2-5.3-3.17A2.5 2.5 0 0 1 9.5 9h6a2.5 2.5 0 0 1 2.3 1.53l-5.3 3.17Zm.26 1L18 11.59v3.92a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 7 15.5v-3.92l5.24 3.13c.16.1.36.1.52 0Z"
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