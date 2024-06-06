/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LaptopShield",
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

   var pathdregular = "M3 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v1.9c-.17-.13-.35-.29-.52-.47-.14-.15-.3-.26-.48-.33V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6v.39l.05.61H5a2 2 0 0 1-2-2V7Zm8.6 9a5.73 5.73 0 0 1-.36-1H2.5a.5.5 0 0 0 0 1h9.1Zm3.9 2c-.04 0-.07 0-.1-.02a5.67 5.67 0 0 1-1.77-.98c-.35-.3-.64-.63-.88-1a5.15 5.15 0 0 1-.74-2.64V10.87c0-.2.15-.37.34-.37 1.07 0 2.03-.46 2.9-1.39.07-.07.16-.11.25-.11s.18.04.25.11a3.89 3.89 0 0 0 2.9 1.39c.2 0 .35.17.35.38v2.48a5.15 5.15 0 0 1-.75 2.64c-.24.37-.53.7-.88 1a5.67 5.67 0 0 1-1.87 1Z";
   var pathdfilled = "M4.5 5C3.67 5 3 5.67 3 6.5v6c0 .83.67 1.5 1.5 1.5h6.55c-.02-.2-.04-.4-.04-.6v-2.53c0-.69.53-1.37 1.34-1.37.74 0 1.46-.3 2.17-1.07.26-.28.61-.43.98-.43s.72.15.98.43c.17.18.35.34.52.48V6.5c0-.83-.67-1.5-1.5-1.5h-11Zm-2 10h8.74c.1.35.21.68.37 1H2.5a.5.5 0 0 1 0-1Zm13 3c-.04 0-.07 0-.1-.02a5.67 5.67 0 0 1-1.77-.98c-.35-.3-.64-.63-.88-1a5.15 5.15 0 0 1-.74-2.64V10.87c0-.2.15-.37.34-.37 1.07 0 2.03-.46 2.9-1.39.07-.07.16-.11.25-.11s.18.04.25.11a3.89 3.89 0 0 0 2.9 1.39c.2 0 .35.17.35.38v2.48a5.15 5.15 0 0 1-.75 2.64c-.24.37-.53.7-.88 1a5.67 5.67 0 0 1-1.87 1Z";
   
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