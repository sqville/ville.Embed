/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentKey",
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

   var pathdregular = "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h3v-1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v1.13c.32-.08.64-.12.97-.13H16V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6Zm8.8 5h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7Zm-4.65 11.85c.1.1.21.15.35.15h2c.11 0 .2-.03.27-.07.07-.04.12-.1.15-.17a.86.86 0 0 0 .06-.24l.02-.25V18l.56-.02a.47.47 0 0 0 .3-.12c.07-.07.11-.17.12-.3L14 17c.5 0 .63.02.77-.07a.5.5 0 0 0 .15-.17.65.65 0 0 0 .07-.24c.03-.23.01-.46.01-.7.17.07.35.11.52.14a2.87 2.87 0 0 0 2.62-.86A3.11 3.11 0 0 0 19 13a2.94 2.94 0 0 0-.88-2.13 3 3 0 0 0-5.03 2.84l-2.94 2.94c-.1.1-.15.21-.15.35v1.5c0 .14.05.25.15.35Zm7.35-6.6c0 .41-.34.75-.75.75a.75.75 0 0 1-.75-.75c0-.41.34-.75.75-.75s.75.34.75.75Z";
   var pathdfilled = "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v1h-.03a3.91 3.91 0 0 0-3.64 2.38 3.72 3.72 0 0 0-.3 1.98l-2.59 2.58C9.16 16.22 9 16.6 9 17v1H5.5A1.5 1.5 0 0 1 4 16.5v-13C4 2.67 4.67 2 5.5 2H10Zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25Zm-.85 16.6c.1.1.21.15.35.15h2c.11 0 .2-.03.27-.07.07-.04.12-.1.15-.17a.86.86 0 0 0 .06-.24l.02-.25V18l.56-.02a.47.47 0 0 0 .3-.12c.07-.07.11-.17.12-.3L14 17h.5c.1 0 .2-.02.27-.07a.5.5 0 0 0 .15-.17.65.65 0 0 0 .07-.24 2.34 2.34 0 0 0 .01-.5v-.2c.17.07.35.11.52.14a2.87 2.87 0 0 0 2.62-.86A3.11 3.11 0 0 0 19 13a2.94 2.94 0 0 0-.88-2.13 3 3 0 0 0-5.03 2.84l-2.94 2.94c-.1.1-.15.21-.15.35v1.5c0 .14.05.25.15.35Zm7.13-7.13c.15.14.22.32.22.53 0 .2-.07.39-.22.53a.72.72 0 0 1-.53.22.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53c0-.2.07-.39.22-.53a.72.72 0 0 1 .53-.22c.2 0 .39.07.53.22Z";
   
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