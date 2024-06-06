/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Bed",
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

   var pathdregular = "M13.5 3A2.5 2.5 0 0 1 16 5.34v2.71a2.5 2.5 0 0 1 2 2.28v6.17a.5.5 0 0 1-1 .09V14H3v2.5a.5.5 0 0 1-1 .09V10.5a2.5 2.5 0 0 1 2-2.45V5.5A2.5 2.5 0 0 1 6.34 3h7.16Zm2 6h-11c-.78 0-1.42.6-1.5 1.36V13h14v-2.5c0-.78-.6-1.42-1.36-1.5h-.14Zm-2-5h-7c-.78 0-1.42.6-1.5 1.36V8h1v-.5c0-.28.22-.5.5-.5H9c.28 0 .5.22.5.5V8h1v-.5c0-.28.22-.5.5-.5h2.5c.28 0 .5.22.5.5V8h1V5.5c0-.78-.6-1.42-1.36-1.5h-.14Z";
   var pathdfilled = "M15.5 9a2.5 2.5 0 0 1 2.5 2.34v5.16a.5.5 0 0 1-1 .09V14H3v2.5a.5.5 0 0 1-1 .09V11.5A2.5 2.5 0 0 1 4.34 9H15.5Zm-9-6h7A2.5 2.5 0 0 1 16 5.34V8h-2v-.5a.5.5 0 0 0-.41-.5H11a.5.5 0 0 0-.5.41V8h-1v-.5a.5.5 0 0 0-.41-.5H6.5a.5.5 0 0 0-.5.41V8H4V5.5A2.5 2.5 0 0 1 6.34 3h.16Z";
   
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