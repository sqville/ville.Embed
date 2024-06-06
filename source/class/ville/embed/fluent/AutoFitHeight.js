/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.AutoFitHeight",
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

   var pathdregular = "M4 2a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1H4Zm0 15a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1H4ZM9.15 5.15c.2-.2.5-.2.7 0l2 2a.5.5 0 0 1-.7.7L10 6.71v6.58l1.15-1.14a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L9 13.29V6.71L7.85 7.85a.5.5 0 1 1-.7-.7l2-2Z";
   var pathdfilled = "M4.25 2a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5h-11Zm0 14.5a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5h-11Zm6.03-1.72 2-2a.75.75 0 1 0-1.06-1.06l-.72.72V7.56l.72.72a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06L9 7.56v4.88l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2c.3.3.77.3 1.06 0Z";
   
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