/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentOnePageLink",
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

   var pathdregular = "M14 2H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h3.05c-.3-.29-.54-.63-.71-1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8h.5c.17 0 .34.01.5.04V4a2 2 0 0 0-2-2Zm-1.41 5a.5.5 0 0 0-.09-1H7.41a.5.5 0 0 0 .09 1h5.09ZM7.5 10a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm4 3a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H15a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H15Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z";
   var pathdfilled = "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h3.05a3.49 3.49 0 0 1 2.45-6h4c.17 0 .34.01.5.04V4a2 2 0 0 0-2-2H6Zm1.5 4h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM9 15.5a2.5 2.5 0 0 1 2.5-2.5h.5a.5.5 0 0 1 0 1h-.5a1.5 1.5 0 0 0 0 3h.5a.5.5 0 0 1 0 1h-.5A2.5 2.5 0 0 1 9 15.5Zm6-2.5a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H15a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H15Zm-3.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm-4-5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1Z";
   
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