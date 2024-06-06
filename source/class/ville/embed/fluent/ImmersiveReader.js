/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ImmersiveReader",
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

   var pathdregular = "M18 4.5v5.7a1.5 1.5 0 0 0-1-.18V4.5a.5.5 0 0 0-.5-.5H12c-.83 0-1.5.67-1.5 1.5V12c-.38 0-.73.14-1 .38V5.5C9.5 4.67 8.83 4 8 4H3.5a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5H8c.39 0 .74-.15 1-.39.03.37.19.7.43.94-.4.28-.9.45-1.43.45H3.5A1.5 1.5 0 0 1 2 15.5v-11C2 3.67 2.67 3 3.5 3H8c.82 0 1.54.4 2 1 .46-.6 1.18-1 2-1h4.5c.83 0 1.5.67 1.5 1.5Zm-4.3 6.54c.18.08.3.26.3.46v6a.5.5 0 0 1-.85.35L11.29 16h-.79a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5h.8l1.85-1.85a.5.5 0 0 1 .54-.11Zm4.45.16c.12.16.28.45.44.87.26.68.41 1.5.41 2.43 0 .94-.15 1.75-.4 2.43-.17.42-.33.7-.45.87a.5.5 0 0 1-.85-.52l.12-.19a5.9 5.9 0 0 0 .58-2.6 5.9 5.9 0 0 0-.58-2.58l-.07-.11a.5.5 0 0 1 .8-.6Zm-1.43 1.77c-.1-.3-.2-.55-.27-.7a.5.5 0 1 0-.9.45A4.6 4.6 0 0 1 16 14.5a3.94 3.94 0 0 1-.37 1.6l-.08.18a.5.5 0 1 0 .9.44A5.5 5.5 0 0 0 17 14.5c0-.5-.1-1.02-.28-1.53Z";
   var pathdfilled = "M18 4.75v5.45a1.5 1.5 0 0 0-1.5 0V4.75a.25.25 0 0 0-.25-.25H12c-.69 0-1.25.56-1.25 1.25V12h-.25c-.52 0-.98.27-1.25.67V5.75c0-.69-.56-1.25-1.25-1.25H3.75a.25.25 0 0 0-.25.25v10.5c0 .14.11.25.25.25H8c.4 0 .77-.2 1-.5v.5c0 .42.18.8.46 1.08-.42.27-.92.42-1.46.42H3.75C2.78 17 2 16.22 2 15.25V4.75C2 3.78 2.78 3 3.75 3H8c.79 0 1.5.33 2 .86.5-.53 1.21-.86 2-.86h4.25c.97 0 1.75.78 1.75 1.75Zm.13 6.45c.12.16.29.45.45.87.25.68.4 1.5.4 2.43 0 .94-.15 1.75-.4 2.43-.16.42-.33.7-.45.87a.5.5 0 0 1-.84-.52l.11-.19a5.9 5.9 0 0 0 .58-2.6 5.9 5.9 0 0 0-.58-2.58l-.07-.11a.5.5 0 1 1 .8-.6Zm-4.44-.16c.19.08.31.26.31.46v6a.5.5 0 0 1-.85.35L11.29 16h-.79a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5h.8l1.85-1.85a.5.5 0 0 1 .54-.11Zm3.02 1.93c-.1-.3-.2-.55-.28-.7a.5.5 0 0 0-.9.45 4.6 4.6 0 0 1 .45 1.78 3.94 3.94 0 0 1-.37 1.6l-.07.18a.5.5 0 0 0 .89.44 5.53 5.53 0 0 0 .55-2.22c0-.5-.1-1.02-.27-1.53Z";
   
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