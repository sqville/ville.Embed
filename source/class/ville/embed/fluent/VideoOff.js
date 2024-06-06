/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VideoOff",
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

   var pathdregular = "M2.85 2.15a.5.5 0 1 0-.7.7l1.48 1.48A3 3 0 0 0 2 7v6a3 3 0 0 0 3 3h5a3 3 0 0 0 2.93-2.36l4.22 4.21a.5.5 0 0 0 .7-.7l-15-15ZM12 12.7V13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 1.39-1.9L12 12.7ZM12 7v2.88l1 1V8.54l3.6-2.5c.17-.1.4.01.4.21v7.5c0 .2-.23.32-.4.2l-1.71-1.18 2.19 2.18c.5-.14.92-.6.92-1.2v-7.5c0-1-1.13-1.6-1.96-1.03L13 7.32V7a3 3 0 0 0-3-3H6.12l1 1H10a2 2 0 0 1 2 2Z";
   var pathdfilled = "M2.85 2.15a.5.5 0 1 0-.7.7l1.48 1.48A3 3 0 0 0 2 7v6a3 3 0 0 0 3 3h5a3 3 0 0 0 2.93-2.36l4.22 4.21a.5.5 0 0 0 .7-.7l-15-15ZM14 11.88l3.08 3.07c.5-.14.92-.6.92-1.2v-7.5c0-1-1.13-1.6-1.96-1.03L14 6.63v5.25ZM6.12 4 13 10.88V7a3 3 0 0 0-3-3H6.12Z";
   
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