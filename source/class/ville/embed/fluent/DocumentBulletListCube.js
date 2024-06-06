/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentBulletListCube",
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

   var pathdregular = "M8.5 10a.5.5 0 0 0-.45.29l.84.42a2 2 0 0 1 .43.29h4.18a.5.5 0 0 0 0-1h-5ZM5 4v5a2 2 0 0 0-.9.21l-.1.05V4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 0 1-2 2H9.33a2 2 0 0 0 .6-1H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1Zm8.5 11H10v-1h3.5a.5.5 0 0 1 0 1Zm0-2H10v-.5a2 2 0 0 0-.06-.5h3.56a.5.5 0 0 1 0 1Zm1.3-6L11 3.2v3.3c0 .28.22.5.5.5h3.3Zm-6.35 4.6-3-1.5a1 1 0 0 0-.9 0l-3 1.5a1 1 0 0 0-.55.9v4a1 1 0 0 0 .55.9l3 1.5a1 1 0 0 0 .9 0l3-1.5a1 1 0 0 0 .55-.9v-4a1 1 0 0 0-.55-.9Zm-6.41 1.13a.5.5 0 0 1 .66-.26l2.3.99 2.3-1a.5.5 0 0 1 .4.93l-2.2.94V17a.5.5 0 1 1-1 0v-2.67l-2.2-.94a.5.5 0 0 1-.26-.66Z";
   var pathdfilled = "M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v5.76l.1-.05a2 2 0 0 1 1.8 0l2.15 1.08A.5.5 0 0 1 8.5 10h5a.5.5 0 0 1 0 1H9.32a2 2 0 0 1 .62 1h3.56a.5.5 0 0 1 0 1H10v1h3.5a.5.5 0 0 1 0 1H10v1.5a2 2 0 0 1-.67 1.5h5.17c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm1 0V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Zm-2.55 5.1-3-1.5a1 1 0 0 0-.9 0l-3 1.5a1 1 0 0 0-.55.9v4a1 1 0 0 0 .55.9l3 1.5a1 1 0 0 0 .9 0l3-1.5a1 1 0 0 0 .55-.9v-4a1 1 0 0 0-.55-.9Zm-6.41 1.13a.5.5 0 0 1 .66-.26l2.3.99 2.3-1a.5.5 0 0 1 .4.93l-2.2.94V17a.5.5 0 1 1-1 0v-2.67l-2.2-.94a.5.5 0 0 1-.26-.66Z";
   
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