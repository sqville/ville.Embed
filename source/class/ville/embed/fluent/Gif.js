/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Gif",
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

   var pathdregular = "M15.4 3c1.39 0 2.52 1.19 2.6 2.68v8.48c0 1.51-1.09 2.75-2.45 2.84H4.6c-1.39 0-2.52-1.19-2.6-2.68V5.84C2 4.33 3.09 3.1 4.45 3H15.4Zm-.15 1H4.75C3.82 4 3.07 4.8 3 5.8V14.07c0 1.02.72 1.86 1.63 1.93h10.62c.93 0 1.68-.8 1.75-1.8V5.93c0-1.02-.72-1.86-1.63-1.93h-.12Zm-8.4 3c.62 0 1.15.1 1.58.3.27.12.38.43.24.67a.56.56 0 0 1-.72.22C7.68 8.07 7.3 8 6.85 8c-1.03 0-1.77.83-1.77 2 0 1.12.81 2 1.77 2 .6 0 1-.35 1.06-.67v-.83h-.37c-.3 0-.54-.22-.54-.5 0-.25.2-.45.44-.5h1.02c.26 0 .49.18.53.41l.01.1v1.24C9 12.12 8.11 13 6.85 13A2.92 2.92 0 0 1 4 10c0-1.68 1.18-3 2.85-3ZM11 7a.5.5 0 0 1 .5.41v5.09a.5.5 0 0 1-1 .09V7.5c0-.28.22-.5.5-.5Zm4.5 0a.5.5 0 0 1 .09 1H14v2h1.5a.5.5 0 0 1 .09 1H14v1.5a.5.5 0 0 1-1 .09V7.5c0-.28.22-.5.5-.5h2Z";
   var pathdfilled = "M15.4 3c1.39 0 2.52 1.19 2.6 2.68v8.48c0 1.51-1.09 2.75-2.45 2.84H4.6c-1.39 0-2.52-1.19-2.6-2.68V5.84C2 4.33 3.09 3.1 4.45 3H15.4ZM6.85 7C5.18 7 4 8.32 4 10c0 1.64 1.26 3 2.85 3 1.2 0 2.07-.8 2.14-1.63l.01-.12V9.9a.52.52 0 0 0-.44-.4h-.1l-.92-.01h-.1A.51.51 0 0 0 7 10c0 .25.2.45.44.5h.48v.83c-.07.32-.47.67-1.07.67-.96 0-1.77-.88-1.77-2 0-1.17.74-2 1.77-2 .46 0 .83.07 1.1.2.26.12.59.02.72-.23.14-.24.03-.55-.24-.67C8 7.1 7.47 7 6.85 7ZM11 7a.5.5 0 0 0-.5.41v5.18a.5.5 0 0 0 1 0V7.41A.5.5 0 0 0 11 7Zm4.5 0h-2a.5.5 0 0 0-.5.41v5.18a.5.5 0 0 0 1 0V11h1.59a.5.5 0 0 0 0-1H14V8h1.59a.5.5 0 0 0 0-1h-.09Z";
   
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