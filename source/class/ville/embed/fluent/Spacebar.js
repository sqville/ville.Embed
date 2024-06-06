/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Spacebar",
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

   var pathdregular = "M2.5 8c.28 0 .5.22.5.5v2c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 0 1 2 10.5v-2c0-.28.22-.5.5-.5Z";
   var pathdfilled = "M2.75 7.75c.41 0 .75.34.75.75v2h13v-2a.75.75 0 0 1 1.5 0v2c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 0 1 2 10.5v-2c0-.41.34-.75.75-.75Z";
   
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