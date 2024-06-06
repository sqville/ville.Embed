/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BracesVariable",
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

   var pathdregular = "M5.5 3A2.5 2.5 0 0 0 3 5.5v2.88c0 .5-.28.95-.72 1.17a.5.5 0 0 0 0 .9c.44.22.72.68.72 1.17v2.88A2.5 2.5 0 0 0 5.5 17a.5.5 0 0 0 0-1A1.5 1.5 0 0 1 4 14.5v-2.88c0-.62-.24-1.2-.66-1.62.42-.42.66-1 .66-1.62V5.5C4 4.67 4.67 4 5.5 4a.5.5 0 0 0 0-1Zm9 0A2.5 2.5 0 0 1 17 5.5v2.88c0 .5.28.95.72 1.17a.5.5 0 0 1 0 .9 1.3 1.3 0 0 0-.72 1.17v2.88a2.5 2.5 0 0 1-2.5 2.5.5.5 0 0 1 0-1c.83 0 1.5-.67 1.5-1.5v-2.88c0-.62.24-1.2.66-1.62A2.3 2.3 0 0 1 16 8.38V5.5c0-.83-.67-1.5-1.5-1.5a.5.5 0 0 1 0-1ZM7.9 6.2a.5.5 0 0 0-.8.6L9.38 10l-2.3 3.2a.5.5 0 0 0 .82.6L10 10.85l2.1 2.93a.5.5 0 0 0 .8-.58L10.62 10l2.3-3.2a.5.5 0 1 0-.82-.6L10 9.15 7.9 6.21Z";
   var pathdfilled = "M5.75 2.5A2.75 2.75 0 0 0 3 5.25v3.13c0 .4-.22.76-.57.94a.75.75 0 0 0 0 1.36c.35.18.57.54.57.94v3.13a2.75 2.75 0 0 0 2.75 2.75.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25v-3.13c0-.6-.21-1.17-.58-1.62.37-.45.58-1.02.58-1.62V5.25C4.5 4.56 5.06 4 5.75 4a.75.75 0 0 0 0-1.5Zm8.5 0A2.75 2.75 0 0 1 17 5.25v3.13c0 .4.22.76.57.94a.75.75 0 0 1 0 1.36c-.35.18-.57.54-.57.94v3.13a2.75 2.75 0 0 1-2.75 2.75.75.75 0 0 1 0-1.5c.69 0 1.25-.56 1.25-1.25v-3.13c0-.6.21-1.17.58-1.62a2.56 2.56 0 0 1-.58-1.62V5.25c0-.69-.56-1.25-1.25-1.25a.75.75 0 0 1 0-1.5ZM8.11 6.06a.75.75 0 1 0-1.22.88L9.08 10l-2.19 3.06a.75.75 0 0 0 1.22.88L10 11.29l1.89 2.65a.75.75 0 0 0 1.22-.88L10.92 10l2.19-3.06a.75.75 0 0 0-1.22-.88L10 8.71 8.11 6.06Z";
   
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