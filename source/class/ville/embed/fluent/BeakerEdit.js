/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BeakerEdit",
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

   var pathdregular = "M14 3a.5.5 0 0 1 0 1h-1v4.68c0 .58.15 1.15.42 1.66l.41.77-.73.74-.56-1.03A4.5 4.5 0 0 1 12 8.68V4H8v4.69a4.5 4.5 0 0 1-.54 2.13L6.82 12h6.12l-1 1H6.28l-1.22 2.26a.5.5 0 0 0 .44.74h3.97l-.04.16-.21.84H5.5a1.5 1.5 0 0 1-1.32-2.21l2.4-4.44a3.5 3.5 0 0 0 .41-1.66V4H6a.5.5 0 0 1 0-1h8Zm-3.02 12.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z";
   var pathdfilled = "M5.5 3.5c0-.28.22-.5.5-.5h8a.5.5 0 0 1 0 1h-1v4.68c0 .58.15 1.15.42 1.66l.41.77-.89.89H5.68l.9-1.65a3.5 3.5 0 0 0 .41-1.66V4H6a.5.5 0 0 1-.5-.5Zm4.77 11.17L11.94 13h-6.8l-.96 1.79A1.5 1.5 0 0 0 5.5 17h3.72l.21-.84a3.2 3.2 0 0 1 .84-1.49Zm.71.7 4.83-4.82a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z";
   
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