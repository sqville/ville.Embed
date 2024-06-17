/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextBulletListSquarePerson",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.75 3h8.5A2.75 2.75 0 0 1 17 5.75V9.4c-.3-.17-.64-.3-1-.36V5.75C16 4.78 15.22 4 14.25 4h-8.5C4.78 4 4 4.78 4 5.75v8.5c0 .97.78 1.75 1.75 1.75h5.3a2.51 2.51 0 0 0-.01 1H5.75A2.75 2.75 0 0 1 3 14.25v-8.5A2.75 2.75 0 0 1 5.75 3Zm3.75 7h3.76a3 3 0 0 0-.59 1H9.5a.5.5 0 0 1 0-1Zm0 3h3.17a3 3 0 0 0 .6 1H9.5a.5.5 0 0 1 0-1Zm-2-5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM6.75 11a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    FILLED : "M3 5.75A2.75 2.75 0 0 1 5.75 3h8.5A2.75 2.75 0 0 1 17 5.75V9.4a2.99 2.99 0 0 0-3.74.6H9.5a.5.5 0 0 0 0 1h3.17a3 3 0 0 0 0 2H9.5a.5.5 0 0 0 0 1h3.76l.01.01A2.5 2.5 0 0 0 11.04 17H5.75A2.75 2.75 0 0 1 3 14.25v-8.5ZM6.75 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM6.75 14a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9 7.5c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Zm8.5 4.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z"
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