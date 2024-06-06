/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Washer",
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

   var pathdregular = "M10 7a4 4 0 0 1 3.92 3.21l.03.01-.02.04A4.01 4.01 0 0 1 10 15a4 4 0 0 1 0-8Zm-2.52 3.67c.67-.3 1.54-.43 2.64-.16 1.46.37 2.33-.06 2.73-.46a3 3 0 0 0-5.85.88c.15-.1.3-.18.48-.26ZM7.5 5.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm3-.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z";
   var pathdfilled = "M7.48 10.67c-.17.08-.33.17-.48.26a3 3 0 0 1 5.85-.88c-.4.4-1.27.83-2.73.46a3.96 3.96 0 0 0-2.64.16ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm4 4a4 4 0 0 1 3.92 3.21l.03.01-.02.04A4.01 4.01 0 0 1 10 15a4 4 0 0 1 0-8ZM7.5 5.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm3-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Z";
   
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