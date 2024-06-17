/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Remote",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17.15 14.85a.5.5 0 0 0 .7-.7L12.21 8.5l5.64-5.65a.5.5 0 0 0-.7-.7l-6 6a.5.5 0 0 0 0 .7l6 6Zm-14.3-9.7a.5.5 0 1 0-.7.7l5.64 5.65-5.64 5.65a.5.5 0 0 0 .7.7l6-6a.5.5 0 0 0 0-.7l-6-6Z",
    FILLED : "M16.97 15.03a.75.75 0 1 0 1.06-1.06L12.56 8.5l5.47-5.47a.75.75 0 0 0-1.06-1.06l-6 6c-.3.3-.3.77 0 1.06l6 6ZM3.03 4.97a.75.75 0 0 0-1.06 1.06l5.47 5.47-5.47 5.47a.75.75 0 1 0 1.06 1.06l6-6c.3-.3.3-.77 0-1.06l-6-6Z"
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