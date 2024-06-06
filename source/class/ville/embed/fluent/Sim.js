/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Sim",
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

   var pathdregular = "M8.5 9h3c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 0 1 7 13.5v-3C7 9.67 7.67 9 8.5 9ZM8 10.5v.5h2v-1H8.5a.5.5 0 0 0-.5.5ZM8 12v1.5c0 .28.22.5.5.5H10v-2H8Zm3.5 2a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H11v4h.5ZM7 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7.54a3 3 0 0 0-.88-2.13L12.6 2.88A3 3 0 0 0 10.46 2H7ZM5 5c0-1.1.9-2 2-2h3.46a2 2 0 0 1 1.42.59l2.53 2.53A2 2 0 0 1 15 7.54V15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5Z";
   var pathdfilled = "M4 5a3 3 0 0 1 3-3h3.46a3 3 0 0 1 2.13.88l2.53 2.53A3 3 0 0 1 16 7.54V15a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5Zm3 5.5v.5h3V9H8.5C7.67 9 7 9.67 7 10.5ZM7 12v1.5c0 .83.67 1.5 1.5 1.5H10v-3H7Zm4.5 3c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5H11v6h.5Z";
   
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