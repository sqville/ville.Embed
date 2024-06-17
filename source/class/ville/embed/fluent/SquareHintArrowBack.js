/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SquareHintArrowBack",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 3.5a.5.5 0 0 0-.5-.5A2.5 2.5 0 0 0 3 5.5a.5.5 0 0 0 1 0C4 4.67 4.67 4 5.5 4a.5.5 0 0 0 .5-.5ZM16.5 6a.5.5 0 0 0 .5-.5A2.5 2.5 0 0 0 14.5 3a.5.5 0 0 0 0 1c.83 0 1.5.67 1.5 1.5 0 .28.22.5.5.5Zm-13 8a.5.5 0 0 0-.5.5A2.5 2.5 0 0 0 5.5 17a.5.5 0 0 0 0-1A1.5 1.5 0 0 1 4 14.5a.5.5 0 0 0-.5-.5ZM3 9a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V9Zm13.5-1.5a.5.5 0 0 0-.5.5v1.2c.35.1.68.24 1 .4V8a.5.5 0 0 0-.5-.5ZM9.6 17c-.16-.32-.3-.65-.4-1H8a.5.5 0 0 0 0 1h1.6ZM8.5 3.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5Zm6 15.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.9-6.4-.9.9h1.55A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25c0-.97-.78-1.75-1.75-1.75h-1.54l.9.9a.5.5 0 0 1-.71.7l-1.76-1.75a.5.5 0 0 1 0-.7l1.76-1.75a.5.5 0 0 1 .7.7Z",
    FILLED : "M9.25 3a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5ZM3 10.75a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0v1.5Zm4.5 5.5c0-.41.34-.75.75-.75h.84c.1.53.27 1.03.51 1.5H8.25a.75.75 0 0 1-.75-.75Zm8-7.16c.53.1 1.03.27 1.5.51V8.25a.75.75 0 0 0-1.5 0v.84ZM6 3.75A.75.75 0 0 0 5.25 3C4.01 3 3 4 3 5.25a.75.75 0 0 0 1.5 0c0-.41.34-.75.75-.75S6 4.16 6 3.75ZM5.25 17a.75.75 0 0 0 0-1.5.75.75 0 0 1-.75-.75.75.75 0 0 0-1.5 0C3 15.99 4 17 5.25 17ZM14 3.75c0-.41.34-.75.75-.75C15.99 3 17 4 17 5.25a.75.75 0 0 1-1.5 0 .75.75 0 0 0-.75-.75.75.75 0 0 1-.75-.75ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.9-6.4-.9.9h1.55A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25c0-.97-.78-1.75-1.75-1.75h-1.54l.9.9a.5.5 0 0 1-.71.7l-1.76-1.75a.5.5 0 0 1 0-.7l1.76-1.75a.5.5 0 0 1 .7.7Z"
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