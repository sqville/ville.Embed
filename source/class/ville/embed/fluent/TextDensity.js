/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextDensity",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
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

   var pathdregular = "M10.5 2c.28 0 .5.22.5.5v15a.5.5 0 0 1-1 0v-15c0-.28.22-.5.5-.5ZM9 5H2.5a.5.5 0 0 0 0 1H9V5Zm0 3H2.5a.5.5 0 0 0 0 1H9V8Zm0 3H2.5a.5.5 0 0 0 0 1H9v-1Zm0 3H2.5a.5.5 0 0 0 0 1H9v-1Zm7.5 0H12v-1h4.5a.5.5 0 0 0 0-1H12v-1h4.5a1.5 1.5 0 0 1 0 3Zm0-5H12V8h4.5a.5.5 0 0 0 0-1H12V6h4.5a1.5 1.5 0 0 1 0 3Z";
   var pathdfilled = "M10.5 2c.28 0 .5.22.5.5v15a.5.5 0 0 1-1 0v-15c0-.28.22-.5.5-.5ZM9 5H2.5a.5.5 0 0 0 0 1H9V5Zm0 3H2.5a.5.5 0 0 0 0 1H9V8Zm0 3H2.5a.5.5 0 0 0 0 1H9v-1Zm0 3H2.5a.5.5 0 0 0 0 1H9v-1Zm7.5 0H12v-3h4.5a1.5 1.5 0 0 1 0 3Zm0-5H12V6h4.5a1.5 1.5 0 0 1 0 3Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});