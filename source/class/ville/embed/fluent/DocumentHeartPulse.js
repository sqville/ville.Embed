/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentHeartPulse",
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

   var pathdregular = "M6 2a2 2 0 0 0-2 2v5c.34.02.67.07 1 .17V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1H9.45l-1 1H14a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6Zm8.8 5h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7Zm-9.64 4.54A1.85 1.85 0 0 0 2 13H1a2.84 2.84 0 0 1 4.86-2.17l.13.14.14-.14A2.85 2.85 0 0 1 11 13h-1a1.85 1.85 0 0 0-3.15-1.46l-.5.5a.5.5 0 0 1-.7 0l-.5-.5ZM2.96 16h1.42L6 17.62 7.62 16h1.42l-2.68 2.68a.5.5 0 0 1-.71 0L2.97 16Zm1.54-4c.2 0 .36.1.45.28l1.14 2.27L7.1 13.2a.5.5 0 0 1 .76-.05l.85.85H10a.5.5 0 0 1 0 1H8.5a.5.5 0 0 1-.35-.15l-.6-.59L6.4 15.8a.5.5 0 0 1-.84-.08l-1.06-2.1-.55 1.1a.5.5 0 0 1-.45.28H2a.5.5 0 0 1 0-1h1.2l.86-1.72A.5.5 0 0 1 4.5 12Z";
   var pathdfilled = "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H8.45l2.43-2.43A3.85 3.85 0 0 0 6 9.66c-.6-.41-1.3-.63-2-.66V3.5C4 2.67 4.67 2 5.5 2H10Zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25Zm-.83 8.58a2.85 2.85 0 0 0-4.03 0l-.14.14-.14-.14A2.85 2.85 0 0 0 1 13h1.7l.55-.83a1.5 1.5 0 0 1 2.54.06l.35.59.16-.22a1.5 1.5 0 0 1 2.26-.16l.56.56H11a2.84 2.84 0 0 0-.83-2.17Zm-4.52 7.85L2.97 16h1.58l.16.27a1.5 1.5 0 0 0 2.49.13l.3-.4h1.53l-2.68 2.68a.5.5 0 0 1-.7 0ZM4.5 12.5c.17 0 .33.1.42.24l1.12 1.87L7.1 13.2a.5.5 0 0 1 .75-.05l.86.85H10a.5.5 0 0 1 0 1H8.5a.5.5 0 0 1-.35-.15l-.6-.59L6.4 15.8a.5.5 0 0 1-.83-.04l-1.1-1.83-.55.85a.5.5 0 0 1-.42.22H2a.5.5 0 0 1 0-1h1.23l.85-1.28a.5.5 0 0 1 .43-.22Z";
   
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