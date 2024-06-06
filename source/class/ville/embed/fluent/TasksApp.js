/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TasksApp",
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

   var pathdregular = "M4 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v9.88l-1 1.01V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4.09c.07.2.18.39.34.55l.44.45H6a2 2 0 0 1-2-2V4Zm4 1.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm0 4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM9 13.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm-2-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10.86.35a.5.5 0 0 0-.72-.7l-3.64 3.68-1.64-1.68a.5.5 0 1 0-.72.7l1.93 1.97a.6.6 0 0 0 .86 0l3.93-3.97Z";
   var pathdfilled = "M4 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v9.88l-2.5 2.52-.93-.95a1.5 1.5 0 1 0-2.14 2.1l.44.45H6a2 2 0 0 1-2-2V4Zm5 5.5c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5ZM9.5 5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM9 13.5c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Zm-2-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1-5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10.86.35a.5.5 0 0 0-.72-.7l-3.64 3.68-1.64-1.68a.5.5 0 1 0-.72.7l1.93 1.97a.6.6 0 0 0 .86 0l3.93-3.97Z";
   
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