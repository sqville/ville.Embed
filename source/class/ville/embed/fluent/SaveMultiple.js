/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SaveMultiple",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5 3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V6.62a2 2 0 0 0-.59-1.41L12.8 3.59A2 2 0 0 0 11.38 3H5ZM4 5a1 1 0 0 1 1-1h1v1.5C6 6.33 6.67 7 7.5 7h2c.83 0 1.5-.67 1.5-1.5V4h.38a1 1 0 0 1 .7.3l1.63 1.61a1 1 0 0 1 .29.71V13a1 1 0 0 1-1 1v-3.5c0-.83-.67-1.5-1.5-1.5h-5C5.67 9 5 9.67 5 10.5V14a1 1 0 0 1-1-1V5Zm3 .5V4h3v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5Zm5 5V14H6v-3.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5ZM8.5 17c-.95 0-1.82-.38-2.45-1h7.45a2.5 2.5 0 0 0 2.5-2.5V6.05c.62.63 1 1.5 1 2.45v5a3.5 3.5 0 0 1-3.5 3.5h-5Z",
    FILLED : "M6 5.5V3H5a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2v-4.5C5 9.67 5.67 9 6.5 9h5c.83 0 1.5.67 1.5 1.5V15a2 2 0 0 0 2-2V6.62a2 2 0 0 0-.59-1.41L12.8 3.59A2 2 0 0 0 11.38 3H11v2.5c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 0 1 6 5.5Zm1 0V3h3v2.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5Zm5 9.5H6v-4.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V15Zm-3.5 2c-.95 0-1.82-.38-2.45-1h7.45a2.5 2.5 0 0 0 2.5-2.5V6.05c.62.63 1 1.5 1 2.45v5a3.5 3.5 0 0 1-3.5 3.5h-5Z"
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