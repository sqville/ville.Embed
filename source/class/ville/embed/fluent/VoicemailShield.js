/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VoicemailShield",
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

   var pathdregular = "M8.73 9A2 2 0 1 1 7 8h6a2 2 0 0 1 1.83 1.18c-.11.07-.22.15-.3.25-.18.19-.36.35-.53.48a1 1 0 1 0-1.86.6c-.36.06-.65.26-.85.52A1.99 1.99 0 0 1 11.27 9H8.73ZM6 10a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm11-4v3.9c.33.26.66.43 1 .52V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h7.23a6.65 6.65 0 0 1-.18-1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1Zm-1.5 13c-.04 0-.08 0-.11-.02a5.67 5.67 0 0 1-1.76-.98c-.35-.3-.64-.63-.88-1a5.15 5.15 0 0 1-.75-2.64V11.87c0-.2.16-.37.35-.37 1.07 0 2.03-.46 2.9-1.39.07-.07.16-.11.25-.11s.18.04.24.11a3.89 3.89 0 0 0 2.9 1.39c.2 0 .36.17.36.38v2.48a5.15 5.15 0 0 1-.75 2.64c-.24.37-.53.7-.88 1a5.67 5.67 0 0 1-1.87 1Z";
   var pathdfilled = "M6 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 0 1 2-.09c-.55.42-1.09.59-1.65.59-.07 0-.14 0-.2.02A1 1 0 0 1 12 10Zm1-2a2 2 0 0 1 1.83 1.18c.2-.12.43-.18.66-.18h.01c.37 0 .72.15.98.43.5.54 1 .85 1.52.99V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h7.23a6.98 6.98 0 0 1-.23-1.6v-2.53c0-.3.1-.6.29-.84A1.99 1.99 0 0 1 11.27 9H8.73A2 2 0 1 1 7 8h6Zm2.5 11c-.04 0-.08 0-.11-.02a5.67 5.67 0 0 1-1.76-.98c-.35-.3-.64-.63-.88-1a5.15 5.15 0 0 1-.75-2.64V11.87c0-.2.16-.37.35-.37 1.07 0 2.03-.46 2.9-1.39.07-.07.16-.11.25-.11s.18.04.24.11a3.89 3.89 0 0 0 2.9 1.39c.2 0 .36.17.36.38v2.48a5.15 5.15 0 0 1-.75 2.64c-.24.37-.53.7-.88 1a5.67 5.67 0 0 1-1.87 1Z";
   
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