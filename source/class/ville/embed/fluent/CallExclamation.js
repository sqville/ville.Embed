/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CallExclamation",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 2c3.33 0 5.59 1.28 7.15 2.66.66.58.97 1.46.8 2.28l-.15.83c-.15.78-.87 1.3-1.7 1.22l-1.63-.16c-.72-.07-1.25-.59-1.47-1.33-.3-1-.5-1.75-.5-1.75a6.63 6.63 0 0 0-5 0S7.3 6.5 7 7.5c-.2.67-.5 1.26-1.2 1.33l-1.63.16c-.81.08-1.6-.43-1.82-1.2l-.25-.84c-.25-.82-.03-1.7.58-2.28C4.1 3.3 6.68 2 10 2Zm3.48 3.53.02.1a46.1 46.1 0 0 0 .46 1.58c.13.45.39.6.6.62L16.2 8c.35.04.57-.17.62-.4l.16-.84c.09-.46-.08-.98-.49-1.34A9.37 9.37 0 0 0 10 3C6.93 3 4.6 4.2 3.37 5.39c-.33.32-.46.8-.31 1.28l.24.83c.1.3.43.53.77.5l1.63-.17.05-.01.05-.05c.07-.09.15-.26.24-.55a115.6 115.6 0 0 0 .46-1.6l.03-.1c.1-.37.45-.62.62-.7a7.62 7.62 0 0 1 5.73 0c.15.07.48.29.59.68v.03Zm1.02 7.97a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM10 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z",
    FILLED : "m17.8 7.77.16-.83c.16-.82-.15-1.7-.8-2.28-1.57-1.38-3.84-2.16-7.17-2.16-3.32 0-5.89.79-7.31 2.17-.6.59-.83 1.46-.58 2.28l.25.83A1.74 1.74 0 0 0 4.17 9l1.63-.16c.7-.07 1-.66 1.2-1.33.3-1 .5-1.75.5-1.75a6.63 6.63 0 0 1 5 0s.2.75.5 1.75c.22.74.75 1.26 1.47 1.33l1.63.16c.83.08 1.55-.44 1.7-1.22Zm-3.3 5.73a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM10 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z"
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