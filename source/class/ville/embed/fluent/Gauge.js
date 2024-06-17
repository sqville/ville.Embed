/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Gauge",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M12.47 5.06a.5.5 0 0 1-.65.28 5 5 0 0 0-5.36 8.2.5.5 0 1 1-.7.7 6 6 0 0 1 6.42-9.83c.26.1.39.39.29.65Zm2.47 2.47a.5.5 0 0 1 .65.29 6 6 0 0 1-1.35 6.42.5.5 0 1 1-.7-.7 5 5 0 0 0 1.12-5.36.5.5 0 0 1 .28-.65Zm-.85-1.71a.5.5 0 0 0-.64-.01l-.18.14A335.17 335.17 0 0 0 9.3 9.2c-.14.12-.27.24-.34.33a1.5 1.5 0 1 0 2.28 1.95l.27-.4.38-.62a123.47 123.47 0 0 0 2.2-3.82l.12-.2a.5.5 0 0 0-.11-.62ZM10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-1a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z",
    FILLED : "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm1.82-12.66a5 5 0 0 0-5.36 8.2.5.5 0 0 1-.7.7 6 6 0 0 1 6.42-9.83.5.5 0 0 1-.36.93Zm3.77 2.48a6 6 0 0 1-1.35 6.42.5.5 0 1 1-.7-.7 5 5 0 0 0 1.12-5.36.5.5 0 0 1 .93-.36Zm-1.5-2a.5.5 0 0 1 .1.62l-.1.2a323.59 323.59 0 0 1-.69 1.2l-.23.4-.3.53a184.46 184.46 0 0 1-1.48 2.48 4.28 4.28 0 0 1-.16.23 1.5 1.5 0 1 1-2.28-1.95c.07-.09.2-.2.34-.33l.56-.48a125.12 125.12 0 0 1 2.96-2.4l.27-.22.37-.3a.5.5 0 0 1 .64.02Z"
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