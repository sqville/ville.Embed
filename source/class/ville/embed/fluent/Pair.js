/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Pair",
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

   var pathdregular = "M2 3.5c0 .65.42 1.2 1 1.41v6.18A1.5 1.5 0 1 0 4.91 13H7v2.09A1.5 1.5 0 1 0 8.91 17h6.18A1.5 1.5 0 1 0 17 15.09V8.9A1.5 1.5 0 1 0 15.09 7H13V4.91A1.5 1.5 0 1 0 11.09 3H4.9A1.5 1.5 0 0 0 2 3.5ZM8.91 16a1.5 1.5 0 0 0-.91-.91V13h3.09A1.5 1.5 0 1 0 13 11.09V8h2.09c.15.43.48.76.91.91v6.18a1.5 1.5 0 0 0-.91.91H8.9ZM4 11.09V4.9c.43-.15.76-.48.91-.91h6.18c.15.43.48.76.91.91V7H8.91A1.5 1.5 0 1 0 7 8.91V12H4.91a1.5 1.5 0 0 0-.91-.91Zm8 0a1.5 1.5 0 0 0-.91.91H8V8.91c.43-.15.76-.48.91-.91H12v3.09Z";
   var pathdfilled = "M2 3.5c0 .56.3 1.04.75 1.3v6.4a1.5 1.5 0 1 0 2.05 2.05h1.95v1.95a1.5 1.5 0 1 0 2.05 2.05h6.4a1.5 1.5 0 1 0 2.05-2.05V8.8a1.5 1.5 0 1 0-2.05-2.05h-1.95V4.8a1.5 1.5 0 1 0-2.05-2.05H4.8A1.5 1.5 0 0 0 2 3.5Zm6.8 12.25a1.5 1.5 0 0 0-.55-.55v-1.95h2.95a1.5 1.5 0 1 0 2.05-2.05V8.25h1.95c.13.23.32.42.55.55v6.4a1.5 1.5 0 0 0-.55.55H8.8ZM4.25 11.2V4.8c.23-.13.42-.32.55-.55h6.4c.13.23.32.42.55.55v1.95H8.8A1.5 1.5 0 1 0 6.75 8.8v2.95H4.8a1.5 1.5 0 0 0-.55-.55Zm7.5 0a1.5 1.5 0 0 0-.55.55H8.25V8.8c.23-.13.42-.32.55-.55h2.95v2.95Z";
   
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