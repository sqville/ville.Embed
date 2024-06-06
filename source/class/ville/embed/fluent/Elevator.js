/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Elevator",
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

   var pathdregular = "M5.65 7.15c.2-.2.5-.2.7 0l1.5 1.5a.5.5 0 1 1-.7.7l-.65-.64v2.79a.5.5 0 0 1-1 0V8.7l-.65.65a.5.5 0 1 1-.7-.7l1.5-1.5Zm10.2 3.2-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V7.5a.5.5 0 0 1 1 0v2.8l.65-.65a.5.5 0 0 1 .7.7ZM5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H5Zm4.5 1v11H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4.5Zm1 11V4H15a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4.5Z";
   var pathdfilled = "M9.5 3H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h4.5V3ZM5.65 7.15c.2-.2.5-.2.7 0l1.5 1.5a.5.5 0 1 1-.7.7l-.65-.64v2.79a.5.5 0 0 1-1 0V8.7l-.65.65a.5.5 0 1 1-.7-.7l1.5-1.5ZM10.5 16H15a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-4.5v13Zm3.85-4.15a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V7.5a.5.5 0 0 1 1 0v2.8l.65-.65a.5.5 0 0 1 .7.7l-1.5 1.5Z";
   
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