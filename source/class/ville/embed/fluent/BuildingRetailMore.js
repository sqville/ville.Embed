/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BuildingRetailMore",
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

   var pathdregular = "M7 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM4 3.3a1 1 0 0 1 .7-.3h10.6a1 1 0 0 1 .7.3l2.64 2.63c.76.77.22 2.07-.85 2.07H17v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8h-.79a1.21 1.21 0 0 1-.85-2.07L4 3.3ZM16 15V8H4v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1Zm1.79-8c.18 0 .28-.23.14-.36L15.3 4H4.71L2.07 6.64A.21.21 0 0 0 2.2 7H17.8Z";
   var pathdfilled = "M4 3.3a1 1 0 0 1 .7-.3h10.6a1 1 0 0 1 .7.3l2.64 2.63c.76.77.22 2.07-.85 2.07H2.2a1.21 1.21 0 0 1-.85-2.07L4 3.3ZM17 9H3v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V9ZM7 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z";
   
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