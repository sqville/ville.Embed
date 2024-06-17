/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.RemixAdd",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2 2.5c0-.28.22-.5.5-.5H10a7.98 7.98 0 0 1 5.3 14h-1.7A7 7 0 0 0 10 3H2.5a.5.5 0 0 1-.5-.5ZM10 18A8 8 0 0 1 4.7 4h1.7A7 7 0 0 0 10 17h7.5a.5.5 0 0 1 0 1H10Zm.5-10.5a.5.5 0 0 0-1 0v2h-2a.5.5 0 1 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 0 0 0-1h-2v-2Z",
    FILLED : "M2.75 2a.75.75 0 0 0 0 1.5H10a6.52 6.52 0 0 1 6.5 6.5 6.5 6.5 0 0 1-3.03 5.5h2.34A8 8 0 0 0 10 2H2.75Zm5.6 15.83A8 8 0 0 1 4.19 4.5h2.34a6.5 6.5 0 0 0 3.47 12h7.25a.75.75 0 0 1 0 1.5H10c-.57 0-1.12-.06-1.65-.17ZM10 7c.41 0 .75.34.75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5c0-.41.34-.75.75-.75Z"
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