/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.NoteEdit",
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

   var pathdregular = "M3 14.18A3 3 0 0 0 6 17h2l.06-.35.16-.65H5.85A2 2 0 0 1 4 14v-4h3.18A3 3 0 0 0 10 7V4h4.15A2 2 0 0 1 16 6v2c.34-.01.68.03 1 .13V5.82A3 3 0 0 0 14 3H9.45a2 2 0 0 0-1.24.59L3.59 8.2l-.12.13A2 2 0 0 0 3 9.62v4.56ZM7 9H4.22a1 1 0 0 1 .07-.09L8.91 4.3 9 4.22V7.15A2 2 0 0 1 7 9Zm2.98 5.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z";
   var pathdfilled = "M3 14.18A3 3 0 0 0 6 17h2l.06-.35.37-1.5a3.2 3.2 0 0 1 .84-1.48l4.83-4.83a2.87 2.87 0 0 1 2.9-.7V5.81A3 3 0 0 0 14 3h-4v4.18a3 3 0 0 1-2.82 2.81L7 10H3v4.18Zm.46-5.83A2 2 0 0 0 3.1 9h4.06a2 2 0 0 0 1.83-1.85L9 7V3.1a2 2 0 0 0-.8.49L3.6 8.2l-.13.14Zm6.52 6.03 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z";
   
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