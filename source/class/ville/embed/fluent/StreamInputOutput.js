/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.StreamInputOutput",
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

   var pathdregular = "M13 3a6 6 0 0 0-6 6v1a2 2 0 0 1-2 2H2.5a.5.5 0 0 1 0-1H5a1 1 0 0 0 1-1V9a7 7 0 0 1 7-7h.5a.5.5 0 0 1 0 1H13Zm-3 6.5A3.5 3.5 0 0 1 13.5 6h4a.5.5 0 0 0 0-1h-4A4.5 4.5 0 0 0 9 9.5v1A3.5 3.5 0 0 1 5.5 14h-3a.5.5 0 0 0 0 1h3a4.5 4.5 0 0 0 4.5-4.5v-1Zm3 .5c0-.6.4-1 1-1h3.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H14a2 2 0 0 0-2 2v1c0 .9-.2 1.7-.5 2.4.3-.2.6-.4 1-.4h.2c.2-.6.3-1.3.3-2v-1Zm-.15 8.16a.5.5 0 0 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 0 1 .7.7l-1.14 1.16h5.58l-1.14-1.15a.5.5 0 0 1 .7-.7l2 2c.2.19.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7l1.14-1.15h-5.58l1.14 1.14Z";
   var pathdfilled = "M13.25 3.5A5.75 5.75 0 0 0 7.5 9.25v1c0 1.24-1 2.25-2.25 2.25h-2.5a.75.75 0 0 1 0-1.5h2.5c.41 0 .75-.34.75-.75v-1C6 5.25 9.25 2 13.25 2h.5a.75.75 0 0 1 0 1.5h-.5Zm-2.75 6c0-1.8 1.46-3.25 3.25-3.25h3.5a.75.75 0 0 0 0-1.5h-3.5A4.75 4.75 0 0 0 9 9.5v1c0 1.8-1.46 3.25-3.25 3.25h-3a.75.75 0 0 0 0 1.5h3a4.75 4.75 0 0 0 4.75-4.75v-1Zm3.75-.5a.75.75 0 0 0-.75.75v1c0 .66-.09 1.3-.25 1.9a1.9 1.9 0 0 0-1.59.05c.22-.61.34-1.27.34-1.95v-1c0-1.24 1-2.25 2.25-2.25h3a.75.75 0 0 1 0 1.5h-3Zm-1.4 9.16a.5.5 0 0 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 0 1 .7.7l-1.14 1.16h5.58l-1.14-1.15a.5.5 0 0 1 .7-.7l2 2c.2.19.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7l1.14-1.15h-5.58l1.14 1.14Z";
   
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