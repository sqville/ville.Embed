/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PersonSquareCheckmark",
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

   var pathdregular = "M10 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-1 9.5c0 .14 0 .28.02.41-.68-.13-1.3-.39-1.8-.8A3.25 3.25 0 0 1 6 11.5c0-.83.67-1.5 1.5-1.5h3.84A5.5 5.5 0 0 0 9 14.5ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.6c-.16-.32-.3-.65-.4-1H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v3.2c.35.1.68.24 1 .4V6a3 3 0 0 0-3-3H6Zm13 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z";
   var pathdfilled = "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.6a5.48 5.48 0 0 0-5.66.4H7.5c-.83 0-1.5.67-1.5 1.5 0 1.12.46 2.01 1.21 2.61.5.41 1.13.67 1.8.8.06.75.27 1.45.59 2.09H6a3 3 0 0 1-3-3V6Zm7-1a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm9 9.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z";
   
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