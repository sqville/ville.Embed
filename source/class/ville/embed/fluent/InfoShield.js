/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.InfoShield",
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

   var pathdregular = "M17 9a8 8 0 1 0-6.28 7.81 5.93 5.93 0 0 1-.39-.94 7 7 0 1 1 5.64-7.47c.02 0 .03.02.04.03a5.06 5.06 0 0 0 .99.8V9ZM9.05 5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM9 7.5a.5.5 0 0 1 .5.41v4.59a.5.5 0 0 1-1 .1V8c0-.28.22-.5.5-.5Zm8 2.85a4.63 4.63 0 0 1-1-.59c-.24-.18-.48-.4-.72-.64a.39.39 0 0 0-.56 0 4.5 4.5 0 0 1-3.32 1.55.4.4 0 0 0-.4.41v2.77c.03.8.18 1.51.44 2.15A4.81 4.81 0 0 0 13 18c.52.4 1.15.73 1.87.98.09.03.17.03.26 0 2.56-.89 3.87-2.71 3.87-5.4V11a.4.4 0 0 0-.4-.33 4.24 4.24 0 0 1-1.6-.32Z";
   var pathdfilled = "M17 9a8 8 0 1 0-6.28 7.81 7.05 7.05 0 0 1-.72-2.93v-2.79c0-.75.59-1.42 1.4-1.42.9 0 1.76-.37 2.6-1.24a1.39 1.39 0 0 1 2 0 5.06 5.06 0 0 0 1 .8V9ZM8.5 7.91a.5.5 0 0 1 1 0V12.6a.5.5 0 0 1-1 0V7.9Zm-.25-2.16a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm8.75 4.6a4.63 4.63 0 0 1-1-.59c-.24-.18-.48-.4-.72-.64a.39.39 0 0 0-.56 0 4.5 4.5 0 0 1-3.32 1.55.4.4 0 0 0-.4.41v2.77c.03.8.18 1.51.44 2.15A4.81 4.81 0 0 0 13 18c.52.4 1.15.73 1.87.98.09.03.17.03.26 0 2.56-.89 3.87-2.71 3.87-5.4V11a.4.4 0 0 0-.4-.33 4.24 4.24 0 0 1-1.6-.32Z";
   
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