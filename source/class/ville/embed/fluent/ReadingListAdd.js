/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ReadingListAdd",
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

   var pathdregular = "M3 5.25a1.25 1.25 0 0 1 2.3-.7.5.5 0 1 0 .82-.55 2.25 2.25 0 1 0-1.74 3.5H15.5a.5.5 0 0 0 0-1H4.38a.5.5 0 0 0-.06 0A1.25 1.25 0 0 1 3 5.25ZM8.5 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm-3 5a.5.5 0 0 0 0 1h5.84c.9-.63 1.98-1 3.16-1h-9Zm-3 2.5h7.39c-.2.31-.38.65-.52 1H2.5a.5.5 0 0 1 0-1Zm3 2.5h3.52a5.57 5.57 0 0 0 0 1H5.5a.5.5 0 0 1 0-1Zm13.5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z";
   var pathdfilled = "M3.5 5.5a1 1 0 0 1 1.84-.56.75.75 0 0 0 1.24-.83A2.5 2.5 0 1 0 4.6 8h10.67a.75.75 0 0 0 0-1.5H4.5a1 1 0 0 1-1-1ZM9.75 4a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm-4 5a.75.75 0 0 0 0 1.5h4.98A5.48 5.48 0 0 1 14.5 9H5.75Zm-3 2.5h7.14c-.3.46-.53.96-.68 1.5H2.75a.75.75 0 0 1 0-1.5Zm3 2.5h3.27a5.57 5.57 0 0 0 .07 1.5H5.75a.75.75 0 0 1 0-1.5Zm13.25.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 1 0 1 0V15h1.5a.5.5 0 1 0 0-1H15v-1.5Z";
   
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