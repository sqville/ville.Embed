/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ColumnEdit",
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

   var pathdregular = "M3 3.5c0-.28.22-.5.5-.5H4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1H4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-.5a.5.5 0 0 1-.5-.5ZM9 4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h.47l-.04.16-.21.84H9a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v6.94l-1 1V5a1 1 0 0 0-1-1H9Zm6 1v4.94l-1 1V5c0-1.1.9-2 2-2h.5a.5.5 0 0 1 0 1H16a1 1 0 0 0-1 1Zm-4.02 10.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z";
   var pathdfilled = "M3 3.5c0-.28.22-.5.5-.5H4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1H4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-.5a.5.5 0 0 1-.5-.5ZM9 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h.22l.21-.84a3.2 3.2 0 0 1 .84-1.49L13 11.94V5a2 2 0 0 0-2-2H9Zm6 2v4.94l-1 1V5c0-1.1.9-2 2-2h.5a.5.5 0 0 1 0 1H16a1 1 0 0 0-1 1Zm-4.02 10.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z";
   
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