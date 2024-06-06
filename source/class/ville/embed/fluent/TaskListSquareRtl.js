/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TaskListSquareRtl",
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

   var pathdregular = "M14.35 7.1a.5.5 0 1 0-.7-.7l-1.42 1.4-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75Zm0 4.3c.2.2.2.5 0 .7l-1.75 1.75a.5.5 0 0 1-.69.02l-.75-.69a.5.5 0 0 1 .68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0ZM6.5 12a.5.5 0 0 0 0 1H9a.5.5 0 0 0 0-1H6.5ZM6 7.5c0-.28.22-.5.5-.5H9a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z";
   var pathdfilled = "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm11.35 1.1a.5.5 0 1 0-.7-.7l-1.42 1.4-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75Zm0 4.3a.5.5 0 0 0-.7 0l-1.42 1.4-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75a.5.5 0 0 0 0-.7ZM6.5 12a.5.5 0 0 0 0 1H9a.5.5 0 0 0 0-1H6.5ZM6 7.5c0 .28.22.5.5.5H9a.5.5 0 0 0 0-1H6.5a.5.5 0 0 0-.5.5Z";
   
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