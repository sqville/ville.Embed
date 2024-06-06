/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Link",
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

   var pathdregular = "M8 6a.5.5 0 0 1 .09 1H6a3 3 0 0 0-.2 6H8a.5.5 0 0 1 .09 1H6a4 4 0 0 1-.22-8H8Zm6 0a4 4 0 0 1 .22 8H12a.5.5 0 0 1-.09-1H14a3 3 0 0 0 .2-6H12a.5.5 0 0 1-.09-1H14ZM6 9.5h8a.5.5 0 0 1 .09 1H6a.5.5 0 0 1-.09-1H14 6Z";
   var pathdfilled = "M14 6a4 4 0 0 1 .2 8H12a.75.75 0 0 1-.1-1.5H14a2.5 2.5 0 0 0 .16-5H12a.75.75 0 0 1-.1-1.5H14ZM8 6a.75.75 0 0 1 .1 1.5H6a2.5 2.5 0 0 0-.16 5H8a.75.75 0 0 1 .1 1.5H6a4 4 0 0 1-.2-8H8ZM6.25 9.25h7.5a.75.75 0 0 1 .1 1.5h-7.6a.75.75 0 0 1-.1-1.5h7.6-7.5Z";
   
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