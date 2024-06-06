/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextWrapOff",
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

   var pathdregular = "M2.85 2.15a.5.5 0 1 0-.7.7L3.29 4H2.5a.5.5 0 0 0 0 1h1.8l4 4H2.5a.5.5 0 0 0 0 1h6.8l2.52 2.53a.5.5 0 0 0-.17.12l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 0 0 .7-.7l-.64-.65h2.58l2.86 2.85a.5.5 0 0 0 .7-.7l-15-15ZM13.3 14h-1.58l.64-.65a.5.5 0 0 0 .12-.17l.82.82Zm-2.17-5 1 1H16a2 2 0 0 1 .12 4l.84.84A3 3 0 0 0 16 9h-4.88Zm-5-5 1 1H17.5a.5.5 0 0 0 0-1H6.12ZM2 14.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z";
   var pathdfilled = "M2.15 2.15c.2-.2.5-.2.7 0l15 15a.5.5 0 0 1-.7.7L14.29 15h-1.94l.23.27a.75.75 0 0 1-1.16.96l-1.25-1.5a.75.75 0 0 1 0-.96l1.25-1.5a.75.75 0 0 1 .07-.07L9.3 10H2.75a.75.75 0 0 1 0-1.5h5.04L4.3 5H2.75a.75.75 0 0 1 0-1.5h.04l-.64-.65a.5.5 0 0 1 0-.7Zm8.47 6.35h5.13a3.25 3.25 0 0 1 1.16 6.29l-1.29-1.29h.13a1.75 1.75 0 1 0 0-3.5h-3.63l-1.5-1.5ZM7.12 5l-1.5-1.5h11.63a.75.75 0 0 1 0 1.5H7.12Zm-4.37 8.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z";
   
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