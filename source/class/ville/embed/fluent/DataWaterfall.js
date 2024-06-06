/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DataWaterfall",
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

   var pathdregular = "M1 3.5c0-.28.22-.5.5-.5H7a2 2 0 0 1 2 2v4.5h6c1.04 0 2 .74 2 1.8V16h1.5a.5.5 0 0 1 0 1H13c-1.04 0-2-.74-2-1.8v-4.7H5a2 2 0 0 1-2-2V4H1.5a.5.5 0 0 1-.5-.5ZM4 4v4.5a1 1 0 0 0 1 1h3V5a1 1 0 0 0-1-1H4Zm12 12v-4.7c0-.38-.38-.8-1-.8h-3v4.7c0 .38.38.8 1 .8h3Z";
   var pathdfilled = "M1 3.5c0-.28.22-.5.5-.5H7a2 2 0 0 1 2 2v4.5h6c1.04 0 2 .74 2 1.8V16h1.5a.5.5 0 0 1 0 1H13c-1.04 0-2-.74-2-1.8v-4.7H5a2 2 0 0 1-2-2V4H1.5a.5.5 0 0 1-.5-.5Z";
   
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