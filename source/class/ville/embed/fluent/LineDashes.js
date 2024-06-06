/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LineDashes",
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

   var pathdregular = "M16.85 3.85a.5.5 0 0 0-.7-.7l-1 1a.5.5 0 0 0 .7.7l1-1Zm-3 2.3c.2.2.2.5 0 .7l-1 1a.5.5 0 0 1-.7-.7l1-1c.2-.2.5-.2.7 0Zm-3 3c.2.2.2.5 0 .7l-1 1a.5.5 0 0 1-.7-.7l1-1c.2-.2.5-.2.7 0Zm-3 3c.2.2.2.5 0 .7l-1 1a.5.5 0 0 1-.7-.7l1-1c.2-.2.5-.2.7 0Zm-3 3.7a.5.5 0 0 0-.7-.7l-1 1a.5.5 0 0 0 .7.7l1-1Z";
   var pathdfilled = "M16.78 4.28a.75.75 0 0 0-1.06-1.06l-.5.5a.75.75 0 0 0 1.06 1.06l.5-.5Zm-3 1.94c.3.3.3.77 0 1.06l-.5.5a.75.75 0 1 1-1.06-1.06l.5-.5c.3-.3.77-.3 1.06 0Zm-3 3c.3.3.3.77 0 1.06l-.5.5a.75.75 0 1 1-1.06-1.06l.5-.5c.3-.3.77-.3 1.06 0Zm-3 3c.3.3.3.77 0 1.06l-.5.5a.75.75 0 0 1-1.06-1.06l.5-.5c.3-.3.77-.3 1.06 0Zm-3 4.06a.75.75 0 1 0-1.06-1.06l-.5.5a.75.75 0 1 0 1.06 1.06l.5-.5Z";
   
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