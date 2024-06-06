/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ReadingList",
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

   var pathdregular = "M3 6.25a1.25 1.25 0 0 1 2.3-.7.5.5 0 1 0 .82-.55 2.25 2.25 0 1 0-1.74 3.5H15.5a.5.5 0 0 0 0-1H4.38a.5.5 0 0 0-.06 0A1.25 1.25 0 0 1 3 6.25ZM8.5 5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm-3 5a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12ZM2 13c0-.28.22-.5.5-.5h12a.5.5 0 0 1 0 1h-12A.5.5 0 0 1 2 13Zm3.5 2a.5.5 0 0 0 0 1h12a.5.5 0 1 0 0-1h-12Z";
   var pathdfilled = "M3.5 5.5a1 1 0 0 1 1.84-.56.75.75 0 0 0 1.24-.83A2.5 2.5 0 1 0 4.6 8h10.67a.75.75 0 0 0 0-1.5H4.5a1 1 0 0 1-1-1ZM9.75 4a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm-4 5a.75.75 0 0 0 0 1.5h11.5a.75.75 0 1 0 0-1.5H5.75ZM2 12.25c0-.41.34-.75.75-.75h12.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75ZM5.75 14a.75.75 0 0 0 0 1.5h11.5a.75.75 0 1 0 0-1.5H5.75Z";
   
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