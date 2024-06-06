/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WindowMultiple",
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

   var pathdregular = "M4.5 2A2.5 2.5 0 0 0 2 4.5v8A2.5 2.5 0 0 0 4.5 15h8a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 12.5 2h-8ZM3 12.5V6h11v6.5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 0 1 3 12.5ZM3 5v-.5C3 3.67 3.67 3 4.5 3h8c.83 0 1.5.67 1.5 1.5V5H3Zm4.5 13a2.5 2.5 0 0 1-2.45-2h1.04c.2.58.76 1 1.41 1H14a3 3 0 0 0 3-3V7.5c0-.65-.42-1.2-1-1.41V5.05a2.5 2.5 0 0 1 2 2.45V14a4 4 0 0 1-4 4H7.5Z";
   var pathdfilled = "M4.5 2A2.5 2.5 0 0 0 2 4.5v8A2.5 2.5 0 0 0 4.5 15h8a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 12.5 2h-8ZM3 12.5V6h11v6.5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 0 1 3 12.5ZM7.5 18a2.5 2.5 0 0 1-2.45-2h1.04c.2.58.76 1 1.41 1H14a3 3 0 0 0 3-3V7.5c0-.65-.42-1.2-1-1.41V5.05a2.5 2.5 0 0 1 2 2.45V14a4 4 0 0 1-4 4H7.5Z";
   
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