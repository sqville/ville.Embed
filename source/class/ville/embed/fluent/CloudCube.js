/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CloudCube",
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

   var pathdregular = "M10 4c2.73 0 4.32 1.8 4.62 4.04a2 2 0 0 0-.51.17l-.45.22v-.08C13.44 6.32 12.1 5 10 5 7.89 5 6.55 6.32 6.35 8.35a1 1 0 0 1-1 .9h-.07A2.33 2.33 0 0 0 3 11.62 2.33 2.33 0 0 0 5.28 14H10v1H5.28A3.33 3.33 0 0 1 2 11.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 5.9 7.18 4 10 4Zm8.45 6.6-3-1.5a1 1 0 0 0-.9 0l-3 1.5a1 1 0 0 0-.55.9v4a1 1 0 0 0 .55.9l3 1.5a1 1 0 0 0 .9 0l3-1.5a1 1 0 0 0 .55-.9v-4a1 1 0 0 0-.55-.9Zm-6.41 1.13a.5.5 0 0 1 .66-.26l2.3.99 2.3-1a.5.5 0 0 1 .4.93l-2.2.94V16a.5.5 0 1 1-1 0v-2.67l-2.2-.94a.5.5 0 0 1-.26-.66Z";
   var pathdfilled = "M10 4c2.73 0 4.32 1.8 4.62 4.04a2 2 0 0 0-.51.17l-3 1.5A2 2 0 0 0 10 11.5V15H5.28A3.33 3.33 0 0 1 2 11.62a3.33 3.33 0 0 1 3.28-3.37h.07C5.6 5.9 7.18 4 10 4Zm8.45 6.6-3-1.5a1 1 0 0 0-.9 0l-3 1.5a1 1 0 0 0-.55.9v4a1 1 0 0 0 .55.9l3 1.5a1 1 0 0 0 .9 0l3-1.5a1 1 0 0 0 .55-.9v-4a1 1 0 0 0-.55-.9Zm-6.41 1.13a.5.5 0 0 1 .66-.26l2.3.99 2.3-1a.5.5 0 0 1 .4.93l-2.2.94V16a.5.5 0 1 1-1 0v-2.67l-2.2-.94a.5.5 0 0 1-.26-.66Z";
   
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