/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ControlButton",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 7a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h.5a.5.5 0 0 0 0-1H6Zm3 .5a.5.5 0 0 0-1 0V9h-.5a.5.5 0 0 0 0 1H8v1.75c0 .69.56 1.25 1.25 1.25h.25a.5.5 0 0 0 0-1h-.25a.25.25 0 0 1-.25-.25V10h.5a.5.5 0 0 0 0-1H9V7.5Zm7 0a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5Zm-4 3c0-.28.22-.5.5-.5h1a.5.5 0 0 0 0-1h-1c-.83 0-1.5.67-1.5 1.5v2a.5.5 0 0 0 1 0v-2ZM4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h10.5A2.75 2.75 0 0 0 18 13.25v-6.5A2.75 2.75 0 0 0 15.25 4H4.75ZM3 6.75C3 5.78 3.78 5 4.75 5h10.5c.97 0 1.75.78 1.75 1.75v6.5c0 .97-.78 1.75-1.75 1.75H4.75C3.78 15 3 14.22 3 13.25v-6.5Z",
    FILLED : "M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75v6.5A2.75 2.75 0 0 1 15.25 16H4.75A2.75 2.75 0 0 1 2 13.25v-6.5ZM6 7a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h.5a.5.5 0 0 0 0-1H6Zm3 .5a.5.5 0 0 0-1 0V9h-.5a.5.5 0 0 0 0 1H8v1.75c0 .69.56 1.25 1.25 1.25h.25a.5.5 0 0 0 0-1h-.25a.25.25 0 0 1-.25-.25V10h.5a.5.5 0 0 0 0-1H9V7.5Zm7 0a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5Zm-4 3c0-.28.22-.5.5-.5h1a.5.5 0 0 0 0-1h-1c-.83 0-1.5.67-1.5 1.5v2a.5.5 0 0 0 1 0v-2Z"
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