/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableCellsSplit",
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

   var pathdregular = "M10 8v4H9V8h1Zm7-2.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9Zm-13 9V14h5v2H5.36A1.5 1.5 0 0 1 4 14.5ZM9 4v2H4v-.64A1.5 1.5 0 0 1 5.5 4H9Zm1 2V4h4.64A1.5 1.5 0 0 1 16 5.5V6h-6Zm6 7H4V7h12v6Zm0 1.5v.14A1.5 1.5 0 0 1 14.5 16H10v-2h6v.5Z";
   var pathdfilled = "M10 6h7v-.5A2.5 2.5 0 0 0 14.5 3H10v3Zm7 7V7H3v6h14Zm-7-5v4H9V8h1Zm0 9h4.5a2.5 2.5 0 0 0 2.5-2.5V14h-7v3Zm-1-3H3v.5A2.5 2.5 0 0 0 5.5 17H9v-3Zm0-8V3H5.5A2.5 2.5 0 0 0 3 5.5V6h6Z";
   
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