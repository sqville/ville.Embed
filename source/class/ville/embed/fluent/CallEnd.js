/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CallEnd",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 6c3.33 0 5.59 1.28 7.15 2.66.66.58.97 1.46.8 2.28l-.15.83c-.15.78-.87 1.3-1.7 1.22l-1.63-.16c-.72-.07-1.25-.59-1.47-1.33-.3-1-.5-1.75-.5-1.75a6.63 6.63 0 0 0-5 0s-.2.75-.5 1.75c-.2.67-.5 1.26-1.2 1.33l-1.63.16c-.81.08-1.6-.43-1.82-1.2l-.25-.84c-.25-.82-.03-1.7.58-2.28C4.1 7.3 6.68 6 10 6Zm3.48 3.53.02.1a46.1 46.1 0 0 0 .46 1.58c.13.45.39.6.6.62l1.64.16c.35.04.57-.17.62-.4l.16-.84c.09-.46-.08-.98-.49-1.34A9.37 9.37 0 0 0 10 7C6.93 7 4.6 8.2 3.37 9.39c-.33.32-.46.8-.31 1.28l.24.83c.1.3.43.53.77.5l1.63-.17.05-.01.05-.05c.07-.09.15-.26.24-.55a115.65 115.65 0 0 0 .46-1.6l.03-.1c.1-.37.45-.62.62-.7a7.62 7.62 0 0 1 5.73 0c.15.07.48.29.59.68v.03Z",
    FILLED : "m17.96 10.94-.16.83c-.15.78-.87 1.3-1.7 1.22l-1.63-.16c-.72-.07-1.25-.59-1.47-1.33-.3-1-.5-1.75-.5-1.75a6.63 6.63 0 0 0-5 0s-.2.75-.5 1.75c-.2.67-.5 1.26-1.2 1.33l-1.63.16c-.81.08-1.6-.43-1.82-1.2l-.25-.84c-.25-.82-.03-1.7.58-2.28C4.1 7.3 6.67 6.51 9.99 6.5c3.33 0 5.6.78 7.16 2.16.66.58.97 1.46.8 2.28Z"
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