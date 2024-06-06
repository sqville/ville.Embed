/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Sticker",
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

   var pathdregular = "M7.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3 6v8a3 3 0 0 0 3 3h5.38a1.97 1.97 0 0 0 1.41-.59l3.62-3.62a2 2 0 0 0 .59-1.41V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3Zm13 0v5h-2.25c-1.2 0-2.24.78-2.6 1.86-.34.09-.72.14-1.15.14a4.5 4.5 0 0 1-2.51-.74 1.97 1.97 0 0 1-.14-.11.5.5 0 0 0-.7.7v.01l.02.02a2 2 0 0 0 .22.18 5.5 5.5 0 0 0 4.11.86V16H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2Zm-3.91 9.7a1 1 0 0 1-.09.08v-2.03c0-.97.78-1.75 1.75-1.75h2.03l-.07.09-3.62 3.62Z";
   var pathdfilled = "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h5v-3.08a5.87 5.87 0 0 1-3.47-.47 4.2 4.2 0 0 1-.86-.57l-.01-.02h-.01a.5.5 0 0 1 .7-.72 1 1 0 0 0 .14.12c.1.07.26.18.48.3A4.5 4.5 0 0 0 10 13c.43 0 .81-.05 1.15-.14a2.75 2.75 0 0 1 2.6-1.86H17V6a3 3 0 0 0-3-3H6Zm1.5 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-.7 8.41a2 2 0 0 1-.8.5v-3.16c0-.97.78-1.75 1.75-1.75h3.15a2 2 0 0 1-.49.8L12.8 16.4Z";
   
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