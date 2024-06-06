/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BuildingPeople",
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

   var pathdregular = "M6.75 6.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3.75-6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 9.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9.01 17H5V3.5c0-.28.22-.5.5-.5h6c.28 0 .5.22.5.5v5c0 .28.22.5.5.5h2c.28 0 .5.22.5.5v1.67c.1.13.17.27.24.41.22-.2.48-.35.76-.45V9.5c0-.83-.67-1.5-1.5-1.5H13V3.5c0-.83-.67-1.5-1.5-1.5h-6C4.67 2 4 2.67 4 3.5v14c0 .28.22.5.5.5h4.74a2.97 2.97 0 0 1-.23-1Zm5.49-4.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm1.5 4.06c0 1.1-.86 2.19-3 2.19s-3-1.1-3-2.19c0-.72.58-1.31 1.29-1.31h3.42c.71 0 1.29.59 1.29 1.31Zm.48 1.69h.02c1.79 0 2.5-.94 2.5-1.88a1.1 1.1 0 0 0-1.07-1.12H16.6c.25.38.4.83.4 1.31 0 .58-.17 1.18-.52 1.69ZM18 13.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z";
   var pathdfilled = "M5.5 2C4.67 2 4 2.67 4 3.5v14c0 .28.22.5.5.5h4.74A2.98 2.98 0 0 1 9 16.81c0-1.05.7-1.97 1.7-2.23a2.75 2.75 0 1 1 4.55-3c.2-.2.47-.35.75-.45V9.5c0-.83-.67-1.5-1.5-1.5H13V3.5c0-.83-.67-1.5-1.5-1.5h-6Zm2 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM6.75 8a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm.75 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm.75 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm4 4a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm1.5 4.06c0 1.1-.86 2.19-3 2.19s-3-1.1-3-2.19c0-.72.58-1.31 1.29-1.31h3.42c.71 0 1.29.59 1.29 1.31Zm.48 1.69h.02c1.79 0 2.5-.94 2.5-1.88a1.1 1.1 0 0 0-1.07-1.12H16.6c.25.38.4.83.4 1.31 0 .58-.17 1.18-.52 1.69ZM18 13.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z";
   
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