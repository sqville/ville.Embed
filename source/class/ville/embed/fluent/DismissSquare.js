/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DismissSquare",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7.15 7.15c.2-.2.5-.2.7 0L10 9.29l2.15-2.14a.5.5 0 0 1 .7.7L10.71 10l2.14 2.15a.5.5 0 0 1-.7.7L10 10.71l-2.15 2.14a.5.5 0 0 1-.7-.7L9.29 10 7.15 7.85a.5.5 0 0 1 0-.7ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Z",
    FILLED : "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.15 1.15a.5.5 0 0 0 0 .7L9.29 10l-2.14 2.15a.5.5 0 0 0 .7.7L10 10.71l2.15 2.14a.5.5 0 0 0 .7-.7L10.71 10l2.14-2.15a.5.5 0 0 0-.7-.7L10 9.29 7.85 7.15a.5.5 0 0 0-.7 0Z"
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