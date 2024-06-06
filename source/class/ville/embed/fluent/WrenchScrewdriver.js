/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WrenchScrewdriver",
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

   var pathdregular = "M17 15.55V10.5c0-.11-.03-.2-.07-.27a.37.37 0 0 0-.17-.15.87.87 0 0 0-.24-.06 2.08 2.08 0 0 0-.25-.02H16V5.12l.13-.24.17-.32.14-.32c.04-.1.06-.18.06-.24s-.03-.17-.07-.32a7.43 7.43 0 0 0-.34-1c-.05-.15-.1-.26-.11-.34a.57.57 0 0 0-.2-.25.47.47 0 0 0-.28-.09h-2c-.1 0-.2.04-.3.1a.46.46 0 0 0-.18.24 13.58 13.58 0 0 1-.3.86 43.7 43.7 0 0 0-.22.8c0 .07.02.16.06.25a7.72 7.72 0 0 0 .44.87V10h-.27c-.09 0-.18 0-.26.02a.72.72 0 0 0-.24.07.44.44 0 0 0-.17.14.48.48 0 0 0-.06.27v5.05c0 .34.07.66.2.96a2.58 2.58 0 0 0 1.35 1.3 2.47 2.47 0 0 0 1.9 0c.3-.14.57-.31.8-.53.23-.22.41-.48.55-.77.13-.3.2-.62.2-.96ZM15 10h-1V5a.5.5 0 0 0-.05-.23l-.41-.8.32-.97h1.28l.32.96-.4.81A.5.5 0 0 0 15 5v5Zm-2 2v-1h3v1h-3Zm3 1v2.5c0 .2-.03.4-.12.58a1.5 1.5 0 0 1-1.96.8A1.5 1.5 0 0 1 13 15.5V13h3ZM6 2.54a.5.5 0 0 0-.69-.46 4.5 4.5 0 0 0-.31 8.2V16a2 2 0 0 0 4 0v-5.72a4.5 4.5 0 0 0-.31-8.2.5.5 0 0 0-.69.46V6a1 1 0 1 1-2 0V2.54ZM3.5 6.25c0-1.19.6-2.24 1.5-2.87V6a2 2 0 1 0 4 0V3.38a3.5 3.5 0 0 1-.69 6.12.5.5 0 0 0-.31.46V16a1 1 0 1 1-2 0V9.96a.5.5 0 0 0-.31-.46A3.5 3.5 0 0 1 3.5 6.25Z";
   var pathdfilled = "M17 12v-1.5c0-.11-.03-.2-.07-.27a.37.37 0 0 0-.17-.15.87.87 0 0 0-.24-.06 2.08 2.08 0 0 0-.25-.02H16V5.12l.13-.24.17-.32.14-.32c.04-.1.06-.18.06-.24s-.03-.17-.07-.32a7.43 7.43 0 0 0-.34-1c-.05-.15-.1-.26-.11-.34a.57.57 0 0 0-.2-.25.47.47 0 0 0-.28-.09h-2c-.1 0-.2.04-.3.1a.46.46 0 0 0-.18.24 13.58 13.58 0 0 1-.3.86 43.7 43.7 0 0 0-.22.8c0 .07.02.16.06.25a7.72 7.72 0 0 0 .44.87V10h-.27c-.09 0-.18 0-.26.02a.72.72 0 0 0-.24.07.44.44 0 0 0-.17.14.48.48 0 0 0-.06.27V12h5Zm0 1h-5v2.55c0 .34.07.66.2.96a2.58 2.58 0 0 0 1.35 1.3 2.47 2.47 0 0 0 1.9 0c.3-.14.57-.31.8-.53.23-.22.41-.48.55-.77.13-.3.2-.62.2-.96V13ZM5.78 2.13c.14.09.22.24.22.41V6a1 1 0 0 0 2 0V2.54a.5.5 0 0 1 .69-.46 4.5 4.5 0 0 1 .31 8.2V16a2 2 0 1 1-4 0v-5.72a4.5 4.5 0 0 1 .31-8.2.5.5 0 0 1 .47.05Z";
   
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