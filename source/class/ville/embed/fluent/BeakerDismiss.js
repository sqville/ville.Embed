/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BeakerDismiss",
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

   var pathdregular = "M14 3a.5.5 0 0 1 0 1h-1v4.68c0 .18.02.35.04.52-.33.09-.65.2-.95.35a4.5 4.5 0 0 1-.09-.87V4H8v4.69a4.5 4.5 0 0 1-.54 2.13L6.82 12H9.6c-.16.32-.3.65-.4 1H6.29l-1.22 2.26a.5.5 0 0 0 .44.74h3.7c.1.35.24.68.4 1H5.5a1.5 1.5 0 0 1-1.32-2.21l2.4-4.44a3.5 3.5 0 0 0 .41-1.66V4H6a.5.5 0 0 1 0-1h8Zm5 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-3.8 0 1.15-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15Z";
   var pathdfilled = "M5.5 3.5c0-.28.22-.5.5-.5h8a.5.5 0 0 1 0 1h-1v4.68c0 .18.02.35.04.52A5.51 5.51 0 0 0 9.6 12H5.68l.9-1.65a3.5 3.5 0 0 0 .41-1.66V4H6a.5.5 0 0 1-.5-.5Zm3.5 11c0-.52.07-1.02.2-1.5H5.16l-.97 1.79A1.5 1.5 0 0 0 5.5 17h4.1c-.38-.75-.6-1.6-.6-2.5Zm10 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-3.8 0 1.15-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15Z";
   
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