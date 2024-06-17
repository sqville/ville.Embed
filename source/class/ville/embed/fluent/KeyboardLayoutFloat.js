/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.KeyboardLayoutFloat",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5 11.5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5ZM11.5 7a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.5 7a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm2.25 1.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10 9.5A.75.75 0 1 0 10 8a.75.75 0 0 0 0 1.5Zm3.76-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM8.5 7a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM2 4.5C2 3.67 2.67 3 3.5 3h13c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5H11a1 1 0 1 1-2 0H3.5A1.5 1.5 0 0 1 2 12.5v-8ZM3.5 13h13a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5ZM2 16.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Z",
    FILLED : "M2 4.5C2 3.67 2.67 3 3.5 3h13c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5H11a1 1 0 1 1-2 0H3.5A1.5 1.5 0 0 1 2 12.5v-8ZM5.5 7a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm6 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-6 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm8.25-4.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm-7.5 2.5a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM10 9.5A.75.75 0 1 0 10 8a.75.75 0 0 0 0 1.5Zm2.25-.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM8.5 7a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM2 16.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Z"
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