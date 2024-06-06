/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BuildingHome",
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

   var pathdregular = "M3.25 3a.25.25 0 0 0-.25.25v10.5c0 .14.11.25.25.25H7.5v1H3.25C2.56 15 2 14.44 2 13.75V3.25C2 2.56 2.56 2 3.25 2h5.5C9.44 2 10 2.56 10 3.25v2.5c0 .14.11.25.25.25h1.5c.69 0 1.25.56 1.25 1.25V8c-.35.04-.7.16-1 .37V7.25a.25.25 0 0 0-.25-.25h-1.5C9.56 7 9 6.44 9 5.75v-2.5A.25.25 0 0 0 8.75 3h-5.5Zm10.81 6.28c-.47-.4-1.15-.4-1.62 0l-3.47 2.96c-.3.26-.47.63-.47 1.02v4.61C8.5 18.5 9 19 9.63 19h1.74c.63 0 1.13-.5 1.13-1.13v-1.75c0-.06.06-.12.13-.12h1.24c.07 0 .13.06.13.13v1.74c0 .63.5 1.13 1.13 1.13h1.74c.63 0 1.13-.5 1.13-1.13v-4.61c0-.4-.17-.76-.47-1.02l-3.47-2.96Zm-.97.77c.1-.08.23-.08.32 0L16.88 13c.08.07.12.16.12.26v4.61c0 .07-.06.13-.13.13h-1.75a.12.12 0 0 1-.12-.13v-1.75c0-.62-.5-1.12-1.13-1.12h-1.24c-.63 0-1.13.5-1.13 1.13v1.74c0 .07-.06.13-.13.13H9.63a.12.12 0 0 1-.13-.13v-4.61c0-.1.04-.2.12-.26l3.47-2.95ZM5.5 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 1.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.25 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8 7a.75.75 0 1 1-1.5 0A.75.75 0 0 1 8 7Zm-.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z";
   var pathdfilled = "M3.25 2C2.56 2 2 2.56 2 3.25v10.5c0 .69.56 1.25 1.25 1.25H7.5v-1.74c0-.68.3-1.33.82-1.78l3.47-2.96c.35-.3.78-.47 1.21-.52v-.75C13 6.56 12.44 6 11.75 6h-1.5a.25.25 0 0 1-.25-.25v-2.5C10 2.56 9.44 2 8.75 2h-5.5Zm1.5 3.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM5.5 7A.75.75 0 1 1 4 7a.75.75 0 0 1 1.5 0Zm-.75 3a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM8 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM8 9.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm6.06.03c-.47-.4-1.15-.4-1.62 0l-3.47 2.96c-.3.26-.47.63-.47 1.02v4.61C8.5 18.5 9 19 9.63 19h1.74c.63 0 1.13-.5 1.13-1.13v-1.75c0-.06.06-.12.13-.12h1.24c.07 0 .13.06.13.13v1.74c0 .63.5 1.13 1.13 1.13h1.74c.63 0 1.13-.5 1.13-1.13v-4.61c0-.4-.17-.76-.47-1.02l-3.47-2.96Zm-.97.77c.1-.08.23-.08.32 0L16.88 13c.08.07.12.16.12.26v4.61c0 .07-.06.13-.13.13h-1.75a.12.12 0 0 1-.12-.13v-1.75c0-.62-.5-1.12-1.13-1.12h-1.24c-.63 0-1.13.5-1.13 1.13v1.74c0 .07-.06.13-.13.13H9.63a.12.12 0 0 1-.13-.13v-4.61c0-.1.04-.2.12-.26l3.47-2.95Z";
   
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