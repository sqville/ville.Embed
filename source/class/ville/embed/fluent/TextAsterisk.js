/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextAsterisk",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10.5 2.5a.5.5 0 0 0-1 0v6.3L5.05 4.33a.5.5 0 1 0-.7.71L8.78 9.5H2.5a.5.5 0 0 0 0 1h6.3l-4.46 4.45a.5.5 0 1 0 .71.7l4.45-4.44v6.29a.5.5 0 0 0 1 0v-6.3l4.45 4.46a.5.5 0 1 0 .7-.71l-4.44-4.45h6.29a.5.5 0 0 0 0-1h-6.3l4.46-4.45a.5.5 0 1 0-.71-.7L10.5 8.78V2.5Z",
    FILLED : "M10.6 2.5a.6.6 0 1 0-1.2 0v6.05L5.12 4.27a.6.6 0 1 0-.85.85L8.55 9.4H2.5a.6.6 0 1 0 0 1.2h6.05l-4.28 4.28a.6.6 0 0 0 .85.85l4.28-4.28v6.05a.6.6 0 1 0 1.2 0v-6.05l4.28 4.28a.6.6 0 0 0 .85-.85l-4.28-4.28h6.05a.6.6 0 1 0 0-1.2h-6.05l4.28-4.28a.6.6 0 0 0-.85-.85L10.6 8.55V2.5Z"
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