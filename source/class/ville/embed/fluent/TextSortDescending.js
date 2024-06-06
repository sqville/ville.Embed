/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextSortDescending",
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

   var pathdregular = "M4 2a.5.5 0 0 0 0 1h3.07L3.58 8.22A.5.5 0 0 0 4 9h4a.5.5 0 1 0 0-1H4.93l3.49-5.22A.5.5 0 0 0 8 2H4Zm2.47 8.32a.5.5 0 0 0-.94 0l-2.75 7a.5.5 0 1 0 .94.36L4.38 16h3.24l.66 1.68a.5.5 0 0 0 .94-.36l-2.75-7ZM6 11.87 7.23 15H4.77L6 11.87ZM14.5 2c.28 0 .5.22.5.5v13.8l2.15-2.15a.5.5 0 0 1 .7.7l-3 3a.5.5 0 0 1-.7 0l-3-3a.5.5 0 0 1 .7-.7L14 16.29V2.5c0-.28.22-.5.5-.5Z";
   var pathdfilled = "M4 2a.75.75 0 1 0 0 1.5h2.53L3.39 7.8A.75.75 0 0 0 4 9h4a.75.75 0 0 0 0-1.5H5.47l3.14-4.3A.75.75 0 0 0 8 2H4Zm2.7 8.5a.75.75 0 0 0-1.4 0L3.03 17a.75.75 0 1 0 1.42.5l.34-1h2.4l.34 1a.75.75 0 1 0 1.42-.5L6.7 10.5ZM6 13.04 6.68 15H5.32L6 13.04ZM14.25 2c.41 0 .75.34.75.75v12.57l1.45-1.58a.75.75 0 0 1 1.1 1.02l-2.75 3a.75.75 0 0 1-1.1 0l-2.75-3a.75.75 0 0 1 1.1-1.02l1.45 1.58V2.75c0-.41.34-.75.75-.75Z";
   
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