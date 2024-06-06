/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MultiselectRtl",
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

   var pathdregular = "M17.85 4.35a.5.5 0 0 0-.7-.7L15.5 5.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l2-2Zm0 9.8c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0ZM2.5 5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm0 5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9ZM2 15.5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z";
   var pathdfilled = "M2 5.25c0-.41.34-.75.75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 2 5.25Zm0 5c0-.41.34-.75.75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Zm.75 4.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5ZM18.31 4.25a.75.75 0 1 0-1.12-1l-1.72 1.91-.69-.69a.75.75 0 1 0-1.06 1.06l1.25 1.25a.75.75 0 0 0 1.09-.03l2.25-2.5Zm-.06 8.94c.31.28.33.75.06 1.06l-2.25 2.5a.75.75 0 0 1-1.09.03l-1.25-1.25a.75.75 0 1 1 1.06-1.06l.7.7 1.71-1.92a.75.75 0 0 1 1.06-.06Z";
   
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