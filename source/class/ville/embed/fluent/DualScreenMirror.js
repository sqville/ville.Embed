/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DualScreenMirror",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4ZM3 6a1 1 0 0 1 1-1h5.5v10H4a1 1 0 0 1-1-1V6Zm7.5 9V5H16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-5.5ZM6.25 8c.18 0 .34.1.43.25l1.75 3A.5.5 0 0 1 8 12H4.5a.5.5 0 0 1-.43-.75l1.75-3A.5.5 0 0 1 6.25 8Zm.88 3-.88-1.5-.88 1.5h1.76Zm7.05-2.75 1.75 3a.5.5 0 0 1-.43.75H12a.5.5 0 0 1-.43-.75l1.75-3a.5.5 0 0 1 .86 0Zm.45 2.75-.88-1.5-.88 1.5h1.76Z",
    FILLED : "M10.5 16H16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-5.5v12Zm-1-12H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.5V4ZM5.75 8c.18 0 .34.1.43.25l1.75 3a.5.5 0 0 1-.43.75H4a.5.5 0 0 1-.43-.75l1.75-3A.5.5 0 0 1 5.75 8Zm8.93.25 1.75 3A.5.5 0 0 1 16 12h-3.5a.5.5 0 0 1-.43-.75l1.75-3a.5.5 0 0 1 .86 0Z"
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