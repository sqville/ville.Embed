/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Multiplier1x",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8 6.5a.5.5 0 0 0-.9-.3l-.22.3c-.33.48-.7 1-1.64 1.57a.5.5 0 1 0 .52.86A6 6 0 0 0 7 7.96v5.54a.5.5 0 1 0 1 0v-7Zm2.85 3.65a.5.5 0 0 0-.7.7L11.29 12l-1.14 1.15a.5.5 0 0 0 .7.7L12 12.71l1.15 1.14a.5.5 0 0 0 .7-.7L12.71 12l1.14-1.15a.5.5 0 0 0-.7-.7L12 11.29l-1.15-1.14Z",
    FILLED : "M8.5 6.75a.75.75 0 0 0-1.39-.4l-.04.08a5.3 5.3 0 0 1-.58.8 4.8 4.8 0 0 1-1.13.88.75.75 0 1 0 .78 1.28c.34-.2.62-.4.86-.58v4.44a.75.75 0 0 0 1.5 0v-6.5Zm2.78 3.47a.75.75 0 1 0-1.06 1.06l.72.72-.72.72a.75.75 0 1 0 1.06 1.06l.72-.72.72.72a.75.75 0 1 0 1.06-1.06l-.72-.72.72-.72a.75.75 0 0 0-1.06-1.06l-.72.72-.72-.72Z"
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