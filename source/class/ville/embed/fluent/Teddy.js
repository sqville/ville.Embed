/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Teddy",
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

   var pathdregular = "M2 6.5a3.5 3.5 0 0 0 1.4 2.8c-.26.69-.4 1.43-.4 2.2 0 3.63 3.17 6.5 7 6.5s7-2.87 7-6.5c0-.77-.14-1.51-.4-2.2a3.5 3.5 0 1 0-5.31-4.19 7.54 7.54 0 0 0-2.58 0A3.5 3.5 0 0 0 2 6.5ZM5.5 4c.97 0 1.8.55 2.22 1.35a6.92 6.92 0 0 0-3.87 3.03A2.5 2.5 0 0 1 5.5 4Zm6.78 1.35a2.5 2.5 0 1 1 3.87 3.03 6.92 6.92 0 0 0-3.87-3.03ZM10 6c3.35 0 6 2.5 6 5.5a5.2 5.2 0 0 1-1.2 3.3 5.5 5.5 0 0 0-9.6 0A5.2 5.2 0 0 1 4 11.5C4 8.5 6.65 6 10 6Zm4.06 9.55A6.27 6.27 0 0 1 10 17c-1.57 0-3-.55-4.06-1.45a4.51 4.51 0 0 1 2.73-2.35 1.5 1.5 0 0 0 2.66 0c1.2.37 2.19 1.23 2.73 2.35Z";
   var pathdfilled = "M5.5 3a3.5 3.5 0 0 0-2.85 5.53 7.92 7.92 0 0 1 5.5-4.32A3.5 3.5 0 0 0 5.5 3ZM18 6.5c0 .76-.24 1.46-.65 2.03a7.92 7.92 0 0 0-5.5-4.32A3.5 3.5 0 0 1 18 6.5Zm-15 5C3 7.87 6.17 5 10 5s7 2.87 7 6.5a6.2 6.2 0 0 1-1.76 4.31 5.5 5.5 0 0 0-10.48 0A6.2 6.2 0 0 1 3 11.5Zm8.33 1.7a4.5 4.5 0 0 1 3.07 3.35A7.33 7.33 0 0 1 10 18c-1.66 0-3.2-.54-4.4-1.45a4.5 4.5 0 0 1 3.07-3.35 1.5 1.5 0 0 0 2.66 0Z";
   
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