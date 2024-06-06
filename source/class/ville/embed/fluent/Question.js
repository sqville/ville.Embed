/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Question",
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

   var pathdregular = "M10 3a4 4 0 0 0-4 4 .5.5 0 0 0 1 0 3 3 0 0 1 6 0c0 1.25-.7 1.86-1.58 2.62l-.03.03c-.86.73-1.89 1.62-1.89 3.35v.5a.5.5 0 0 0 1 0V13c0-1.25.7-1.86 1.58-2.62l.03-.03C12.97 9.62 14 8.73 14 7a4 4 0 0 0-4-4Zm0 14a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z";
   var pathdfilled = "M10 3a4 4 0 0 0-4 4 .75.75 0 0 0 1.5 0A2.5 2.5 0 0 1 10 4.5 2.5 2.5 0 0 1 12.5 7c0 .6-.16.97-.37 1.27a5 5 0 0 1-.97.92c-.4.33-.9.73-1.28 1.3-.39.58-.63 1.3-.63 2.26v.5a.75.75 0 0 0 1.5 0v-.5c0-.67.16-1.1.38-1.43.23-.35.55-.62.97-.96l.06-.05c.38-.3.84-.67 1.2-1.17C13.74 8.6 14 7.9 14 7a4 4 0 0 0-4-4Zm0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z";
   
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