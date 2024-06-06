/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BoardHeart",
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

   var pathdregular = "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4.92l-.88-.89a3.53 3.53 0 0 1-.1-.11H6a2 2 0 0 1-2-2V8.06L9.5 8v3.75a3.59 3.59 0 0 1 1-1.09V4H14a2 2 0 0 1 2 2v4.03c.33-.04.67-.04 1 .01V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h3.5v3L4 7.06V6Zm13 5.06a2.6 2.6 0 0 1 1.25 4.35l-3.43 3.46a.45.45 0 0 1-.64 0l-3.43-3.46a2.6 2.6 0 0 1-.21-3.41 2.55 2.55 0 0 1 3.84-.24l.12.12.12-.12a2.55 2.55 0 0 1 2.38-.7Z";
   var pathdfilled = "M9.5 7V3H6a3 3 0 0 0-3 3v1h6.5Zm1.25 8.41 3.43 3.46c.18.17.46.17.64 0l3.43-3.46A2.6 2.6 0 0 0 17 11.06a2.55 2.55 0 0 0-2.38.7l-.12.12-.12-.12a2.55 2.55 0 0 0-3.84.24 2.6 2.6 0 0 0 .21 3.41ZM9.5 17v-1.58a3.6 3.6 0 0 1 0-3.67V8H3v6a3 3 0 0 0 3 3h3.5Zm5-6.43a3.55 3.55 0 0 1 2.5-.53V6a3 3 0 0 0-3-3h-3.5v7.66a3.55 3.55 0 0 1 4-.09Z";
   
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