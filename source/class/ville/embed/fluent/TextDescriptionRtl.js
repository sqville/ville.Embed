/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextDescriptionRtl",
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

   var pathdregular = "M17.5 5a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1h15Zm0 3a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1h15Zm.5 3.5a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0 0 1h15a.5.5 0 0 0 .5-.5Zm-.5 2.5a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1h10Z";
   var pathdfilled = "M17.25 4.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h14.5Zm0 3a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h14.5Zm.75 3.75a.75.75 0 0 0-.75-.75H2.75a.75.75 0 0 0 0 1.5h14.5c.41 0 .75-.34.75-.75Zm-.75 2.25a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5h9.5Z";
   
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