/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowTurnRightDown",
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

   var pathdregular = "M16.85 11.15c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 0 1 .7-.7L12 14.29V8a2 2 0 0 0-2-2H3.5a.5.5 0 0 1 0-1H10a3 3 0 0 1 3 3v6.3l3.15-3.15c.2-.2.5-.2.7 0Z";
   var pathdfilled = "M16.78 10.72c.3.3.3.77 0 1.06l-4 4c-.3.3-.77.3-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V7c0-.83-.67-1.5-1.5-1.5H3.75a.75.75 0 0 1 0-1.5H10a3 3 0 0 1 3 3v6.44l2.72-2.72c.3-.3.77-.3 1.06 0Z";
   
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