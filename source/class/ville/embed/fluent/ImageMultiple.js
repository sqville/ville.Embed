/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ImageMultiple",
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

   var pathdregular = "M11.5 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v6c0 .37.1.72.28 1.02l3.3-3.31a2 2 0 0 1 2.83 0l3.31 3.3A2 2 0 0 0 14 12V6a2 2 0 0 0-2-2H6Zm3.7 6.41a1 1 0 0 0-1.4 0l-3.32 3.31A2 2 0 0 0 6 14h6a2 2 0 0 0 1.02-.28l-3.31-3.3ZM8 17a3 3 0 0 1-2.24-1h6.74a3.5 3.5 0 0 0 3.5-3.5V5.76A3 3 0 0 1 17 8v4.5a4.5 4.5 0 0 1-4.5 4.5H8Z";
   var pathdfilled = "M6 3a3 3 0 0 0-3 3v6c0 .65.2 1.25.55 1.74L7.6 9.7a2 2 0 0 1 2.82 0l4.04 4.03c.34-.5.55-1.1.55-1.74V6a3 3 0 0 0-3-3H6Zm6.5 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1.24 7.95L9.7 10.4a1 1 0 0 0-1.42 0l-4.03 4.04c.5.34 1.1.55 1.74.55h6c.65 0 1.25-.2 1.74-.55ZM5.76 16A3 3 0 0 0 8 17h4.5a4.5 4.5 0 0 0 4.5-4.5V8a3 3 0 0 0-1-2.24v6.74c0 .12 0 .24-.02.36A3.5 3.5 0 0 1 12.5 16H5.76Z";
   
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