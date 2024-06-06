/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PhoneSpeaker",
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

   var pathdregular = "M8 14a.5.5 0 0 0 0 1h1v-.5c0-.18.03-.34.09-.5H8Zm-2 3h3.09c.2.58.75 1 1.4 1H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v7.09a1.5 1.5 0 0 0-1 0V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm7.7-4.96c.18.08.3.26.3.46v6a.5.5 0 0 1-.85.35L11.29 17h-.79a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5h.8l1.85-1.85a.5.5 0 0 1 .54-.11Zm3.95.16c.12.16.29.45.44.87.26.68.41 1.5.41 2.43 0 .94-.15 1.75-.4 2.43-.16.42-.33.7-.45.87a.5.5 0 0 1-.85-.52l.12-.19a5.9 5.9 0 0 0 .58-2.6 5.9 5.9 0 0 0-.58-2.58l-.07-.11a.5.5 0 0 1 .8-.6Zm-1.43 1.77c-.1-.3-.2-.55-.27-.7a.5.5 0 1 0-.9.45 4.6 4.6 0 0 1 .45 1.78 3.94 3.94 0 0 1-.37 1.6l-.08.18a.5.5 0 1 0 .9.44 5.5 5.5 0 0 0 .55-2.22c0-.5-.1-1.02-.28-1.53Z";
   var pathdfilled = "M5.5 2C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h4.99A1.5 1.5 0 0 1 9 16.5V15H8a.5.5 0 0 1 0-1h1.09c.2-.58.76-1 1.41-1h.38l1.56-1.56a1.5 1.5 0 0 1 1.56-.35V3.5c0-.83-.67-1.5-1.5-1.5h-7Zm8.2 10.04c.18.08.3.26.3.46v6a.5.5 0 0 1-.85.35L11.29 17h-.79a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5h.8l1.85-1.85a.5.5 0 0 1 .54-.11Zm3.95.16c.12.16.29.45.44.87.26.68.41 1.5.41 2.43 0 .94-.15 1.75-.4 2.43-.16.42-.33.7-.45.87a.5.5 0 0 1-.85-.52l.12-.19a5.9 5.9 0 0 0 .58-2.6 5.9 5.9 0 0 0-.58-2.58l-.07-.11a.5.5 0 0 1 .8-.6Zm-1.43 1.77c-.1-.3-.2-.55-.27-.7a.5.5 0 1 0-.9.45 4.6 4.6 0 0 1 .45 1.78 3.94 3.94 0 0 1-.37 1.6l-.08.18a.5.5 0 1 0 .9.44 5.5 5.5 0 0 0 .55-2.22c0-.5-.1-1.02-.28-1.53Z";
   
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