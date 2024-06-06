/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ColumnArrowRight",
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

   var pathdregular = "M4 3h1a1 1 0 0 1 1 1v4h1V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2v-4H6v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm11-1a2 2 0 0 0-2 2v11c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1Zm1 1a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h1ZM9.15 7.15c.2-.2.5-.2.7 0l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7L10.29 10H5.5a.5.5 0 0 1 0-1h4.8L9.14 7.85a.5.5 0 0 1 0-.7Z";
   var pathdfilled = "M2 4c0-1.1.9-2 2-2h1a2 2 0 0 1 2 2v3.75H5.75a1.75 1.75 0 1 0 0 3.5H7V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm13-2a2 2 0 0 0-2 2v11c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1ZM8.97 6.97c.3-.3.77-.3 1.06 0l2 2c.3.3.3.77 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H5.5a.75.75 0 0 1 0-1.5h4.19l-.72-.72a.75.75 0 0 1 0-1.06Z";
   
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