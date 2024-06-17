/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MapDrive",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M14.75 6.74a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM2 5c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v3.5a.5.5 0 0 1-.5.5h-7v2h1c.28 0 .5.22.5.5V13h1.5c.27 0 .5.22.5.5v1h3.5a.5.5 0 0 1 0 1H14v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1H2.5a.5.5 0 0 1 0-1H6v-1c0-.28.23-.5.5-.5H8v-1.5a.5.5 0 0 1 .5-.5h1V9h-7a.5.5 0 0 1-.5-.5V5Zm2-1a1 1 0 0 0-1 1v3h14V5a1 1 0 0 0-1-1H4Zm7.47 12H13v-2h-1.5a.5.5 0 0 1-.5-.5V12H9v1.5a.5.5 0 0 1-.5.5H7v2h4.47Z",
    FILLED : "M2 5c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v3.5a.5.5 0 0 1-.5.5h-7v2h1c.28 0 .5.22.5.5V13h1.5c.27 0 .5.22.5.5v1h3.5a.5.5 0 0 1 0 1H14v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1H2.5a.5.5 0 0 1 0-1H6v-1c0-.28.23-.5.5-.5H8v-1.5a.5.5 0 0 1 .5-.5h1V9h-7a.5.5 0 0 1-.5-.5V5Zm12.75 1.74a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
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