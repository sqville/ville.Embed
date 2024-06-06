/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.XboxConsole",
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

   var pathdregular = "M7.5 6.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4 2.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v15a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-15Zm4 7V17h7V3H5v14h2V9.5a.5.5 0 0 1 1 0Z";
   var pathdfilled = "M4.5 2a.5.5 0 0 0-.5.5v15c0 .28.22.5.5.5H7V9.5a.5.5 0 0 1 1 0V18h7.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-11Zm3 4.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z";
   
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