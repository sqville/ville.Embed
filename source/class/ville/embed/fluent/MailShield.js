/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MailShield",
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

   var pathdregular = "M18 2.62a4.06 4.06 0 0 1-1-.27 5.16 5.16 0 0 1-1.72-1.23.39.39 0 0 0-.56 0 4.5 4.5 0 0 1-3.32 1.55.4.4 0 0 0-.4.41v2.77A5.5 5.5 0 0 0 12.01 9c.27.37.6.7.99 1 .52.4 1.15.73 1.87.98.09.03.17.03.26 0 2.56-.89 3.87-2.71 3.87-5.4V3a.4.4 0 0 0-.4-.33c-.2 0-.4-.02-.6-.05ZM10 4H4.5A2.5 2.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-4.03c-.3.27-.64.52-1 .74v3.29c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5V7.96l6.75 3.97.08.04c.14.05.3.04.42-.04l2.05-1.2a6.05 6.05 0 0 1-.76-.72l-1.54.91L3 6.8v-.3C3 5.67 3.67 5 4.5 5H10V4Z";
   var pathdfilled = "M18 2.62a4.06 4.06 0 0 1-1-.27 5.16 5.16 0 0 1-1.72-1.23.39.39 0 0 0-.56 0 4.5 4.5 0 0 1-3.32 1.55.4.4 0 0 0-.4.41v2.77A5.5 5.5 0 0 0 12.01 9c.27.37.6.7.99 1 .52.4 1.15.73 1.87.98.09.03.17.03.26 0 2.56-.89 3.87-2.71 3.87-5.4V3a.4.4 0 0 0-.4-.33c-.2 0-.4-.02-.6-.05Zm-5.7 8.1.1.07c.61.48 1.34.85 2.15 1.13.29.1.61.1.9 0A7.36 7.36 0 0 0 18 10.47v4.03a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.37l7.75 4.56c.15.1.35.1.5 0l2.05-1.2ZM10 4V5.88a6.49 6.49 0 0 0 1.54 4.13l-1.54.91-7.98-4.7A2.5 2.5 0 0 1 4.5 4H10Z";
   
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