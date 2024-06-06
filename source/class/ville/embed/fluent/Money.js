/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Money",
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

   var pathdregular = "M7 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM3.5 4C2.67 4 2 4.67 2 5.5v7c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-11ZM3 5.5c0-.28.22-.5.5-.5H5v1a1 1 0 0 1-1 1H3V5.5ZM3 8h1a2 2 0 0 0 2-2V5h6v1c0 1.1.9 2 2 2h1v2h-1a2 2 0 0 0-2 2v1H6v-1a2 2 0 0 0-2-2H3V8Zm10-3h1.5c.28 0 .5.22.5.5V7h-1a1 1 0 0 1-1-1V5Zm2 6v1.5a.5.5 0 0 1-.5.5H13v-1a1 1 0 0 1 1-1h1ZM5 13H3.5a.5.5 0 0 1-.5-.5V11h1a1 1 0 0 1 1 1v1Zm12-.5a2.5 2.5 0 0 1-2.5 2.5H4.09c.2.58.76 1 1.41 1h9a3.5 3.5 0 0 0 3.5-3.5v-5c0-.65-.42-1.2-1-1.41v6.41Z";
   var pathdfilled = "M3.5 4C2.67 4 2 4.67 2 5.5v7c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-11ZM6 5v1a2 2 0 0 1-2 2H3V7h1a1 1 0 0 0 1-1V5h1Zm3 5.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM3 11v-1h1a2 2 0 0 1 2 2v1H5v-1a1 1 0 0 0-1-1H3Zm11 0a1 1 0 0 0-1 1v1h-1v-1c0-1.1.9-2 2-2h1v1h-1Zm0-4h1v1h-1a2 2 0 0 1-2-2V5h1v1a1 1 0 0 0 1 1Zm3 5.5a2.5 2.5 0 0 1-2.5 2.5H4.09c.2.58.76 1 1.41 1h9a3.5 3.5 0 0 0 3.5-3.5v-5c0-.65-.42-1.2-1-1.41v6.41Z";
   
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