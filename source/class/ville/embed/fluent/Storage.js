/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Storage",
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

   var pathdregular = "M13 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM2 8.5A2.5 2.5 0 0 1 4.5 6h11A2.5 2.5 0 0 1 18 8.5v3a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 11.5v-3ZM4.5 7C3.67 7 3 7.67 3 8.5v3c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-11Z";
   var pathdfilled = "M2 8.5A2.5 2.5 0 0 1 4.5 6h11A2.5 2.5 0 0 1 18 8.5v3a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 11.5v-3ZM13 9a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm3 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z";
   
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