/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CubeSync",
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

   var pathdregular = "M5.7 6.04a.5.5 0 1 0-.4.92l4.2 1.86v3.39a5.5 5.5 0 0 1 1-1.49v-1.9l4.2-1.86a.5.5 0 1 0-.4-.92L10 7.95l-4.3-1.9ZM9.07 16.6c.13.05.26.1.4.12.16.38.36.73.6 1.06a3.5 3.5 0 0 1-1.37-.25l-5.76-2.3a1.5 1.5 0 0 1-.94-1.4V6.18c0-.62.37-1.17.94-1.4l5.76-2.3a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.57.23.94.78.94 1.4v4.08a5.5 5.5 0 0 0-1-.66V6.18a.5.5 0 0 0-.31-.47l-5.76-2.3a2.5 2.5 0 0 0-1.86 0L3.31 5.7a.5.5 0 0 0-.31.47v7.64c0 .2.12.4.31.47l5.76 2.3Zm.93-2.1a4.5 4.5 0 1 0 9 .01 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.23.5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 1 1 0-1h.47a2 2 0 0 0-2.38.35.5.5 0 1 1-.71-.71 3 3 0 0 1 3.62-.48V12c0-.28.22-.5.5-.5Zm-.88 5.54a3 3 0 0 1-2.62-.18V17a.5.5 0 1 1-1 0v-1.5c0-.28.22-.5.5-.5H14a.5.5 0 0 1 0 1h-.47a1.97 1.97 0 0 0 1.72.1 2 2 0 0 0 .66-.44.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z";
   var pathdfilled = "M8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.57.23.94.78.94 1.4v4.08a5.48 5.48 0 0 0-7.5.46v-1.9l4.2-1.86a.5.5 0 1 0-.4-.92L10 7.95l-4.3-1.9a.5.5 0 1 0-.4.9l4.2 1.87v3.39a5.48 5.48 0 0 0 .58 5.56 3.5 3.5 0 0 1-1.38-.25l-5.76-2.3a1.5 1.5 0 0 1-.94-1.4V6.18c0-.62.37-1.17.94-1.4l5.76-2.3ZM10 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 1 1 0-1h.47a2 2 0 0 0-2.38.34.5.5 0 1 1-.71-.71 3 3 0 0 1 3.62-.48V12c0-.28.22-.5.5-.5Zm-.88 5.53a3 3 0 0 1-2.62-.18V17a.5.5 0 1 1-1 0v-1.5c0-.28.22-.5.5-.5H14a.5.5 0 0 1 0 1h-.47a1.97 1.97 0 0 0 1.72.1 2 2 0 0 0 .66-.44.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z";
   
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