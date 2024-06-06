/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Iot",
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

   var pathdregular = "M16 4a2 2 0 0 1-2.65 1.89l-1.28 1.94A3 3 0 0 1 13 9.99l1.17.2a2 2 0 1 1-.16.99l-1.17-.2a3.01 3.01 0 0 1-1.43 1.67l.45 1.36H12a2 2 0 1 1-1.1.31l-.44-1.35a3.02 3.02 0 0 1-2.87-1.18l-1.64.78A2 2 0 0 1 4 15a2 2 0 1 1 1.5-3.32l1.64-.79A3 3 0 0 1 7.77 8l-.93-1.17a2 2 0 1 1 .77-.63l.95 1.18a2.99 2.99 0 0 1 2.68-.1l1.28-1.94A2 2 0 1 1 16 4Zm-1 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM6 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-5 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm8 3a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm3-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z";
   var pathdfilled = "M16 4a2 2 0 0 1-2.65 1.89l-1.28 1.94A3 3 0 0 1 13 9.99l1.17.2a2 2 0 1 1-.16.99l-1.17-.2a3.01 3.01 0 0 1-1.43 1.67l.45 1.36H12a2 2 0 1 1-1.1.31l-.44-1.35a3.02 3.02 0 0 1-2.87-1.18l-1.64.78A2 2 0 0 1 4 15a2 2 0 1 1 1.5-3.32l1.64-.79A3 3 0 0 1 7.77 8l-.93-1.17a2 2 0 1 1 .77-.63l.95 1.18a2.99 2.99 0 0 1 2.68-.1l1.28-1.94A2 2 0 1 1 16 4Z";
   
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