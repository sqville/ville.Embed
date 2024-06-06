/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowUpExclamation",
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

   var pathdregular = "M4 5a2 2 0 1 1 4 0c0 2.09-.75 4.93-1.18 6.4-.1.36-.43.6-.82.6a.84.84 0 0 1-.82-.6C4.75 9.91 4 7.07 4 5Zm2-3a3 3 0 0 0-3 3c0 2.23.79 5.2 1.22 6.69C4.46 12.48 5.2 13 6 13s1.54-.52 1.78-1.31C8.2 10.2 9 7.25 9 5a3 3 0 0 0-3-3ZM5 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm9-10.3v13.8a.5.5 0 0 1-1 0V3.7l-2.15 2.15a.5.5 0 0 1-.7-.7l3-3c.2-.2.5-.2.7 0l3 3a.5.5 0 0 1-.7.7L15 3.71Z";
   var pathdfilled = "M3 5a3 3 0 0 1 6 0c0 2.25-.79 5.21-1.22 6.69C7.54 12.49 6.8 13 6 13s-1.54-.52-1.78-1.31C3.8 10.2 3 7.23 3 5Zm1 11a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM15 3.7v13.8a.5.5 0 0 1-1 0V3.7l-2.15 2.15a.5.5 0 0 1-.7-.7l3-3c.2-.2.5-.2.7 0l3 3a.5.5 0 0 1-.7.7L15 3.71Z";
   
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