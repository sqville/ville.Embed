/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LinkMultiple",
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

   var pathdregular = "M1 8a4 4 0 0 1 4-4h6a4 4 0 0 1 0 8H9.5a.5.5 0 0 1 0-1H11a3 3 0 1 0 0-6H5a3 3 0 0 0-.87 5.87 5 5 0 0 0-.13 1A4 4 0 0 1 1 8Zm17 4a3 3 0 0 0-2.13-2.87c.08-.32.12-.66.13-1A4 4 0 0 1 15 16H9a4 4 0 0 1 0-8h1.5a.5.5 0 0 1 0 1H9a3 3 0 1 0 0 6h6a3 3 0 0 0 3-3Z";
   var pathdfilled = "M1 8a4 4 0 0 1 4-4h6a4 4 0 0 1 0 8H9.75a.75.75 0 0 1 0-1.5H11a2.5 2.5 0 0 0 0-5H5a2.5 2.5 0 0 0-.74 4.89c-.15.47-.25.97-.26 1.48A4 4 0 0 1 1 8Zm15 .13c-.01.51-.1 1.01-.26 1.48A2.5 2.5 0 0 1 15 14.5H9a2.5 2.5 0 0 1 0-5h1.25a.75.75 0 0 0 0-1.5H9a4 4 0 1 0 0 8h6a4 4 0 0 0 1-7.87Z";
   
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